// https://github.com/Autodesk-Forge/forge-view.googledrive.models/blob/dc4598c68d3365f848f359f223b61fe8506462e5/routes/google.drive.tree.js#L52

// TODO: separate routes in different files: https://stackoverflow.com/questions/58769817/express-js-set-each-route-on-seperate-file

import "dotenv/config";

import express from "express";

import {
  channelCommentsService,
  videoCommentsService,
  crowdServiceBuilder,
  videoService,
} from "../services/index.js";

import { store } from "../libs/store/index.js";
import { getGoogleAuthURL, getGoogleToken } from "../libs/youtube/index.js";

// data to be stored in the session
const GAPI_ACCESS_TOKEN_KEY = "GAPI_ACCESS_TOKEN_KEY";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("It works!");
});

/**
 * @description Google generates the url that the user needs to visit to authenticated with google
 */
router.get("/api/google/auth", async (req, res) => {
  const url = await getGoogleAuthURL();
  res.redirect(url);
});

/**
 * @description This route is consumed after the user has authenticated with google
 *            and redirected back to your application.
 *
 * The redirect URL is must be the same as the one defined:
 * - in the Google "OAuth 2.0 Client IDs" configuration.
 * - .env file.
 */
router.get("/api/google/auth/callback", async (req, res) => {
  // get the code returned by Google from the query string
  const code = req.query.code;

  // get the access token from google using the code above
  const access_token = await getGoogleToken(code);

  // store the access token in the session
  store.set(GAPI_ACCESS_TOKEN_KEY, access_token);

  res.redirect("/");
});

/**
 * @description Get a paginated list of all the comments of a specific videoId
 */
router.get("/api/youtube/comments/video", async (req, res) => {
  // UCAuUUnT6oDeKwE6v1NGQxug

  try {
    const { id } = req.query;
    const commentsData = await videoCommentsService.getAllPaginated(id);
    res.send(commentsData);
  } catch (e) {
    const code = e?.code || 500;
    const error =
      e instanceof TypeError
        ? { status: code, message: "An error has occurred" }
        : e;
    res.status(code).send(error);
  }
});

/**
 * @description Get a not paginated list of all the comments of a specific videoId
 */
router.get("/api/youtube/comments/video/all", async (req, res) => {
  try {
    const { id } = req.query;

    let commentsData = await videoCommentsService.getAll({ id });

    res.send(commentsData);
  } catch (e) {
    const code = e?.code || 500;
    const error =
      e instanceof TypeError
        ? { status: code, message: "An error has occurred" }
        : e;
    res.status(code).send(error);
  }
});

/**
 * @description Get a paginated list of comments for a specific channelId
 */
router.get("/api/youtube/comments/channel", async (req, res) => {
  // UCAuUUnT6oDeKwE6v1NGQxug

  try {
    const { id, nextPage } = req.query;
    const commentsData = await channelCommentsService.getAllPaginated({
      id,
      nextPage,
    });
    res.send(commentsData);
  } catch (e) {
    const code = e?.code || 500;
    const error =
      e instanceof TypeError
        ? { status: code, message: "An error has occurred" }
        : e;

    res.status(code).send(error);
  }
});

/**
 * @description Get a NOT paginated list of all the comments of a specific channelId
 *
 * This api returns all the comments of a channel with no filters,
 * then it is a very large data set and it is not recommended to use it.
 * It is best use the api "/api/youtube/videos/comments" that
 * filters the comments by the publishedAfter date of the video.
 *
 */
router.get("/api/youtube/comments/channel/all", async (req, res) => {
  // TODO: need to refactor this repeated code
  try {
    const { id } = req.query;

    let commentsData = await channelCommentsService.getAll({ id });

    res.send(commentsData);
  } catch (e) {
    const code = e?.code || 500;
    const error =
      e instanceof TypeError
        ? { status: code, message: "An error has occurred" }
        : e;
    res.status(code).send(error);
  }
});

/**
 * @description Get the list of videos from a channel
 */
router.get("/api/youtube/videos/channel", async (req, res) => {
  try {
    const { id: channelId, nextPage, prevPage } = req.query;
    const pageToken = nextPage || prevPage;
    const { videos, nextPageToken, prevPageToken } =
      await videoService.getAllVideosByChannelIdPaginated({
        channelId,
        pageToken,
      });
    res.send({
      nextPageToken,
      prevPageToken,
      videos,
    });
  } catch (e) {
    const code = e?.code || 500;
    const error =
      e instanceof TypeError
        ? { status: code, message: "An error has occurred" }
        : e;
    res.status(code).send(error);
  }
});

/**
 * @description Get the list of comment of videos published X days ago
 *
 * @param {string} id - channelId
 * @param {string} type - video|channel|playlist
 * @param {number} days - number of days
 */
router.get("/api/youtube/videos/comments", async (req, res) => {
  try {
    const { id: channelId, days, type } = req.query;
    const daysToDate = days || 10;

    let collection = [];
    collection = await videoService.getCommentsAllVideosByChannelId({
      channelId,
      daysToDate,
    });

    res.send(collection);
  } catch (e) {
    console.log(e);
    const code = e?.code || 500;
    const error =
      e instanceof TypeError
        ? { status: code, message: "An error has occurred" }
        : e;
    res.status(code).send(error);
  }
});

/**
 * @description Get comments words frequency of a channel videos published X days ago
 *
 * @param {string} channelId
 * @param {number} days - number of days the video was published
 *
 * @return {object} { word: { frequency: number, comments: string[ ] } }
 * Returns an object with the key:value pairs of the word
 * and the number of times it appears in the comments with the array of commetns that contains the word
 */
router.get("/api/youtube/videos/comments/crowd", async (req, res) => {
  //UCCcmNppYF2F6f1R4uWqhkCA mara
  // UCssWuTdNCWN4RSF3wHzzjMw nicola
  try {
    const { id: channelId, days } = req.query;
    const daysToDate = days || 10;

    let collection = [];

    try {
      collection = await videoService.getCommentsAllVideosByChannelId({
        channelId,
        daysToDate,
      });
    } catch (error) {
      console.log(error);
    }

    const crowdService = crowdServiceBuilder(collection);

    const frequencyMap = crowdService.getFrequencyMap();

    res.send(frequencyMap);
  } catch (e) {
    const code = e?.code || 500;
    const error =
      e instanceof TypeError
        ? { status: code, message: "An error has occurred" }
        : e;
    res.status(code).send(error);
  }
});

/**
 * @description Get comments words frequency of a specific video of channel
 *
 * @param {string} channelId
 * @param {string} videoId
 *
 * @return {object} { word: { frequency: number, comments: string[ ] } }
 * Returns an object with the key:value pairs of the word
 * and the number of times it appears in the comments
 * with the array of comments that contains the word
 */
router.get("/api/youtube/video/comments/crowd", async (req, res) => {
  // Big call: http://localhost:3000/api/youtube/video/comments/crowd?channeld=UCp73CurZ5DWdCPExp8pP9Vw&videoId=Z1y3Alas8Zs
  // Smart call: http://localhost:3000/api/youtube/video/comments/crowd?channeld=UCssWuTdNCWN4RSF3wHzzjMw&videoId=uThQCnqn1pU
  try {
    const { channelId, videoId } = req.query;

    let collection = [];

    try {
      collection = await videoService.getCommentsOfVideoId({
        videoId,
        channelId,
      });
    } catch (error) {
      console.log(error);
    }

    const crowdService = crowdServiceBuilder(collection);

    const frequencyMap = crowdService.getFrequencyMap();

    res.send(frequencyMap);
  } catch (e) {
    const code = e?.code || 500;
    const error =
      e instanceof TypeError
        ? { status: code, message: "An error has occurred" }
        : e;
    res.status(code).send(error);
  }
});

export default router;

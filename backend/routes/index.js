// https://github.com/Autodesk-Forge/forge-view.googledrive.models/blob/dc4598c68d3365f848f359f223b61fe8506462e5/routes/google.drive.tree.js#L52
import "dotenv/config";

import express from "express";

import {
  channelCommentsService,
  videoCommentsService,
} from "../src/app/comments/comments.service.js";
import crowdServiceBuilder from "../src/app/crowd/crowd.service.js";
import videoService from "../src/app/videos/videos.service.js";
import store from "../src/store.js";
import { getGoogleAuthURL, getGoogleToken } from "../src/youtube/googleAuth.js";

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
      await videoService.getAllPaginated({
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
    collection = await videoService.getAllVideosComments({
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
 * @description
 */
router.get("/api/youtube/videos/comments/crowd", async (req, res) => {
  try {
    const { id: channelId, days } = req.query;
    const daysToDate = days || 10;

    let collection = [];

    try {
      collection = await videoService.getAllVideosComments({
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

export default router;

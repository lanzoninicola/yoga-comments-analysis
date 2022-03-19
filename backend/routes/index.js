// https://github.com/Autodesk-Forge/forge-view.googledrive.models/blob/dc4598c68d3365f848f359f223b61fe8506462e5/routes/google.drive.tree.js#L52
import "dotenv/config";

import express from "express";

import { getGoogleAuthURL, getGoogleToken } from "../src/youtube/googleAuth.js";
import { Store } from "../src/store.js";

// data to be stored in the session
const store = new Store();
const GAPI_ACCESS_TOKEN_KEY = "GAPI_ACCESS_TOKEN_KEY";

import {
  YouTubeChannelCommentThread,
  YouTubeVideoCommentThread,
} from "../src/app/comments/comments.js";
import { CommentCollection } from "../src/models/comments/comments.collection.js";
import { YouTubeChannelVideo } from "../src/app/videos/videos.js";

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
    const commentThread = new YouTubeVideoCommentThread();

    const commentsData = await commentThread.list(id);
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
    const commentThread = new YouTubeVideoCommentThread();
    const collection = new CommentCollection();

    let commentsData = await commentThread.list(id);
    let nextPageToken = commentsData.nextPageToken;

    collection.addBulk(commentsData.comments);

    while (nextPageToken) {
      commentsData = await commentThread.list(id, nextPageToken);
      collection.addBulk(commentsData.comments);
      nextPageToken = commentsData.nextPageToken;
    }

    res.send(collection.comments);
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
    const { id } = req.query;
    const commentThread = new YouTubeChannelCommentThread();

    const commentsData = await commentThread.list(id);
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
 * @description Get a not paginated list of all the comments of a specific channelId
 */
router.get("/api/youtube/comments/channel/all", async (req, res) => {
  // TODO: need to refactor this repeated code
  try {
    const { id } = req.query;
    const commentThread = new YouTubeChannelCommentThread();
    const collection = new CommentCollection();

    let commentsData = await commentThread.list(id);
    let nextPageToken = commentsData.nextPageToken;

    collection.addBulk(commentsData.comments);

    while (nextPageToken) {
      commentsData = await commentThread.list(id, nextPageToken);
      collection.addBulk(commentsData.comments);
      nextPageToken = commentsData.nextPageToken;
    }

    res.send(collection.comments);
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
    const { id: channelId } = req.query;
    const channel = new YouTubeChannelVideo();
    const { videos, nextPageToken, prevPageToken } = await channel.list({
      channelId,
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

router.get("/api/youtube/videos/comments", async (req, res) => {
  try {
    const { id: channelId } = req.query;
    const channel = new YouTubeChannelVideo();
    const comments = new YouTubeVideoCommentThread();

    const videos = await channel.getAll({ channelId });

    videos.forEach(async (video) => {
      const commentsData = await comments.list(video.id);
      res.send(commentsData);
    });
  } catch (error) {
    res.status(error.code).send(error);
  }
});

export default router;

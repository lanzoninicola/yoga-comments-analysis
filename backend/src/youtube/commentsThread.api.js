import client from "./client.js";
import { YouTubeCommentThreadAPIMock } from "../mocks/youtube/commentsThread.api.mock.js";
import { YouTubeAPIError } from "./error.js";

import youtubeAPICache from "../cache.js";

class YouTubeCommentThreadAPI {
  quota = 1;

  constructor(cache) {
    this.cache = cache;
  }

  list(action, params) {
    return new Promise((resolve, reject) => {
      const { channelId, pageToken } = params;

      // const cachedValue = this.cache.get(action, channelId, pageToken);
      // if (cachedValue) {
      //   resolve(cachedValue);
      // } else {
      client.commentThreads.list(params, (err, response) => {
        if (err) {
          reject(new YouTubeAPIError(err));
        } else {
          // this.cache.set(action, channelId, pageToken, response.data);
          resolve(response.data);
        }
      });
      // }
    });
  }
}

let commentsThreadApi;

if (process.env.DEV_STATE === "dev") {
  commentsThreadApi = new YouTubeCommentThreadAPIMock(youtubeAPICache);
}

if (process.env.DEV_STATE === "test") {
  commentsThreadApi = new YouTubeCommentThreadAPI(youtubeAPICache);
}

export default commentsThreadApi;

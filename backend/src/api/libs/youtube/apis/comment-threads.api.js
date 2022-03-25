import { youtubeClient } from "../index.js";
import { YouTubeCommentThreadAPIMock } from "../mocks/index.js";
import { YouTubeAPIError } from "../index.js";

import youtubeAPICache from "../cache/cache.js";

class YouTubeCommentThreadsAPI {
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
      youtubeClient.commentThreads.list(params, (err, response) => {
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

let commentThreadsApi;

if (process.env.DEV_STATE === "dev") {
  commentThreadsApi = new YouTubeCommentThreadAPIMock(youtubeAPICache);
}

if (process.env.DEV_STATE === "test") {
  commentThreadsApi = new YouTubeCommentThreadsAPI(youtubeAPICache);
}

export default commentThreadsApi;

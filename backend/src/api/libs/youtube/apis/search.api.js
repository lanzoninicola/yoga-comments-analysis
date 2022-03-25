import "dotenv/config";

import { youtubeAPICache } from "../cache/index.js";
import { YouTubeAPIError, youtubeClient } from "../index.js";
import { YouTubeSearchAPIMock } from "../mocks/index.js";

class YouTubeSearchAPI {
  quota = 100;

  constructor(cache) {
    this.cache = cache;
  }

  /**
   * @description Call the YouTube API to search based on the params passed to the constructor
   *
   * @returns response.data - Data returned from the YouTube API not serialized
   */
  videos(params) {
    return new Promise((resolve, reject) => {
      const { channelId, pageToken } = params;

      youtubeClient.search.list(params, (err, response) => {
        if (err) {
          reject(new YouTubeAPIError(err));
        } else {
          resolve(response.data);
        }
      });
    });
  }
}

let searchAPI;

if (process.env.DEV_STATE === "dev") {
  searchAPI = new YouTubeSearchAPIMock(youtubeAPICache);
}

if (process.env.DEV_STATE === "test") {
  searchAPI = new YouTubeSearchAPI(youtubeAPICache);
}

export default searchAPI;

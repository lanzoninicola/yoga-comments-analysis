import client from "./client.js";
import { YouTubeAPIError } from "./error.js";
import { pastDate } from "../app/utils.js";

export class YouTubeSearch {
  constructor(params = {}) {
    this.params = params;
  }

  /**
   * @description Call the YouTube API to search based on the params passed to the constructor
   *
   * @returns response.data - Data returned from the YouTube API not serialized
   */
  list() {
    return new Promise((resolve, reject) => {
      client.search.list(this.params, (err, response) => {
        if (err) {
          reject(new YouTubeAPIError(err));
        } else {
          resolve(response.data);
        }
      });
    });
  }
}

export class SearchParams {
  baseParams = {
    part: "snippet",
    maxResults: 50,
  };

  defaultDaysToday = 120;

  /**
   * @description Constructs the params for the YouTube API to search for videos
   *
   * @param channelId - The id of the channel to search for
   * @param pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved,
   * @param publishedAfter - Filter on resources published after this date (ISO 8601)
   *
   * @returns params - The params for the YouTube API to search for videos
   */
  channel({ channelId, pageToken, publishedAfter }) {
    const _publishedAfter = publishedAfter || pastDate(this.defaultDaysToday);

    return {
      ...this.baseParams,
      channelId: channelId,
      pageToken: pageToken ? pageToken : "",
      publishedAfter: _publishedAfter,
    };
  }
}

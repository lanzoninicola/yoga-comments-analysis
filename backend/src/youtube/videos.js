import { SearchParams, YouTubeSearch } from "./search.js";

export class YouTubeChannelVideoAPI {
  /**
   * @description Call YouTube API and returns a list of videos from a channel without pagination
   *
   * @param channelId - string - The *channelId* parameter specifies a YouTube channel ID. The API will only return that channel's videos.
   * @param pageToken - string - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
   * @param publishedAfter - string - Filter on resources published after this date (ISO 8601)
   *
   * @returns response.data - Data returned from the YouTube API not serialized
   */
  async list({ channelId, pageToken, publishedAfter }) {
    const params = new SearchParams();
    const channelParams = params.channel({
      channelId,
      pageToken,
      publishedAfter,
    });
    const searchAPI = new YouTubeSearch(channelParams);
    const videos = await searchAPI.list();

    return videos;
  }
}

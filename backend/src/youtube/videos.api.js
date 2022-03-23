import "dotenv/config";
import { searchAPI, searchParams } from "./search.api.js";
import { YouTubeChannelVideoAPIMock } from "../mocks/youtube/videos.api.mock.js";

class YouTubeChannelVideoAPI {
  constructor(searchAPI, searchParams) {
    this.searchAPI = searchAPI;
    this.searchParams = searchParams;
  }

  /**
   * @description Call YouTube API and returns a list of videos from a channel without pagination.
   *
   * This API uses the Youtube Seach API to perform a search for videos from a channel.
   *
   * @param channelId - string - The *channelId* parameter specifies a YouTube channel ID. The API will only return that channel's videos.
   * @param pageToken - string - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
   * @param daysToDate - number - Filter on resources published X days ago - Default 120 days
   *
   * @returns video - Data returned from the YouTube API not serialized
   */
  async list(action, { channelId, pageToken, daysToDate }) {
    const searchVideoParams = this.searchParams.videos({
      channelId,
      pageToken,
      daysToDate,
    });

    const videosResponseData = await this.searchAPI.videos(
      action,
      searchVideoParams
    );

    const videos = {
      ...videosResponseData,
      item: videosResponseData.items.filter(
        (video) => video.id.kind === "youtube#video"
      ),
    };

    return videos;
  }
}

let videosApi;

const videosApiProd = new YouTubeChannelVideoAPI(searchAPI, searchParams);

const videosApiMock = new YouTubeChannelVideoAPIMock(videosApiProd);

videosApi = process.env.DEV_STATE === "prod" ? videosApiProd : videosApiMock;

export default videosApi;
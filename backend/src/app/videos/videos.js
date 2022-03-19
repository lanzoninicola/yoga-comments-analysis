import { YouTubeChannelVideoAPI } from "../../youtube/videos.js";
import { VideosSerializer } from "./videos.serializer.js";

export class YouTubeChannelVideo {
  /**
   * @description Call YouTube API and returns a list of videos from a channel without pagination
   *
   * @param channelId - string - The *channelId* parameter specifies a YouTube channel ID. The API will only return that channel's videos.
   * @param pageToken - string - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
   * @param publishedAfter - string - Filter on resources published after this date (ISO 8601)
   *
   * @returns videos[] - array of videos deserialized
   */
  async getAll({ channelId, pageToken, publishedAfter }) {
    let videos = [];

    const api = new YouTubeChannelVideoAPI();
    let videosAPIData = await api.list({
      channelId,
      pageToken,
      publishedAfter,
    });

    let nextPageToken = videosAPIData.nextPageToken;

    videos = [...videos, ...videosAPIData.items];

    while (nextPageToken) {
      console.log(nextPageToken);
      videosAPIData = await api.list({ channelId, pageToken: nextPageToken });
      videos = [...videos, ...videosAPIData.items];
      nextPageToken = videosAPIData.nextPageToken;
    }

    const videoDeserialized = this.deserialize(videos);

    return videoDeserialized;
  }

  /**
   * @description Call YouTube API and returns a list of videos from a channel with pagination
   *
   * @param channelId - string - The *channelId* parameter specifies a YouTube channel ID. The API will only return that channel's videos.
   * @param pageToken - string - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
   * @param publishedAfter - string - Filter on resources published after this date (ISO 8601)
   *
   * @returns object - {  nextPageToken: string|null, prevPageToken: string|null, videos: array of videos deserialized }
   */
  async getPaginated({ channelId, pageToken, publishedAfter }) {
    const api = new YouTubeChannelVideoAPI();
    let videosAPIData = await api.list({
      channelId,
      pageToken,
      publishedAfter,
    });

    const { items, nextPageToken, prevPageToken } = videosAPIData;
    const videoDeserialized = this.deserialize(items);

    return {
      nextPageToken: nextPageToken || null,
      prevPageToken: prevPageToken || null,
      videos: videoDeserialized,
    };
  }

  /**
   * @description Call YouTube API and returns a list of videos from a channel without pagination
   *
   * @param items - array of videos from the YouTube API not serialized
   */
  deserialize(items) {
    const serializer = new VideosSerializer();
    return serializer.baseData(items);
  }
}

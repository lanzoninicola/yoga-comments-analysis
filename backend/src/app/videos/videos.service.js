import videosApi from "../../youtube/videos.api.js";
import { VideosSerializer } from "./videos.serializer.js";
import { videoCommentsService } from "../comments/comments.service.js";

class VideosService {
  /**
   *
   * @param api - instance of the YouTubeChannelVideoApi
   * @param videoCommentsService - instance of the CommentsService with video context
   */
  constructor(api, videoCommentsService) {
    this.api = api;
    this.videoCommentsService = videoCommentsService;
  }

  /**
   * @description Call YouTube API and returns the list of all videos from a channel without pagination
   *
   * @param channelId - string - The *channelId* parameter specifies a YouTube channel ID. The API will only return that channel's videos.
   * @param pageToken - string - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
   * @param daysToDate - number - Filter on resources published X days ago - Default 120 days
   *
   * @returns videos[] - array of videos deserialized
   */
  async getAll({ channelId, pageToken, daysToDate }) {
    const SEARCH_ALL_VIDEOS = "SEARCH_ALL_VIDEOS";

    let videos = [];

    let videosAPIData = await this.api.list(SEARCH_ALL_VIDEOS, {
      channelId,
      pageToken,
      daysToDate,
    });

    videos = [...videos, ...videosAPIData.items];

    let nextPageToken = videosAPIData.nextPageToken;

    while (nextPageToken) {
      console.log("videoservice - getAll - inside while", nextPageToken);
      videosAPIData = await this.api.list(SEARCH_ALL_VIDEOS, {
        channelId,
        pageToken: nextPageToken,
      });
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
  async getAllPaginated({ channelId, pageToken, daysToDate }) {
    const SEARCH_ALL_VIDEOS_PAGINATED = "SEARCH_ALL_VIDEOS_PAGINATED";

    let videosAPIData = await this.api.list(SEARCH_ALL_VIDEOS_PAGINATED, {
      channelId,
      pageToken,
      daysToDate,
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
   * 
   * @param channelId - string - The *channelId* parameter specifies a YouTube channel ID. The API will only return that channel's videos.
   * @param daysToDate - number - Filter on resources published X days ago - Default 120 days
   * @returns array of object that contains the comments of the video
   * 
   * @example 
   * [
        {
          "videoId": string,
          "title": string,
          "publishedAt": string - date ISO8601,
          "comments": string[]
        },
         {
          "videoId": string,
          "title": string,
          "publishedAt": string - date ISO8601,
          "comments": string[]
        },
   * ]
   *
   */
  async getAllVideosComments({ channelId, daysToDate }) {
    const videos = await this.getAll({ channelId, daysToDate });

    let foo = [];

    let collection = await Promise.all(
      videos.map(async (video) => {
        let commentsData = await this.videoCommentsService
          .getAll({
            id: video.videoId,
          })
          .catch((e) => console.log(e));

        return {
          videoId: video.videoId,
          title: video.title,
          publishedAt: video.publishedAt,
          comments: commentsData,
        };
      })
    );

    return collection;
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

const videoService = new VideosService(videosApi, videoCommentsService);

export default videoService;

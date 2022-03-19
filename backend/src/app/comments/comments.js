import { YouTubeCommentThreadAPI } from "../../youtube/comments.js";
import { CommentSerializer } from "./comments.serializer.js";

export class YouTubeChannelCommentThread {
  i = 0;

  async list(id, nextPageToken) {
    console.log(`loading the list ${this.i++}`);
    const params = new CommentThreadParams();
    const channelParams = params.channel({ id, nextPageToken });
    const commentThread = new YouTubeCommentThreadAPI(channelParams);
    const commentsData = await commentThread.list();

    const { items, nextPageToken: pageToken } = commentsData;

    const serializer = new CommentSerializer();

    return {
      comments: serializer.onlyText(items),
      pageToken,
    };
  }

  /**
   * @description Call YouTube API and returns a list of videos from a channel without pagination
   *
   * @param channelId - string - The *channelId* parameter specifies a YouTube channel ID. The API will only return that channel's videos.
   * @param pageToken - string - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
   * @param publishedAfter - string - Filter on resources published after this date (ISO 8601)
   *
   * @returns comments[] - array of comments deserialized
   */
  async getAll({ id, nextPageToken }) {
    let comments = [];

    const params = new CommentThreadParams();
    let channelParams = params.channel({ id, nextPageToken });
    let api = new YouTubeCommentThreadAPI(channelParams);
    const commentsAPIData = await api.list();

    let _nextPageToken = commentsAPIData.nextPageToken;

    comments = [...comments, ...commentsAPIData.items];

    while (_nextPageToken) {
      let channelParams = params.channel({ id, nextPageToken: _nextPageToken });
      let api = new YouTubeCommentThreadAPI(channelParams);
      commentsAPIData = await api.list({
        channelId,
        pageToken: nextPageToken,
      });
      comments = [...comments, ...commentsAPIData.items];
      _nextPageToken = commentsAPIData.nextPageToken;
    }

    const commentDeserialized = this.deserialize(videos);

    return commentDeserialized;
  }

  deserialize(items) {
    const serializer = new CommentSerializer();
    return serializer.baseData(items);
  }
}

export class YouTubeVideoCommentThread {
  i = 0;
  async list(id, nextPageToken) {
    console.log(`loading the list ${this.i++}`);
    const params = new CommentThreadParams();
    const channelParams = params.video({ id, nextPageToken });
    const commentThread = new YouTubeCommentThreadAPI(channelParams);

    const commentsData = await commentThread.list();

    const { items, nextPageToken: pageToken } = commentsData;

    const serializer = new CommentSerializer();

    return {
      comments: serializer.onlyText(items),
      pageToken,
    };
  }
}

class CommentThreadParams {
  baseParams = {
    part: "snippet,replies",
    maxResults: 1000,
    textFormat: "plainText",
  };

  video({ id, nextPageToken }) {
    return {
      ...this.baseParams,
      videoId: id,
      nextPageToken: nextPageToken ? nextPageToken : "",
    };
  }

  channel({ id, nextPageToken }) {
    return {
      ...this.baseParams,
      allThreadsRelatedToChannelId: id,
      nextPageToken: nextPageToken ? nextPageToken : "",
    };
  }
}

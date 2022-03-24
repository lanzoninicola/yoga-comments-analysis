import commentsApi from "../../youtube/comments.api.js";
import commentSerializer from "./comments.serializer.js";

// TODO: How to handle API params for the video or channel comments?

class CommentsService {
  i = 0;

  /**
   * @param api - object - Instance of YouTubeCommentThreadAPI (commentsApi)
   * @param apiParams - object - Instance of CommentThreadParams
   * @param context - string - "video" or "channel"
   */
  constructor(api, apiParams, context, serializer) {
    this.api = api;
    this.apiParams = apiParams;
    this.context = context;
    this.serializer = serializer;
  }

  /**
   * @description Call YouTube API and returns a list of comments from a channel without pagination
   *
   * @param channelId - string - The *channelId* parameter specifies a YouTube channel ID. The API will only return that channel's comments.
   * @param pageToken - string - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
   *
   * @returns comments[] - array of comments deserialized
   */
  async getAll({ id }) {
    console.log("Getting all comments");
    const ALL_COMMENTS = "ALL_COMMENTS";

    let comments = [];

    let params = this.getParams({ id });

    let commentsAPIResponsePage = await this.api
      .list(ALL_COMMENTS, params)
      .catch((e) => console.log(e));

    let _nextPageToken = commentsAPIResponsePage?.nextPageToken;

    comments = [...comments, ...commentsAPIResponsePage.items];

    while (_nextPageToken) {
      let params = this.getParams({ id, nextPageToken: _nextPageToken });

      commentsAPIResponsePage = await this.api.list(ALL_COMMENTS, params);
      console.log(
        "Inside while - getting comments page token",
        commentsAPIResponsePage.nextPageToken
      );
      comments = [...comments, ...commentsAPIResponsePage.items];
      _nextPageToken = commentsAPIResponsePage?.nextPageToken;
    }

    const commentDeserialized = this._deserialize(comments);

    console.log("Returning comment deserialized");
    return commentDeserialized;
  }

  /**
   * @description Call YouTube API and returns a list of comments from a channel without pagination
   *
   * @param channelId - string - The *channelId* parameter specifies a YouTube channel ID. The API will only return that channel's comments.
   * @param pageToken - string - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
   *
   * @returns object - {  pageToken: string|null, comments: array of comments deserialized }
   */
  async getAllPaginated({ id, nextPageToken }) {
    const ALL_COMMENTS_PAGINATED = "ALL_COMMENTS_PAGINATED";

    let params = this.apiParams.channel({ id, nextPageToken });
    const commentsAPIResponsePage = await this.api.list(
      ALL_COMMENTS_PAGINATED,
      params
    );

    const { items, nextPageToken: pageToken } = commentsAPIResponsePage;

    const commentDeserialized = this._deserialize(items);

    return {
      comments: commentDeserialized,
      pageToken,
    };
  }

  async callAPI(action, params) {}

  /**
   *
   * @param items - array - array of comments
   *
   * [
   *  {
          kind: 'youtube#commentThread',
          etag: 'vi0foh1ZdCjbGl8zfh16YqYaSGU',
          id: 'UgzWOXHD9yDD_eNwG4B4AaABAg',
          snippet: {
            videoId: 'TkDNv3YzRvg',
            topLevelComment: [Object],
            canReply: true,
            totalReplyCount: 0,
            isPublic: true
          }
        },
   * ]
   *
   * @returns
   */
  _deserialize(items) {
    console.log("Deserializing the comments of response page");
    return this.serializer.extractCommentText(items);
  }

  getParams({ id, nextPageToken }) {
    if (this.context === "channel") {
      return this.apiParams.channel({ id, nextPageToken });
    }

    return this.apiParams.video({ id, nextPageToken });
  }

  /*
  async _callAPI(action, { id, nextPageToken }) {
    let params = this.getParams({ id, nextPageToken });
    let commentsAPIResponsePage = await this.api.list(action, params);

    const { items, nextPageToken } = commentsAPIResponsePage;

    return { items, nextPageToken };
  }
  */
}

class CommentThreadParams {
  baseParams = {
    part: "snippet",
    maxResults: 100,
    textFormat: "plainText",
  };

  video({ id, nextPageToken }) {
    const params = {
      ...this.baseParams,
      videoId: id,
    };

    if (nextPageToken) {
      params.pageToken = nextPageToken;
    }

    return params;
  }

  channel({ id, nextPageToken }) {
    const params = {
      ...this.baseParams,
      allThreadsRelatedToChannelId: id,
    };

    if (nextPageToken) {
      params.pageToken = nextPageToken;
    }

    return params;
  }
}

const commentAPIParams = new CommentThreadParams();

export const channelCommentsService = new CommentsService(
  commentsApi,
  commentAPIParams,
  "channel",
  commentSerializer
);
export const videoCommentsService = new CommentsService(
  commentsApi,
  commentAPIParams,
  "video",
  commentSerializer
);

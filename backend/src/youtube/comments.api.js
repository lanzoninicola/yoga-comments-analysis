import { YouTubeCommentsAPIMock } from "../mocks/youtube/comments.api.mock.js";
import commentsThreadApi from "./commentsThread.api.js";

export class YouTubeCommentsAPI {
  constructor(api) {
    this.api = api;
  }

  async list(action, params) {
    const comments = await this.api.list(action, params);

    return comments;
  }
}

let commentsApi;

const commentsApiProd = new YouTubeCommentsAPI(commentsThreadApi);

const commentsApiMock = new YouTubeCommentsAPIMock(commentsApiProd);

commentsApi =
  process.env.DEV_STATE === "prod" ? commentsApiProd : commentsApiMock;

export default commentsApi;

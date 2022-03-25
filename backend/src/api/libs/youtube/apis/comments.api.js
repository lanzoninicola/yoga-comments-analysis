import { YouTubeCommentsAPIMock } from "../mocks/index.js";
import { commentThreadsApi } from "../index.js";

class YouTubeCommentsAPI {
  constructor(api) {
    this.api = api;
  }

  async list(action, params) {
    const comments = await this.api.list(action, params);

    return comments;
  }
}

let commentsApi;

const commentsApiProd = new YouTubeCommentsAPI(commentThreadsApi);

const commentsApiMock = new YouTubeCommentsAPIMock(commentsApiProd);

commentsApi =
  process.env.DEV_STATE === "prod" ? commentsApiProd : commentsApiMock;

export default commentsApi;

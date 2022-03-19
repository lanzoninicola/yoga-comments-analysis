import client from "./client.js";
import { YouTubeAPIError } from "./error.js";

export class YouTubeCommentThreadAPI {
  constructor(params = {}) {
    this.params = params;
  }

  list() {
    return new Promise((resolve, reject) => {
      client.commentThreads.list(this.params, (err, response) => {
        if (err) {
          reject(new YouTubeAPIError(err));
        } else {
          resolve(response.data);
        }
      });
    });
  }
}

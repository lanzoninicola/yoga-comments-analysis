export class YouTubeCommentsAPIMock {
  execution = 0;
  MAX_EXECUTION = 8;

  comments = {};

  constructor(prodAPI) {
    this.prodAPI = prodAPI;
  }

  async list(action, params) {
    if (this.execution < this.MAX_EXECUTION) {
      this.comments = await this.prodAPI.list(action, params);
    }

    this.execution++;

    if (this.execution === this.MAX_EXECUTION) {
      return (this.comments = {
        ...this.comments,
        nextPageToken: null,
      });
    }

    return this.comments;
  }
}

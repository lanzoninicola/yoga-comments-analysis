export class YouTubeCommentsAPIMock {
  constructor(commentThreadAPI) {
    this.commentThreadAPI = commentThreadAPI;
  }

  async list(action, params) {
    const commentAPIResponsePage = await this.commentThreadAPI.list(
      action,
      params
    );

    return commentAPIResponsePage;
  }
}

export class YouTubeChannelVideoAPIMock {
  execution = 0;
  MAX_EXECUTION = 5;

  videos = {};

  constructor(prodAPI) {
    this.prodAPI = prodAPI;
  }

  async list(action, { channelId, pageToken, daysToDate }) {
    if (this.execution < this.MAX_EXECUTION) {
      this.videos = await this.prodAPI.list(action, {
        channelId,
        pageToken,
        daysToDate,
      });
    }

    this.execution++;

    if (this.execution === this.MAX_EXECUTION) {
      return (this.videos = {
        ...this.videos,
        nextPageToken: null,
      });
    }

    return this.videos;
  }
}

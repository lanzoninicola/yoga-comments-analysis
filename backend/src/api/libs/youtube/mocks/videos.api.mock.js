export default class YouTubeChannelVideoAPIMock {
  execution = 0;
  MAX_EXECUTION = 5;

  videos = {};

  constructor(prodAPI) {
    this.prodAPI = prodAPI;
  }

  async allVideosByChannelId(action, { channelId, pageToken, daysToDate }) {
    this.execution = this.execution + 1;
    console.log("VIDEOS: execution", this.execution);

    if (this.execution < this.MAX_EXECUTION) {
      this.videos = await this.prodAPI.allVideosByChannelId(action, {
        channelId,
        pageToken,
        daysToDate,
      });
    }

    if (this.execution === this.MAX_EXECUTION) {
      this.videos = {
        ...this.videos,
        nextPageToken: null,
      };
      console.log("VIDEOS: max execution reached", this.execution);
      this.execution = 0;
    }

    return this.videos;
  }
}

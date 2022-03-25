/**
 *
 * @description How to check quota
 * https://console.cloud.google.com/iam-admin/quotas?project=you-tube-comments-2&pageState=(%22allQuotasTable%22:(%22f%22:%22%255B%255D%22))
 */
import { google } from "googleapis";
const API_KEY = process.env.GOOGLE_API_KEY;

class YouTubeClient {
  apiKey;

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  load() {
    return google.youtube({
      version: "v3",
      auth: this.apiKey,
    });
  }
}

const youtubeClient = new YouTubeClient(API_KEY).load();

export default youtubeClient;

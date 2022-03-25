export default class YouTubeAPIError {
  code = "";
  message = "";

  constructor(error) {
    const { code, message } = error.response.data.error;

    this.code = code;
    this.message = message;
  }
}

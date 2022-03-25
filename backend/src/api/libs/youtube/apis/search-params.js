class SearchParams {
  baseParams = {
    part: "snippet",
    maxResults: 50,
  };

  /**
   * @description Constructs the params for the YouTube API to search for videos
   *
   * @param {string} channelId - The id of the channel to search for
   * @param {string} pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved,
   * @param {string} daysToDate - number - Filter on resources published X days ago - Default 120 days
   *
   * @returns {object} - params - The params for the YouTube API to search for videos
   */
  videos({ channelId, pageToken, daysToDate }) {
    const defaultDaysToday = 120;
    const _publishedAfter = daysToDate
      ? pastDate(daysToDate)
      : pastDate(defaultDaysToday);

    const params = {
      ...this.baseParams,
      channelId: channelId,
      publishedAfter: _publishedAfter,
      type: "video",
    };

    if (pageToken) {
      params.pageToken = pageToken;
    }

    return params;
  }

  /**
   * * @description Constructs the params for the YouTube API to search a specific video in a channel
   *
   * @param {string} channelId - The id of the channel to search for
   * @param {string} videoId - The id of video
   * @returns {object} params - The params for the YouTube API to search for a videoId
   */
  video({ channelId, videoId, pageToken }) {
    return {
      ...this.baseParams,
      channelId: channelId,
      q: videoId,
      type: "video",
    };
  }
}

const searchParams = new SearchParams();

export default searchParams;

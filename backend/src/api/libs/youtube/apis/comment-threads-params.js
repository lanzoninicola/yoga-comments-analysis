class CommentThreadsParams {
  baseParams = {
    part: "snippet",
    maxResults: 100,
    textFormat: "plainText",
  };

  video({ id, nextPageToken }) {
    const params = {
      ...this.baseParams,
      videoId: id,
    };

    if (nextPageToken) {
      params.pageToken = nextPageToken;
    }

    return params;
  }

  channel({ id, nextPageToken }) {
    const params = {
      ...this.baseParams,
      allThreadsRelatedToChannelId: id,
    };

    if (nextPageToken) {
      params.pageToken = nextPageToken;
    }

    return params;
  }
}

const commentThreadsParams = new CommentThreadsParams();

export default commentThreadsParams;

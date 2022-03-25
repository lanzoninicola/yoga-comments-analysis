class CommentSerializer {
  /**
   * @param items - array - Deserialized array of comments from the Youtube API
   */
  extractCommentText(items) {
    return items.map((item) => {
      const { topLevelComment } = item.snippet;
      const { snippet: content } = topLevelComment;

      const { authorDisplayName, authorChannelUrl, textOriginal } = content;

      return textOriginal;
    });
  }
}

const commentSerializer = new CommentSerializer();

export default commentSerializer;

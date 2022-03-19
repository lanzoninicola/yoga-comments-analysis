export class CommentSerializer {
  /**
   * @param items - array - Deserialized array of comments from the Youtube API
   */
  onlyText(items) {
    return items.map((item) => {
      const { topLevelComment } = item.snippet;
      const { snippet: content } = topLevelComment;

      const { authorDisplayName, authorChannelUrl, textOriginal } = content;

      return textOriginal;
    });
  }
}

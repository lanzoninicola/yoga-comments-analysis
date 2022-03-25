export class VideosSerializer {
  /**
   * @param items - array - Deserialized array of videos from the Youtube API
   * @returns {array} - array of videos objects {videoId: string, title: string, publishedAt: string}
   *
   */
  baseData(items) {
    return items.map((item) => {
      const { videoId } = item.id;
      const { title, publishedAt } = item.snippet;

      return { videoId, title, publishedAt };
    });
  }
}

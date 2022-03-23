import textNormalizerBuilder from "../normalization/textNormalizer.service.js";

class CrowdService {
  commentsText = [];
  commentFrequencyMap = new Map();

  /**
     * 
     * @param {array} dataset - array of comments object
     * 
     * {
        "videoId": string,
        "title": string,
        "publishedAt": string,
        "comments": string[]
        },
     */

  constructor(dataset) {
    this.dataset = dataset;
  }

  /**
   * @returns {Map} - Map of words and their frequency
   */
  getFrequencyMap() {
    this._extractAndNormalizeComments();
    this._buildCommentFrequencyMap();

    return Object.fromEntries(this.commentFrequencyMap);
  }

  /**
   * @description For each object of dataset extract and normalize comments
   * @private
   */
  _extractAndNormalizeComments() {
    const text = this.dataset
      .map((commentData) =>
        commentData.comments.map((commentText) =>
          this._normalizeText(commentText)
        )
      )
      .filter((comment) => comment.length > 0);

    this.commentsText = text.flat();
  }

  /**
   * @description Count the frequency of each word in the comments
   * @returns {Map} - Map of words and their frequency
   */
  _buildCommentFrequencyMap() {
    this.commentsText.forEach((comment) => {
      const words = this._splitWords(comment);

      if (Array.isArray(words)) {
        words.forEach((word) => {
          if (this.commentFrequencyMap.has(word)) {
            this.commentFrequencyMap.set(
              word,
              this.commentFrequencyMap.get(word) + 1
            );
          } else {
            this.commentFrequencyMap.set(word, 1);
          }
        });
      }
    });

    return this.commentFrequencyMap;
  }

  /**
   * @param {string} text
   * @param {object} options
   * @returns {string} - text normalized
   * @private
   */
  _normalizeText(text, options) {
    const textNormalizer = textNormalizerBuilder(text, options);

    return textNormalizer
      .removeEmojy()
      .removePunctuations()
      .removeWordShorthenThan()
      .toSingular()
      .get();
  }

  /**
   * @param {string} text
   * @returns {array} - array of words
   * @private
   * @memberof CrowdService
   * @description Split text into words
   * @example
   * _splitWords('Hello world');
   * // ['Hello', 'world']
   * _splitWords('Hello world, how are you?');
   * // ['Hello', 'world', 'how', 'are', 'you']
   * */
  _splitWords(sentence) {
    if (sentence) {
      return sentence.match(/[A-Za-zÀ-ÿ^\']+/g);
    }

    return sentence;
  }
}

/**
 *
 * @param {array} dataset - array of comments objects
 *
 * @example of dataset
 * [
 *    {videoId: string, title: string, publishedAt: string, comments: string[]},
 *    {videoId: string, title: string, publishedAt: string, comments: string[]},
 * ]
 *
 * @returns {object} - CrowdService instance
 */

export default function crowdServiceBuilder(dataset) {
  return new CrowdService(dataset);
}
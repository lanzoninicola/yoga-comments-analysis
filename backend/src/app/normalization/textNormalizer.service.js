class TextNormalizer {
  resultText = "";
  excludeOptions = {
    wordShortenThanNrChar: 3,
  };

  constructor(text, excludeOptions) {
    this.originalText = text;

    this.excludeOptions = {
      ...this.excludeOptions,
      excludeOptions,
    };

    this._init();
  }

  _init() {
    this.resultText = this.originalText.toLowerCase().normalize("NFD").trim();
  }

  removeEmojy() {
    this.resultText = this.resultText.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );

    return this;
  }

  removePunctuations() {
    this.resultText = this.resultText
      .normalize("NFD")
      .replace(/[^a-zA-Z ]/g, "");

    return this;
  }

  removeWordShorthenThan(charNumbers) {
    const { wordShortenThanNrChar } = this.excludeOptions;
    const _charNumbers = charNumbers || wordShortenThanNrChar;

    const words = this._splitWords(this.resultText);

    if (words) {
      this.resultText = words
        .filter((word) => word.trim().length > _charNumbers)
        .join(" ");
    }

    return this;
  }

  toSingular() {
    const words = this._splitWords(this.resultText);

    if (words) {
      this.resultText = words
        .map((word) => {
          if (word.slice(-1) == "s") {
            return word.slice(0, -1);
          }

          return word;
        })
        .join(" ");
    }
    return this;
  }

  _splitWords(sentence) {
    return sentence.split(" ");
  }

  /**
   * @returns {string} - normalized text
   */
  get() {
    return this.resultText;
  }
}

/**
 * Returns a new instance of TextNormalizer
 *
 * @param {string} text - text to normalize
 * @param {object} excludeOptions - {wordShortenThanNrChar: number}
 * @returns {object} - instance of TextNormalizer
 */
export default function textNormalizerBuilder(text, excludeOptions) {
  return new TextNormalizer(text, excludeOptions);
}

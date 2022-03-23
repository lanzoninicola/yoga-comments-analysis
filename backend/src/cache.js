import store from "./store.js";

export class YouTubeAPICache {
  constructor(store) {
    this.store = store;
  }

  /**
   *
   * @param id - string - videoId or channelId
   * @param pageToken - string - nextPageToken or prevPageToken
   * @returns cachedValue - any - value stored in the cache
   */
  get(action, id, pageToken) {
    const key = this.generateStoreKey(action, id, pageToken);
    return this.store.get(key);
  }

  /**
   *
   * @param id - string - videoId or channelId
   * @param pageToken - string - nextPageToken or prevPageToken
   * @param value - any - value to store in the cache
   */
  set(action, id, pageToken, value) {
    const key = this.generateStoreKey(action, id, pageToken);
    this.store.set(key, value);
  }

  generateStoreKey(action, id, pageToken) {
    const baseKey = `${action}#${id}`;

    if (pageToken) {
      return `${baseKey}#${pageToken}`;
    }
  }
}

const youtubeAPICache = new YouTubeAPICache(store);

export default youtubeAPICache;

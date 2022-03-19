export class VideoCollection {
  videos = [];

  add(video) {
    this.videos.push(video);
  }

  addBulk(videos = []) {
    this.videos.push(...videos);
  }
}

export class CommentCollection {
  comments = [];

  add(comment) {
    this.comments.push(comment);
  }

  addBulk(comments = []) {
    this.comments.push(...comments);
  }
}

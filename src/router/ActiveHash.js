export class ActiveHash {
  get path() {
    return window.location.hash.slice(1);
  }

  get param() {
    return this.path.split('/')[1];
  }

  navigate(path) {
    window.location.hash = path;
  }
}

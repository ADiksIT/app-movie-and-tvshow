export class Footer {
  constructor() {
    this.root = null;
    this.tag = 'footer';
    this.classTag = 'footer';
  }
  render(root) {
    this.root = root;
    this.root.insertAdjacentHTML('beforeend');
    return this.root;
  }
  initListener() {}
  removeListeners() {}
}

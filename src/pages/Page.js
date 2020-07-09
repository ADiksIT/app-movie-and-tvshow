export class Page {
  constructor(root) {
    this.root = root;
  }
  render() {
    throw new Error(`Method "getRoot" should be impelemted`);
  }
  destroy() {
    this.root.innerHTML = '';
  }
}

import { createHeader } from './header.template';

export class Header {
  constructor() {
    this.root = null;
    this.tag = 'header';
    this.classTag = 'header';
  }
  render(root) {
    this.root = root;
    this.root.insertAdjacentHTML('beforeend', createHeader());
    return this.root;
  }
  initListener() {}
  removeListeners() {}
}

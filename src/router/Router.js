import { ActiveHash } from './ActiveHash';

export class Router {
  constructor(root, pages) {
    this.hash = new ActiveHash();
    this.changePageHandler = this.changePageHandler.bind(this);
    this.root = root;
    this.pages = pages;
    this.page = null;
  }
  init() {
    this.hash.navigate('#home');
    window.addEventListener('hashchange', this.changePageHandler);
  }

  changePageHandler() {
    let Page;
    if (this.hash.path.includes('home')) {
      Page = this.pages.main;
    } else {
      Page = this.pages.movie;
    }
    this.page = new Page(this.root);
    if (this.page) {
      this.page.destroy();
    }
    this.page.render();
  }

  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler);
  }
}

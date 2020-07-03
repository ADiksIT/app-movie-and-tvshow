import { createMenu } from './menu.template';
import { clickedMenu } from './menu.utils';

export class Menu {
  constructor() {
    this.root = null;
    this.tag = 'div';
    this.classTag = 'left-menu';
  }

  render(root) {
    this.root = root;
    this.root.dataset.classes = 'openMenu';
    this.root.insertAdjacentHTML('beforeend', createMenu());
    return this.root;
  }

  clickMenu(event) {
    clickedMenu(event);
  }

  initListener() {
    this.root.addEventListener('click', this.clickMenu);
  }

  removeListeners() {
    this.root.removeEventListener('click', this.clickMenu);
  }
}

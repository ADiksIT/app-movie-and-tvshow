import { createBody } from './body.template';

export class Body {
  constructor(request) {
    this.request = request;
    this.root = null;
    this.tag = 'main';
    this.classTag = 'main';
  }
  render(root) {
    this.root = root;
    this.request.getData('../../test.json').then((r) => {
      this.root.insertAdjacentHTML('beforeend', createBody(r || {}));
    });
    return this.root;
  }

  clickToCard({ target }) {
    const id = target.closest('.tv-card').dataset.tv;
    if (id) {
      console.log(id);
    }
  }

  initListener() {
    this.root.addEventListener('click', this.clickToCard);
  }

  removeListeners() {
    this.root.addEventListener('click', this.clickToCard);
  }
}

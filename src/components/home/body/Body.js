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
    // https://api.themoviedb.org/3/trending/movie/week?api_key=0b8be952d386c4f1fbbd65b0fc2b8d47&language=ru
    this.request.getData('../../test.json').then((r) => {
      this.root.insertAdjacentHTML('beforeend', createBody(r || {}));
    });
    return this.root;
  }

  clickToCard({ target }) {
    // const id = target.closest('.tv-card').dataset.tv;
    // // if (id) {
    // // }
  }

  initListener() {
    this.root.addEventListener('click', this.clickToCard);
  }

  removeListeners() {
    this.root.addEventListener('click', this.clickToCard);
  }
}

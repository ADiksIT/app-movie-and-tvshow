export class Genres {
  constructor() {
    this.root = null;
    this.tag = 'div';
    this.classTag = 'genres';
  }

  render(root) {
    this.root = root;
    this.root.insertAdjacentHTML(
      'beforeend',
      ` Жанры:
        <span class="genre">Драма</span>
        <span class="genre">Комедия</span>
        <span class="genre">Боевик</span>
      `,
    );
    return this.root;
  }

  initListener() {}

  removeListener() {}
}

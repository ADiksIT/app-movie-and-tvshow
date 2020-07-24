export class Backdrop {
  constructor(request) {
    this.request = request;
    this.root = null;
    this.tag = 'div';
    this.classTag = 'backdrop-main';
  }

  render(root) {
    this.root = root;
    this.root.insertAdjacentHTML(
      'beforeend',
      `
          <img class="backdrop"
          src="" alt="name">
      `,
    );
    return this.root;
  }

  initListener() {}

  removeListener() {}
}

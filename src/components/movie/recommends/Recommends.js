export class Recommends {
  constructor() {
    this.root = null;
    this.tag = 'div';
    this.classTag = 'recommends';
  }

  render(root) {
    this.root = root;
    this.root.insertAdjacentHTML(
      'beforeend',
      `
      <h4 class="title">Рекомендации</h4>
      <div class="recommends-list">
          <div class="recommend-item">
              <img class="rec-img" src="" alt="">
              <span class="title">Ad astra</span>
          </div>
          <div class="recommend-item">
              <img class="rec-img" src="" alt="">
              <span class="title">Ad astra</span>
          </div>
          <div class="recommend-item">
              <img class="rec-img" src="" alt="">
              <span class="title">Ad astra</span>
          </div>
          <div class="recommend-item">
              <img class="rec-img" src="" alt="">
              <span class="title">Ad astra</span>
          </div>
      </div>
      `,
    );
    return this.root;
  }

  initListener() {}

  removeListener() {}
}

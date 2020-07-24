export class Info {
  constructor() {
    this.root = null;
    this.tag = 'div';
    this.classTag = 'info';
  }

  render(root) {
    this.root = root;
    this.root.insertAdjacentHTML(
      'beforeend',
      `
      <div class="info-short">
        <div class="info-poster">
            <img src="" alt="">
        </div>
        <div class="info-short-text">
          <div class="info-title">
            <h1 class="title">К звездам /
            <span class="original-title">
              Ad Astra
            </span></h1>
            <p class="tagline">
                "Ответы на наши вопросы лежат за пределами досягаемости"
            </p>
            <p class="overview">
                Описание: Инженер армейского корпуса путешествует по Галактике в
                поисках отца,
                который отправился на поиски внеземной
                цивилизации 20 лет назад и исчез.
            </p>
          </div>
          <div class="info-subtitle">
            <div class="row">
              <span class="date">Дата выхода: 
              <span class="date-realize"> 15/05/2020</span></span>
              <div class="dot"></div>
              <span class="runtime">Время просмотра: 
              <span class="runtime-min">123</span>
                минуты</span>
            </div>
            <div class="row">
              <span class="budget">Бюджет: 
              <span class="budget-sum">87,500</span>м $</span>
              <div class="dot"></div>
              <span class="revenue">Сборы: 
              <span class="revenue-sum">132,827</span>м $</span>
            </div>
            <div class="row">
              <span>Cредняя оценка: 
              <span class="vote-average">6.1</span></span>
              <div class="dot"></div>
              <span>Голосов: <span class="vote-count">3327</span></span>
            </div>
          </div>
        </div>
    </div>
    `,
    );
    return this.root;
  }

  initListener() {}

  removeListener() {}
}

import { Page } from './Page';

export class MovieHomePage extends Page {
  constructor(app) {
    super(app);
  }
  render() {
    this.root.innerHTML = '<h1>HOME PAGE MOVIE</h1>';
  }
}

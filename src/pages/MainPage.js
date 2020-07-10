import { Header } from '../components/header/Header';
import { Menu } from '../components/menu/Menu';
import { Body } from '../components/body/Body';
import { Footer } from '../components/footer/Footer';
import { Main } from '../components/main/Main';
import { Page } from './Page';

export class MainPage extends Page {
  constructor(app) {
    super(app);
  }

  render() {
    this.main = new Main(this.root, {
      components: [Header, Menu, Body, Footer],
    });
    this.main.render();
  }
}

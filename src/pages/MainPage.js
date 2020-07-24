import { Header } from '@/components/home/header/Header';
import { Menu } from '@/components/home/menu/Menu';
import { Body } from '@/components/home/body/Body';
import { Footer } from '@/components/home/footer/Footer';
import { Main } from '@/components/Main';
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

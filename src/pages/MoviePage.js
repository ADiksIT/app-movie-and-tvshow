import { Backdrop } from '@/components/movie/backdrop/Backdrop';
import { Info } from '@/components/movie/info/Info';
import { Genres } from '@/components/movie/genres/Genres';
import { Recommends } from '@/components/movie/recommends/Recommends';
import { Main } from '@/components/Main';
import { Page } from './Page';
import { Footer } from '@/components/home/footer/Footer';

export class MoviePage extends Page {
  constructor(app) {
    super(app);
  }

  render() {
    this.main = new Main(this.root, {
      components: [Backdrop, Info, Genres, Recommends, Footer],
    });
    this.main.render();
  }
}

import './scss/index.scss';
import './scss/home.scss';
import { Router } from './router/Router';
import { MainPage } from './pages/MainPage';
import { MoviePage } from '@/pages/MoviePage';

const app = document.querySelector('#app');

const router = new Router(app, {
  main: MainPage,
  movie: MoviePage,
});

router.init();

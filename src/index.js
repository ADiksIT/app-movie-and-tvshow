import './scss/index.scss';
import { Router } from './router/Router';
import { MainPage } from './pages/MainPage';
import { MovieHomePage } from './pages/MovieHomePage';

const app = document.querySelector('#app');

const router = new Router(app, {
  main: MainPage,
  movie: MovieHomePage,
});

router.init();

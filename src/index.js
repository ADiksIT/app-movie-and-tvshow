import './scss/index.scss';
import { Header } from './components/header/Header';
import { Menu } from './components/menu/Menu';
import { Body } from './components/body/Body';
import { Main } from './components/main/Main';

const app = document.querySelector('#app');
const main = new Main(app, { components: [Header, Menu, Body] });

main.render();

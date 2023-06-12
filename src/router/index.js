import { createRouter, createWebHashHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import FizzBuzzView from '../views/FizzBuzzView.vue'
import TräningsDagBokView from '../views/TräningsDagBokView.vue'
import CVPortfolioView from '../views/CVPortfolioView.vue'
import TicTacToeView from '../views/TicTacToeView.vue'
import BloggView from '../views/BloggView.vue'
import TodoView from '../views/TodoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartView
  },
  {
    path: '/0',
    name: 'FizzBuzz',
    component: FizzBuzzView
  },
  {
    path: '/1',
    name: 'Träningsdagbok',
    component: TräningsDagBokView
  },
  {
    path: '/2',
    name: 'CVPortfolio',
    component: CVPortfolioView
  },
  {
    path: '/3',
    name: 'TicTacToe',
    component: TicTacToeView
  },
  {
    path: '/4',
    name: 'Todo',
    component: TodoView
  },
  {
    path: '/5',
    name: 'Blogg',
    component: BloggView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

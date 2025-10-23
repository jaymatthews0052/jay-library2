import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import SignInView from '@/views/SignInView.vue'
import AddBookView from '@/views/AddBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/addBook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/fireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/GetWeather',
    name: 'GetWeather',
    component: WeatherView
  },
  {
    path: '/login',
    name: 'Login',
    component: SignInView
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
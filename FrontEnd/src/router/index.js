import { createRouter, createWebHistory } from 'vue-router'


import AboutUs from '../views/aboutUs.vue';
import QuizView from '../views/quizView.vue';
import UploadQuizModal from '../components/UploadModal.vue';
import MainPage from '../views/MainPage.vue';
import MyResult from "../views/MeningNatijalarim.vue";
import AllTest from "../views/allTest.vue";
import ContactUs from '@/views/ContactUs.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [    
    {
      path: '/',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: QuizView
    },
    {
      path: '/UploadquizModal',
      name: 'UploadQuizModal',
      component: UploadQuizModal
    },
    {
      path: '/myResult',
      name: 'MyResult',
      component: MyResult
    },    
    {
      path: '/allTest',
      name: 'AllTest',
      component: AllTest
    }, 
    {
      path: '/constactUs',
      name: 'constactUs',
      component: ContactUs
    },    


  ]
})

function isAuthenticated() {
  const authToken = sessionStorage.getItem('authSportAppQuizUserID');
  console.log(authToken);
  return !!authToken; 
}


export default router

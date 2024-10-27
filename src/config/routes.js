import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import News from "../components/news";
import Services from "../components/services";


export const publicRoutes=[
    {
        name:'Главная',
        path:'/',
        component: Home
    },
    {
        name:'О нас',
        path:'/about',
        component: About
    },
    {
        name:'Контакты',
        path:'/contact',
        component: Contact
    },
    {
        name:'Услуги',
        path:'/services',
        component: Services
    },
    {
        name:'Новости',
        path:'/news',
        component: News
    }
];


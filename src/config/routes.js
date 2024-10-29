import About from "../components/about";
import Admin from "../components/admin";
import Contact from "../components/contact";
import Home from "../components/home";
import News from "../components/news";
import Profile from "../components/profile";
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
export const User=[
    {
        name:'Профиль',
        path:'/profile',
        component: Profile
    },
    {
        name:'Admin',
        path:'/admin',
        component: Admin
    }
]


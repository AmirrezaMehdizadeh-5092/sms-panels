import { createRouter , createWebHistory } from "vue-router";

import Home from '../components/HomeComp.vue';
import Login from '../components/LoginComp.vue';
import Register from '../components/RegisterComp.vue';
/*import Shop from '../components/ShopComp.vue';
import Product from '../components/ProductComp.vue';
import Category from '../components/CategoryComp.vue'; 
import Cart from '../components/CartComp.vue';
import Text from '../components/EnamadComp.vue';
import User from '../components/UserDashComp.vue';
import Factor from '../components/FactorComp.vue';*/

const routes = 
[
    {
        path : '/',
        component : Home
    },
    {
        path : '/login',
        component : Login
    },
    {
        path : '/register',
        component : Register
    },
    /*
    
    {
        path : '/shop',
        component : Shop
    },
    {
        path : '/shop/:id',
        component : Product
    },
    {
        path : '/category/:id',
        component : Category
    },
    {
        path : '/cart',
        component : Cart
    },
    {
        path : '/cart/:id',
        component : Factor
    },
    {
        path : '/4667793.txt',
        component : Text
    },
    {
        path : '/user-dashboard',
        component : User
    },*/
]

const router = createRouter({
    history : createWebHistory(),
    routes ,
    /*scrollBehavior(to , from, savedPosition){
        return {top : 0}
    }*/
});

export default router;
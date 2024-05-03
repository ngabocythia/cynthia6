import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "@/components/AboutPage.vue";
import Homepage from "@/components/HomePage.vue";
import ProfilePage from "@/components/ProfilePage.vue";

 const routes= [
    {
        path:"/",
        name:"home",
        component:Homepage
    },
    {
        path:"/about",
        name:"about",
        component:AboutPage
    },
    {
        path:"/profile",
        name:"profile",
        component:ProfilePage
    }
 ]

 const router=createRouter({
    history:createWebHistory(),
    routes
 })
  export default router
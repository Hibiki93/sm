import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Product from "@/components/product-page";
import Category from "@/components/category";
import CategoryA from "@/components/category-a";
import CategoryF from "@/components/category-f";
import CategoryAu from "@/components/category-au";
import CategoryIT from "@/components/category-it";
import CategoryEd from "@/components/category-ed";
import CategoryEl from "@/components/category-el";
import CategoryFd from "@/components/category-fd";
import CategoryHb from "@/components/category-hb";
import Cart from "@/components/cart";
import JoinUs from "@/components/joinUs";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/product/:id",
      name: "product detail",
      component: Product
    },
    {
      path: "/category",
      name: "category",
      component: Category
    },
    {
      path: "/category-a",
      name: "category",
      component: CategoryA
    },
    {
      path: "/category-f",
      name: "category",
      component: CategoryF
    },
    {
      path: "/category-au",
      name: "category",
      component: CategoryAu
    },
    {
      path: "/category-it",
      name: "category",
      component: CategoryIT
    },
    {
      path: "/category-ed",
      name: "category",
      component: CategoryEd
    },
    {
      path: "/category-el",
      name: "category",
      component: CategoryEl
    },
    {
      path: "/category-fd",
      name: "category",
      component: CategoryFd
    },
    {
      path: "/category-hb",
      name: "category",
      component: CategoryHb
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/contact-us",
      name: "contact",
      component: JoinUs
    }
  ]
});

import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Product from "@/components/product-page";
import Category from "@/components/category";
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
      path: "/product",
      name: "product",
      component: Product
    },
    {
      path: "/category",
      name: "category",
      component: Category
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
    },
    {
      path: "/product-page/:id",
      name: "product detail",
      component: Product
    }
  ]
});

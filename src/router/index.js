import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ManSection from "../views/ManSection.vue";
import WomanSection from "../views/WomanSection.vue";
import ProductDescriptionSection from "../views/ProductDescriptionSection.vue";
import ShoppingCartSection from "../views/ShoppingCartSection.vue";
import FavoritesSection from "../views/FavoritesSection.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/man-section",
    name: "ManSection",
    component: ManSection,
  },
  {
    path: "/woman-section",
    name: "WomanSection",
    component: WomanSection,
  },
  {
    path: "/product-description-section",
    name: "ProductDescriptionSection",
    component: ProductDescriptionSection,
  },
  {
    path: "/shopping-cart-section",
    name: "ShoppingCartSection",
    component: ShoppingCartSection,
  },
  {
    path: "/favorites-section",
    name: "FavoritesSection",
    component: FavoritesSection,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./src/views/HomeView.vue";
import AboutView from "./src/views/AboutView.vue";
import ContactsView from "./src/views/ContactsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contacts",
      component: ContactsView,
    },
  ],
});

export { router };
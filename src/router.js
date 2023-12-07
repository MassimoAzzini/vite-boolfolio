import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue"
import About from "./pages/About.vue";
import Contacts from "./pages/Contacts.vue";
import ProjectDetails from "./pages/ProjectDetails.vue";
import Error404 from "./pages/Error404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/project-details/:slug",
      name: "projectDetails",
      component: ProjectDetails
    },

    {
      path: "/:pathMatch(.*)*",
      name: "error-404",
      component: Error404
    }
  ],
});

export { router }
import { createRouter, createWebHistory } from "vue-router";
import { isBooting } from "../loading";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeViewOld.vue"),
      meta: { layout: "retro" },
    },
    {
      path: "/sobre-mim",
      component: () => import("../app/module/sobremim/SobreMimViewOld.vue"),
      meta: { layout: "retro" },
    },
    {
      path: "/projetos",
      component: () => import("../app/module/projetos/ProjetosViewOld.vue"),
      meta: { layout: "retro" },
    },
    {
      path: "/experiencias",
      component: () => import("../app/module/experiencias/ExperienciasViewOld.vue"),
      meta: { layout: "retro" },
    },
    {
      path: "/contatos",
      component: () => import("../app/module/contatos/ContatosViewOld.vue"),
      meta: { layout: "retro" },
    },
  ],
});

router.beforeEach(() => {
  isBooting.value = true;
});

router.afterEach(() => {
  // dá um tempinho para o Boot mostrar “System ready.”
  setTimeout(() => {
    isBooting.value = false;
  }, 5000);
});

export default router;
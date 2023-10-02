import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    // student route group
    {
      path: "/student",
      name: "student",
      component: () => import("../views/student/StudentDashboard.vue"),
      children: [
        {
          path: "",
          name: "student-main",
          component: () => import("../components/student/StudentHome.vue"),
        },
        {
          path: "assignment",
          name: "student-assignment",
          component: () => import("../components/student/StudentAssignment.vue"),
        },
        {
          path: "document",
          name: "student-document",
          component: () => import("../components/student/StudentDocuments.vue"),
        },
        {
          path: "class",
          name: "student-class",
          component: () => import("../components/student/StudentClass.vue"),
        },
        {
          path: "class/:id",
          name: "student-class-detail",
          component: () => import("../components/student/ViewPresent.vue"),
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    }
  ]
});

export default router;

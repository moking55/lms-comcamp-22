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
          children: [
            {
              path: "",
              name: "student-assignment-main",
              component: () => import("../components/student/assignment/AssignmentList.vue"),
            },
            {
              path: ":id",
              name: "student-assignment-detail",
              component: () => import("../components/student/assignment/AssignmentDetail.vue"),
            }
          ]
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
    // staff route group
    {
      path: "/staff",
      name: "staff-dashboard",
      component: () => import("../views/staff/StaffDashboard.vue"),
      children: [
        {
          path: "",
          name: "staff-home",
          component: () => import("../components/staff/StaffHome.vue"),
        },
        {
          path: "class",
          name: "staff-class",
          component: () => import("../components/staff/StaffClass.vue"),
        },
        {
          path: "works",
          name: "staff-works",
          component: () => import("../components/staff/StaffAssignment.vue"),
          children: [
            {
              path: "",
              name: "staff-works-main",
              component: () => import("../components/staff/assignments/AssignmentHome.vue"),
            },
            {
              path: "create",
              name: "staff-works-create",
              component: () => import("../components/staff/assignments/CreateAssignment.vue"),
            }
          ]
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

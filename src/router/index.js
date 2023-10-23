import { createRouter, createWebHistory } from "vue-router";
import jwt_decode from "jwt-decode";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
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
          component: () => import("../components/student/StudentHome.vue")
        },
        {
          path: "assignment",
          name: "student-assignment",
          component: () => import("../components/student/StudentAssignment.vue"),
          children: [
            {
              path: "",
              name: "student-assignment-main",
              component: () => import("../components/student/assignment/AssignmentList.vue")
            },
            {
              path: ":id",
              name: "student-assignment-detail",
              component: () => import("../components/student/assignment/AssignmentDetail.vue")
            }
          ]
        },
        {
          path: "document",
          name: "student-document",
          component: () => import("../components/student/StudentDocuments.vue")
        },
        {
          path: "class",
          name: "student-class",
          component: () => import("../components/student/StudentClass.vue")
        },
        {
          path: "class/:id",
          name: "student-class-detail",
          component: () => import("../components/student/ViewPresent.vue")
        }
      ]
    },
    // staff route group
    {
      path: "/staff",
      name: "staff-dashboard",
      component: () => import("../views/staff/StaffDashboard.vue"),
      beforeEnter: (to, from, next) => {
        const token = jwt_decode(localStorage.getItem("token"));
        if (token.is_admin == 1) {
          next();
        } else {
          next({ name: "home" });
        }
      },
      children: [
        {
          path: "",
          name: "staff-home",
          component: () => import("../components/staff/StaffHome.vue")
        },
        {
          path: "class",
          name: "staff-class",
          component: () => import("../components/staff/StaffClass.vue")
        },
        {
          path: "works",
          name: "staff-works",
          component: () => import("../components/staff/StaffAssignment.vue"),
          children: [
            {
              path: "",
              name: "staff-works-main",
              component: () => import("../components/staff/assignments/AssignmentHome.vue")
            },
            {
              path: "create",
              name: "staff-works-create",
              component: () => import("../components/staff/assignments/CreateAssignment.vue")
            }
          ]
        },
        {
          path: "document",
          name: "staff-document",
          component: () => import("../components/staff/StaffDocuments.vue")
        },
        {
          path: "users",
          name: "staff-users",
          component: () => import("../components/staff/users/StaffUsers.vue"),
          children: [
            {
              path: "",
              name: "staff-users-main",
              component: () => import("../components/staff/users/UsersList.vue")
            },
            {
              path: "create",
              name: "staff-users-create",
              component: () => import("../components/staff/users/CreateUser.vue")
            }
            /* {
              path: ":id",
              name: "staff-users-detail",
              component: () => import("../components/staff/users/UserDetail.vue")
            } */
          ]
        },
        {
          path: "qrcode",
          name: "staff-qrcode",
          component: () => import("../components/staff/StaffQRCode.vue")
        }
      ]
    },
    // logout
    {
      path: "/logout",
      name: "logout",
      beforeEnter: (to, from, next) => {
        localStorage.removeItem("token");
        next({ name: "home" });
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue")
    }
  ]
});

// if token is not expired or invalid
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    const decoded = jwt_decode(token);
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      next({ name: "home" });
    } else {
      next();
    }
  } else {
    // redirect to home
    if (to.name !== "home") {
      next({ name: "home" });
    } else {
      next();
    }
  }
});

export default router;

import { Router } from "express";
import { authRoute } from "../module/auth/auth.routes";
import { userRoute } from "../module/user/user.routes";

const router = Router();

const moduleRoute = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
];

// route loop
moduleRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

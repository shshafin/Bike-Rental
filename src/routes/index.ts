import { Router } from "express";
import { authRoute } from "../module/auth/auth.routes";
import { userRoute } from "../module/user/user.routes";
import { bikeRoute } from "../module/bike/bike.routes";

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
  {
    path: "/bikes",
    route: bikeRoute,
  },
];

// route loop
moduleRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

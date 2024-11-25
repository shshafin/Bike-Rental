"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = require("../module/auth/auth.routes");
const user_routes_1 = require("../module/user/user.routes");
const router = (0, express_1.Router)();
const moduleRoute = [
    {
        path: "/auth",
        route: auth_routes_1.authRoute,
    },
    {
        path: "/users",
        route: user_routes_1.userRoute,
    },
];
// route loop
moduleRoute.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;

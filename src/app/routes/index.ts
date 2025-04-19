import express from 'express';
import { userRoutes } from '../modules/User/user.routes';
import { bikeRoutes } from '../modules/Bike/bike.route';



const router = express.Router();

const moduleRoutes = [
    {
        path: '/customers',
        route: userRoutes
    },
    {
        path: '/bikes',
        route: bikeRoutes
    },
   
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;
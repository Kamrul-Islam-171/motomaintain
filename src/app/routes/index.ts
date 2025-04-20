import express from 'express';
import { userRoutes } from '../modules/User/user.routes';
import { bikeRoutes } from '../modules/Bike/bike.route';
import { serviceRoutes } from '../modules/Services/service.route';



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
    {
        path: '/services',
        route: serviceRoutes
    }
   
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;
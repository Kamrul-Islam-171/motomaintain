import express, { NextFunction, Request, Response } from "express";
import validateRequest from "../../middlewares/ValidateRequest";
import { bikeValidation } from "./bike.validation";
import { bikeController } from "./bike.controller";


const router = express.Router();
router.post('/', validateRequest(bikeValidation.createBikeValidation), bikeController.createBike);
router.get('/', bikeController.getAllBikes);
router.get('/:id', bikeController.getBikeDetails);

export const bikeRoutes = router;

import express, { NextFunction, Request, Response } from "express";
import validateRequest from "../../middlewares/ValidateRequest";
import { serviceController } from "./service.controller";
import { serviceValidation } from "./service.validation";



const router = express.Router();

router.get('/status' ,serviceController.pendingOrInProgressServices);
router.get('/:id', serviceController.getAServices);
router.put('/:id/complete', validateRequest(serviceValidation.completeServiceValidation), serviceController.completeService);
router.post('/', validateRequest(serviceValidation.createServiceValidation), serviceController.createService);
router.get('/', serviceController.getServices);
export const serviceRoutes = router;

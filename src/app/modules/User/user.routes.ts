import express, { NextFunction, Request, Response } from 'express';
import { userValidation } from './user.validation';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/ValidateRequest';

const router = express.Router();

router.post('/', validateRequest(userValidation.createUserValidation), userController.createUser)


export const userRoutes = router;
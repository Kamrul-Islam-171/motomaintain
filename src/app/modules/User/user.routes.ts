import express, { NextFunction, Request, Response } from "express";
import { userValidation } from "./user.validation";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/ValidateRequest";

const router = express.Router();

router.post(
  "/",
  validateRequest(userValidation.createUserValidation),
  userController.createUser
);
router.get("/", userController.getAllUser);
router.get("/:id", userController.getACustomer);
router.put(
  "/:id",
  validateRequest(userValidation.updateCustomerValidation),
  userController.updateCustomer
);
router.delete('/:id', userController.deleteCustomer);

export const userRoutes = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const ValidateRequest_1 = __importDefault(require("../../middlewares/ValidateRequest"));
const router = express_1.default.Router();
router.post("/", (0, ValidateRequest_1.default)(user_validation_1.userValidation.createUserValidation), user_controller_1.userController.createUser);
router.get("/", user_controller_1.userController.getAllUser);
router.get("/:id", user_controller_1.userController.getACustomer);
router.put("/:id", (0, ValidateRequest_1.default)(user_validation_1.userValidation.updateCustomerValidation), user_controller_1.userController.updateCustomer);
router.delete('/:id', user_controller_1.userController.deleteCustomer);
exports.userRoutes = router;

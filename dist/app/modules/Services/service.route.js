"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ValidateRequest_1 = __importDefault(require("../../middlewares/ValidateRequest"));
const service_controller_1 = require("./service.controller");
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
router.get('/status', service_controller_1.serviceController.pendingOrInProgressServices);
router.get('/:id', service_controller_1.serviceController.getAServices);
router.put('/:id/complete', (0, ValidateRequest_1.default)(service_validation_1.serviceValidation.completeServiceValidation), service_controller_1.serviceController.completeService);
router.post('/', (0, ValidateRequest_1.default)(service_validation_1.serviceValidation.createServiceValidation), service_controller_1.serviceController.createService);
router.get('/', service_controller_1.serviceController.getServices);
exports.serviceRoutes = router;

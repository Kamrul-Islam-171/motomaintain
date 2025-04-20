"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidation = void 0;
const zod_1 = require("zod");
const createServiceValidation = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string({
            required_error: "bikeId is required!"
        }),
        serviceDate: zod_1.z.string({
            required_error: "serviceDate is required!"
        }),
        description: zod_1.z.string({
            required_error: "description is required!"
        }),
        status: zod_1.z.enum(["pending", "in_progress", "done"], {
            required_error: "status is required!"
        }),
    })
});
const completeServiceValidation = zod_1.z.object({
    body: zod_1.z.object({
        completionDate: zod_1.z.string({
            required_error: "completionDate is required!"
        })
    })
});
exports.serviceValidation = {
    createServiceValidation,
    completeServiceValidation
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidation = void 0;
const zod_1 = require("zod");
const createBikeValidation = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string({
            required_error: "Brand is required!"
        }),
        model: zod_1.z.string({
            required_error: "Model is required!"
        }),
        year: zod_1.z.number({
            required_error: "Year Number is required!"
        }),
        customerId: zod_1.z.string({
            required_error: "customerId is required!"
        }),
    })
});
exports.bikeValidation = {
    createBikeValidation
};

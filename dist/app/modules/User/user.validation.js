"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const createUserValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required!"
        }),
        email: zod_1.z.string({
            required_error: "Email is required!"
        }),
        phone: zod_1.z.string({
            required_error: "Contact Number is required!"
        })
    })
});
const updateCustomerValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required!"
        }).optional(),
        phone: zod_1.z.string({
            required_error: "Contact Number is required!"
        }).optional()
    })
});
exports.userValidation = {
    createUserValidation,
    updateCustomerValidation
};

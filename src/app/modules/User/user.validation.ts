import { z } from "zod";

const createUserValidation = z.object({
   
    body: z.object({
        name: z.string({
            required_error: "Name is required!"
        }),
        email: z.string({
            required_error: "Email is required!"
        }),
        phone: z.string({
            required_error: "Contact Number is required!"
        })
    })
});
const updateCustomerValidation = z.object({
   
    body: z.object({
        name: z.string({
            required_error: "Name is required!"
        }).optional(),
        phone: z.string({
            required_error: "Contact Number is required!"
        }).optional()
    })
});

export const userValidation = {
    createUserValidation,
    updateCustomerValidation
}
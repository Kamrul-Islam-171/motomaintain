import { z } from "zod";

const createBikeValidation = z.object({
   
    body: z.object({
        brand: z.string({
            required_error: "Brand is required!"
        }),
        model: z.string({
            required_error: "Model is required!"
        }),
        year: z.number({
            required_error: "Year Number is required!"
        }),
        customerId: z.string({
            required_error: "customerId is required!"
        }),

    })
});

export const bikeValidation = {
    createBikeValidation
}
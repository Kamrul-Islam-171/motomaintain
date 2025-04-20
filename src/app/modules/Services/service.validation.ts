import { z } from "zod";

const createServiceValidation = z.object({
   
    body: z.object({
        bikeId: z.string({
            required_error: "bikeId is required!"
        }),
        serviceDate: z.string({
            required_error: "serviceDate is required!"
        }),
        description: z.string({
            required_error: "description is required!"
        }),
        status: z.enum(["pending", "in_progress", "done"],{
            required_error: "status is required!"
        }),

    })
});
const completeServiceValidation = z.object({
   
    body: z.object({
        completionDate: z.string({
            required_error: "completionDate is required!"
        })

    })
});



export const serviceValidation = {
    createServiceValidation,
    completeServiceValidation
}
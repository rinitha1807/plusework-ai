
import { z } from "zod";

const clean = (text) => text.replace(/[<>]/g, "");

const foodSchema = z.object({

    foodName: z.coerce
        .string()
        .min(3, "must be 3 characters")
        .max(30, "maximum 30 characters")
        .trim()
        .regex(/^[A-Za-z ]+$/, "invalid food name")
        .transform(clean),

    quantity: z.coerce
        .number({ message: "quantity must be a number" })
        .positive("Quantity must be greater than zero")
        .max(1000, "Maximum quantity is 1000 kg"),

    donorName: z.coerce
        .string()
        .min(3, "must be 3 characters")
        .max(30, "maximum 30 characters")
        .trim()
        .regex(/^[A-Za-z ]+$/, "invalid donor name")
        .transform(clean),

    email: z
        .string()
        .email("enter valid email"),

    category: z.enum(
        ["Vegetables", "Fruits", "Cooked Food", "Bakery"],
        { message: "Select a food category" }
    ),

    expiryDate: z.string()
        .min(1, "Select an expiry date")
        .refine(
            date => !Number.isNaN(Date.parse(date)),
            "Enter a valid date"
        )
        .refine(
            date => date >= new Date(
                new Date().getTime() - new Date().getTimezoneOffset() * 60000
            ).toISOString().slice(0, 10),
            "Expiry date cannot be in the past"
        )

});

export default foodSchema;

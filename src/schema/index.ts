import * as z from "zod"

export const checkoutSchema = z.object({
  CustID: z.string().min(6, {
    message: "customer id must be atleast 6 characters",
  }),
  CustBankAcc: z.number(),
  Phonenumber: z.number().min(10, {
    message: "Please enter a valid phone number"
  }).max(10, {
    message: "Please enter a valid phone number"
  }),
  Amount: z
    .number()
    .min(0, {
      message: "Amount cannot be negative",
    })
    .max(1000, {
      message: "Amount cannot exceed ETB 1000",
    }),
});
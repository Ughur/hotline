import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  queryType: z.enum(["generalEnquiry", "supportRequest"], {
    message: "Query type is required",
  }),
  message: z.string().min(1, { message: "Message is required" }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to being contacted",
  }),
});
export type ContactFormData = z.infer<typeof contactFormSchema>;

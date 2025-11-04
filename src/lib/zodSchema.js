import { z } from "zod";

export const zodSchema = z.object({
  contactName: z
    .string()
    .min(2, { message: "Contact Name must be at least 2 characters." })
    .max(50, { message: "Contact Name must be at most 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Contact Name must contain only letters and spaces.",
    }),

  accountName: z
    .string()
    .min(2, { message: "Account Name must be at least 2 characters." })
    .max(50, { message: "Account Name must be at most 50 characters." }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),

  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number is too long." })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only digits." }),

  subject: z
    .string()
    .trim()
    .min(3, { message: "Subject is required." })
    .max(100, { message: "Subject must be at most 100 characters." }),

  description: z
    .string()
    .trim()
    .min(3, { message: "Description is required." }),

  status: z
    .string()
    .trim()
    .min(1, { message: "Please select a status." }),

  ticketOwner: z
    .string()
    .trim()
    .min(1, { message: "Please select a ticket owner." }),

  language: z
    .string()
    .trim()
    .min(1, { message: "Please select a language." }),

  priority: z
    .string()
    .trim()
    .min(1, { message: "Please select a priority." }),

  channel: z
    .string()
    .trim()
    .min(1, { message: "Please select a channel." }),

  classifications: z
    .string()
    .trim()
    .min(1, { message: "Please select a classification." }),

  dueDate: z
    .date({ required_error: "Please select a due date." })
    .or(z.string().min(1, { message: "Please select a due date." })),

  attachments: z
    .array(z.any())
    .optional()
    .refine(
      (files) => !files || files.length <= 5,
      "You can upload up to 5 files only."
    ),
});

import { ACCEPTED_IMAGE_MIME_TYPES, MAX_FILE_SIZE } from "constants/index.ts";
import { z } from "zod";

export type CreateCategorySchemaType = z.infer<typeof CreateCategorySchema>;

export const CreateCategorySchema = z.object({
  name: z.string().trim().min(3).max(20),
  description: z.string().trim().min(3).max(50),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp files are accepted.",
    ),
});

export type EditCategorySchemaType = z.infer<typeof EditCategorySchema>;

export const EditCategorySchema = z.object({
  name: z.string().trim().min(3).max(20),
  description: z.string().trim().min(3).max(50),
  image: z
    .any()
    .refine((files) => files.length === 0 || files[0].size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => files.length === 0 || ACCEPTED_IMAGE_MIME_TYPES.includes(files[0].type),
      "Only .jpg, .jpeg, .png and .webp files are accepted.",
    ),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const LoginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(6).max(20),
});

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;

export const CreateUserSchema = z
  .object({
    email: z.string().trim().email(),
    phone: z
      .string()
      .trim()
      .min(6)
      .max(20)
      .regex(/^(\+\d{1,3})?\d{6,20}$/, "Phone number is not valid."),
    password: z.string().trim().min(6).max(20),
    confirmPassword: z.string().trim().min(6).max(20),
    name: z
      .string()
      .trim()
      .min(3)
      .max(20)
      .regex(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ\s]+$/, "Only letters are allowed"),
    image: z
      .any()
      .refine((files) => files?.length == 1, "Image is required.")
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
      .refine(
        (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp files are accepted.",
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

//* Product types *//

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;

export const CreateProductSchema = z.object({
  name: z.string().min(3).max(20),
  description: z.string().min(3).max(50),
  price: z.string().min(0.01),
  category_id: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)), {
      message: "Category is required",
    })
    .transform((val) => parseInt(val))
    .refine((val) => val > 0, { message: "Category is required" }),
  product_images: z.any(),
});

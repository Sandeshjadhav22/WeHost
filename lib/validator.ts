import * as z from "zod"

export const eventFormSchema = z.object({
   title: z.string().min(3,"Title must be atleadt 3 characters"),
   description: z.string().min(3,"descrition must be atleadt 3 characters").max(400,"Description must be less than 400 characters"),
   location: z.string().min(3,"Location must be 3 characters").max(400,"location must be 400 characterrs"),
   imageUrl: z.string(),
   startDateTime: z.date(),
   endDateTime: z.date(),
   categoryId: z.string(),
   price: z.string(),
   isFree : z.boolean(),
   url: z.string().url()
  })    
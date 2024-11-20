import {z,ZodType} from "zod"

export type EditUserProfileProps = {
    name: string
    email: string
}

export const EditUserProfileSchema: ZodType<EditUserProfileProps> = z.object({
    name: z.string().min(1,{message:"Name Field is required"}),
    email: z.string().email("Email Field is required")
})
 
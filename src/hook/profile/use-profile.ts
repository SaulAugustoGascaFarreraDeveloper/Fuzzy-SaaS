import { EditUserProfileProps, EditUserProfileSchema } from "@/schemas/profile.schema"
import { useState } from "react"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

export const useProfile = () => {

    const [loading,setLoading] = useState<boolean>(false)


    const methods = useForm<EditUserProfileProps>({
        resolver: zodResolver(EditUserProfileSchema),
        mode: 'onChange',
        defaultValues:{
            name: '',
            email: ''
        }
    })


    const onHandleSubmit = methods.handleSubmit(async (values) => {

        try{

            setLoading(true)

            console.log("PROFILE NAME --> ",values.name)
            console.log("PROFILE EMAIL --> ",values.email)

            methods.reset()

        }catch(error)
        {
            console.log("On Handle Submit Use Profile Error -->",error)
        }finally{
            setLoading(false)
        }

    })


    return {loading,methods,onHandleSubmit}
}
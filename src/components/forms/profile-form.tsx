"use client"
import { useProfile } from '@/hook/profile/use-profile'
import React from 'react'
import { FormProvider, useFormContext } from 'react-hook-form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'



const InputName = ({loading} : {loading: boolean}) => {

    const {register} = useFormContext()

    return(
    <Input type='text' disabled={loading} placeholder='Name' {...register('name')} />
    )
}

const InputEmail = ({loading} : {loading: boolean}) => {

    const {register} = useFormContext()

    return(
    <Input type='email' disabled={loading} placeholder='Email' {...register('email')} />
    )
}

const ProfileForm = () => {
    

    const {loading,methods,onHandleSubmit} = useProfile()

  return (
    <FormProvider {...methods} >
        <form onSubmit={onHandleSubmit} className='flex flex-col gap-5' > 
            <Label className='text-lg' >User Full Name</Label>
            <InputName loading={loading} />
            <Label className='text-lg' >User Email</Label>
            <InputEmail loading={loading} />
            <Button disabled={loading} className='self-start hover:bg-[#2F006B] hover:text-white hover:border-[1px] hover:border-gray-600' >
                {loading ? <div className='flex gap-0 items-center'><Loader2 className='animate-spin mr-2 w-4 h-4' /> <span className='text-sm animate-pulse'>Saving</span></div> : "Save User Settings"}
            </Button>
        </form>
    </FormProvider>
   
  )
}

export default ProfileForm
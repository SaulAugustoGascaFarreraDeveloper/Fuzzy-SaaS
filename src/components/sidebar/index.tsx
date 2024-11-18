"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { menuOptions } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Separator } from '../ui/separator'
import { DatabaseIcon, GitBranch, LucideMousePointerClick } from 'lucide-react'
import ModeToogle from '../global/mode-toogle'

type MenuOptionsProps = {

}


const MenuOptions = () => {

    const pathname = usePathname()

  return (
    <nav className='dark:bg-black h-full  overflow-scroll flex justify-between items-center flex-col gap-10 py-6 px-2 '>
        <div className="flex items-center justify-center flex-col gap-8 ">
            <Link
                href={'/'}
                className='flex font-bold '
            >
                fuzzie.
            </Link>
            <TooltipProvider>
                {menuOptions.map((option,_) => (
                   <ul key={option.name} >
                        <Tooltip delayDuration={0} >
                            <TooltipTrigger>
                                <li>
                                    <Link
                                        href={option.href}
                                        className={cn("group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",{
                                            'dark:bg-purple-500/80 bg-slate-300' : pathname == option.href
                                        })}
                                    >
                                        <option.Component 
                                            selected={pathname === option.href}
                                        />
                                    </Link>
                                </li>
                            </TooltipTrigger>
                            <TooltipContent side='right' className='bg-black/10 backdrop-blur-xl text-white font-bold' >
                                <p>{option.name}</p>
                            </TooltipContent>
                        </Tooltip>
                   </ul>
                ))}
            </TooltipProvider>
            <Separator />
            <div className="flex items-center flex-col gap-9 dark:bg-slate-700/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
                <div className="relative dark:bg-slate-700/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-gray-700 cursor-pointer">
                        <LucideMousePointerClick 
                            size={18}
                            className='dark:text-white'
                        />
                        <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />

                </div>
                <div className="relative dark:bg-slate-700/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-gray-700 cursor-pointer">
                        <GitBranch 
                            size={18}
                            className='text-muted-foreground'
                        />
                        <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />

                </div>
                <div className="relative dark:bg-slate-700/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-gray-700 cursor-pointer">
                        <DatabaseIcon 
                            size={18}
                            className='text-muted-foreground'
                        />
                        <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />

                </div>
                <div className="relative dark:bg-slate-700/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-gray-700 cursor-pointer">
                        <GitBranch 
                            size={18}
                            className='text-muted-foreground'
                        />
                       

                </div>
            </div>  
        </div>
        <div className="flex items-center justify-center flex-col gap-8 ">
                <ModeToogle />
        </div>
    </nav>
  )
}

export default MenuOptions
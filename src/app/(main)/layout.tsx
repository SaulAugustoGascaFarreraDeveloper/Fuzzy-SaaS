import MenuOptions from '@/components/sidebar'
import React, { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children} : LayoutProps) => {
  return (
    <div className="flex overflow-hidden h-screen">
        <MenuOptions />
        <div className="w-full">
                {children}
        </div>
    </div>
  )
}

export default Layout
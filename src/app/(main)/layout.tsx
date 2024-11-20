import InfoBar from '@/components/infobar'
import MenuOptions from '@/components/sidebar'
import React, { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children} : LayoutProps) => {
  return (
    <div className="flex overflow-hidden h-full">
        <MenuOptions />
        <div className="w-full ">
                <InfoBar />
                {children}
        </div>
    </div>
  )
}

export default Layout
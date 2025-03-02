import Footer from '@/components/shared/Footer'
import NavBar from '@/components/shared/NavBar'
import React, { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <NavBar/>
            <main className="min-h-screen">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout

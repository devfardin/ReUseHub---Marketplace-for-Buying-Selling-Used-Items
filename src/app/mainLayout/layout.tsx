import React, { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <main className="min-h-screen">
                {children}
            </main>
        </div>
    )
}

export default MainLayout

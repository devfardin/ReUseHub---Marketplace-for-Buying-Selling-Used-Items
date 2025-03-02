import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo2 from '@/assets/logo2.png'
const NavBar = () => {
    return (
        <div className='mt-2'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                    {/* Logo Here */}
                    <div> <Image alt='Website logo' src={logo2} width={300} /> </div>
                </div>
            </Container>

        </div>
    )
}

export default NavBar

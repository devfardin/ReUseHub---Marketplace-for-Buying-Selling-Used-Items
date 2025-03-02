import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { IoSearchOutline } from 'react-icons/io5'
import { GrShop } from 'react-icons/gr'
import { SlHeart, SlUser } from 'react-icons/sl'
import Link from 'next/link'
const NavBar = () => {
    return (
        <div className='mt-2'>
            <Container>
                <div className='flex justify-between items-center gap-10 py-3'>
                    {/* Logo Here */}
                    <div>
                        <Link href={'/'}>
                            <Image alt='Website logo' src={logo} className='w-[150px] sm:w-[250px]' />
                        </Link>
                    </div>

                    {/* Search Input */}
                    <div>
                        <div className='justify-center hidden lg:flex w-full'>
                            <input
                                className='bg-[#F6F6F6] px-3 py-1 lg:w-auto focus:outline-none text-[#2F2F2F] font-normal text-base' />
                            <button type='submit' className='bg-primary hover:bg-hover text-white py-1.5 px-2'>
                                <IoSearchOutline size={25} />
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center gap-7'>
                        {/* Sell Button */}
                        <button className='text-sm font-semibold text-white bg-primary hover:bg-hover py-2 px-4 cursor-pointer'>Sell Product</button>
                        {/* Header Button */}
                        <div className='hidden md:flex items-center gap-7'>
                            <SlHeart size={25} />
                            <GrShop size={25} />
                            <SlUser size={25} />
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default NavBar

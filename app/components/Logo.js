import React from 'react'
import Link from 'next/link'
const Logo = () => {
    return (
        <div className="logo-info w-[30%] mt-6 font-bold text-white text-[30px]">
            <Link href="/" className="inline-block">
                Digital<span className='text-[#B82B32] text-[30px]'>Mak</span>
            </Link>
        </div>
    )
}

export default Logo
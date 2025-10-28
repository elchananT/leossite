'use client'

import React, {useState} from 'react'
import Link from "next/link";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="md:hidden container mx-auto px-6 py-4 items-center justify-between bg-transparent">
           <div className="flex items-center justify-between w-full">
               <div className="flex items-center gap-3">
                   <Link className="text-sm font-bold font-display text-text-light dark:text-text-dark" href="/">Leo&#39;s Remodeling & Renovation</Link>
               </div>
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
               </div>
                {isOpen && (
                    <div className="md:hidden flex flex-col items-center w-full gap-4 bg-transparent px-6 pb-4  text-center">
                        <Link onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[#C0B283]" href="/">Home</Link>
                        <Link onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[#C0B283]" href="/about">About</Link>
                        <Link onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[#C0B283]" href="/projects">Projects</Link>
                        <Link onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[#C0B283]" href="/contact">Contact</Link>

                        <Link onClick={() => setIsOpen(false)} className="flex w-1/2 cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-[#4A908A] text-white text-sm font-bold shadow-sm" href="/contact">
                            Contact us
                        </Link>
                    </div>
                )}
        </div>
    )
}
export default MobileNav

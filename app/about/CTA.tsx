import React from 'react'
import Link from "next/link";

const Cta = () => {
    return (
        <section className="bg-[#4A908A]/90">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
                <div className="relative isolate">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to start your project?</h2>
                        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/90">Let&#39;s work together to create a space that you&#39;ll love for years to come. Get in touch for a consultation.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white text-[#4A908A] text-sm font-bold shadow-lg transition-transform hover:scale-105">
                                <span className="truncate">See Our Work</span>
                            </button>
                            <Link className="text-sm font-semibold leading-6 text-white transition-opacity hover:opacity-80" href="/contact">Contact Us <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cta

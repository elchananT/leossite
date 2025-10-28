import React from 'react'
import Link from "next/link";

const Contact = () => {
    return (
        <section className="py-20 md:py-28 bg-white dark:bg-[#EAEAEA]/50" id="contact">
            <div className="container mx-auto px-6">
                <div className="bg-[#4A908A]/10 dark:bg-[#4A908A]/20 rounded-xl p-10 md:p-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-[#36454F] dark:text-[#EAEAEA]">Ready to Start Your Project?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-[#36454F]/90 dark:text-[#EAEAEA]/90">Let&#39;s create a space that&#39;s uniquely yours. Reach out to us for a consultation and let&#39;s discuss how we can bring your vision to life.</p>
                    <div className="mt-8">
                        <Link className="inline-flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#4A908A] text-white text-base font-bold tracking-wide shadow-md hover:bg-[#4A908A]/90 transition-all transform hover:scale-105" href="/contact">
                            <span className="truncate">Get In Touch</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact

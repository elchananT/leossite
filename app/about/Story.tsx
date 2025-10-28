import React from 'react'
import {Gem, HeartHandshake, Users} from "lucide-react";

const Story = () => {
    return (
        <section className="py-20 sm:py-28 bg-white dark:bg-[#36454F]/5">
            <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-[#4A908A] sm:text-4xl">Our Story</h2>
                <p className="mt-6 text-base leading-7">Founded with a passion for transforming spaces, our company has grown from a small team of dedicated designers to a full-service remodeling firm. We believe that a home is more than just a place to live—it&#39;s a reflection of who you are. Our journey is built on a foundation of creativity, craftsmanship, and a deep commitment to bringing our clients&#39; visions to life.</p>
            </div>
            <div className="mx-auto mt-20 max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="text-center">
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-[#4A908A] sm:text-4xl">Mission &amp; Values</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8">Our mission is to create beautiful, functional spaces that enhance the lives of our clients through innovative design and exceptional service.</p>
                </div>


                <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C0B283]/20 text-[#C0B283]">
                            <Gem />
                        </div>
                        <h3 className="mt-5 font-heading text-lg font-semibold">Quality</h3>
                        <p className="mt-2 text-base leading-7">We use the finest materials and employ meticulous craftsmanship to ensure every detail is perfect.</p>
                    </div>


                    <div className="flex flex-col items-center text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C0B283]/20 text-[#C0B283]">
                            <HeartHandshake />
                        </div>
                        <h3 className="mt-5 font-heading text-lg font-semibold">Integrity</h3>
                        <p className="mt-2 text-base leading-7">We build lasting relationships based on transparency, honesty, and open communication.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C0B283]/20 text-[#C0B283]">
                            <Users />
                        </div>
                        <h3 className="mt-5 font-heading text-lg font-semibold">Collaboration</h3>
                        <p className="mt-2 text-base leading-7">We work closely with our clients, architects, and builders to bring a shared vision to life.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story

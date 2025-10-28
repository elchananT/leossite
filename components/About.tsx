import React from 'react'
import {Hammer, PencilRuler, Users} from "lucide-react";

const About = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-[#36454F] dark:text-[#EAEAEA]">About Our Company</h2>
                        <p className="mt-4 text-base leading-relaxed text-[#36454F]/90 dark:text-[#EAEAEA]/90">
                            We are a dedicated team of designers and builders passionate about creating spaces that reflect our clients&#39; personalities and lifestyles. With a commitment to quality and craftsmanship, we bring your vision to life, ensuring every detail is perfect.
                        </p>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <Users className="text-[#4A908A]"/>
                                <div>
                                    <h3 className="font-display font-semibold text-lg">Client-Centric Approach</h3>
                                    <p className="mt-1 text-sm text-[#36454F]/80 dark:text-[#EAEAEA]/80">We prioritize your needs and collaborate closely at every step.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <PencilRuler className="text-[#4A908A]"/>
                                <div>
                                    <h3 className="font-display font-semibold text-lg">Innovative Design</h3>
                                    <p className="mt-1 text-sm text-[#36454F]/80 dark:text-[#EAEAEA]/80">Modern, timeless, and functional design solutions.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Hammer className="text-[#4A908A]"/>

                                <div>
                                    <h3 className="font-display font-semibold text-lg">Quality Craftsmanship</h3>
                                    <p className="mt-1 text-sm text-[#36454F]/80 dark:text-[#EAEAEA]/80">Finest materials and skilled artisans for exceptional results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <img className="rounded-xl object-cover w-full h-full shadow-lg" data-alt="A modern architecture design studio with blueprints and models on a table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIkJyEuP7cwdFNCY74UE7qnQkDxvt9xZQ3DZC9ru5q9rPDZBqe-ZIhaPIbZtM4tDuXQ1LsEaIyHv7pZvj606UizeROTZo1caqX4mzTaTj5u2plGqqJwsvNdfdRzmYM_8IS30qFFRVmucdbVVfQkHUwjO5TnU9NGhb1ookerCubV6t_SidgPM8nhNQueZgpUkqK7xaYCmlsTYprCtlRRafIET6gQPnU8S13KDFiUqR4a9UyT2b6d9hjG5rP6fImC9ypXNiOMXt1Ndze"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About

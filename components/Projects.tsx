import React from 'react'



const Projects = () => {
    return (
        <section className="py-20 md:py-28 bg-white dark:bg-[#EAEAEA]/50" id="projects">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-display">Our Recent Projects</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-[#36454F]/80 dark:text-[#EAEAEA]/80">Explore a selection of our finest work, showcasing our commitment to quality and design excellence.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="flex flex-col gap-4 bg-[#F8F8F8] dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="w-full h-56 bg-center bg-no-repeat bg-cover" data-alt="A sleek and functional modern kitchen with custom white cabinetry and marble countertops." ></div>
                        <div className="p-6 pt-0">
                            <h3 className="text-lg font-semibold font-display">Modern Kitchen Remodel</h3>
                            <p className="text-sm mt-2 text-[#36454F]/80 dark:text-[#EAEAEA]/80">A sleek and functional kitchen featuring custom cabinetry and state-of-the-art appliances.</p>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4 bg-[#F8F8F8] dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="w-full h-56 bg-center bg-no-repeat bg-cover" data-alt="A luxurious bathroom with a large freestanding tub and marble tiles."></div>
                        <div className="p-6 pt-0">
                            <h3 className="text-lg font-semibold font-display">Serene Bathroom Oasis</h3>
                            <p className="text-sm mt-2 text-[#36454F]/80 dark:text-[#EAEAEA]/80">A luxurious bathroom renovation with a spa-like atmosphere and premium finishes.</p>
                        </div>
                    </div>



                    <div className="flex flex-col gap-4 bg-[#F8F8F8] dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="w-full h-56 bg-center bg-no-repeat bg-cover" data-alt="A bright and airy open-concept living space with large windows and comfortable furniture."></div>
                        <div className="p-6 pt-0">
                            <h3 className="text-lg font-semibold font-display">Open-Concept Living Area</h3>
                            <p className="text-sm mt-2 text-[#36454F]/80 dark:text-[#EAEAEA]/80">A complete transformation of a living space to create a bright, airy, and inviting environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects

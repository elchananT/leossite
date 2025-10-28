import React from 'react'

const Story = () => {
    return (
        <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <div className="text-center lg:text-left">
                        <h1 className="font-heading text-4xl font-bold tracking-tight text-[#36454F] dark:text-[#EAEAEA] sm:text-5xl lg:text-6xl">Crafting Spaces, Building Dreams.</h1>
                        <p className="mt-6 text-lg leading-8">Learn more about our journey, our passion for design, and the talented individuals who make it all happen.</p>
                    </div>
                    <div className="relative h-80 w-full rounded-xl shadow-lg lg:h-full">
                        <img loading='lazy' alt="A modern and bright living room with minimalist furniture, designed by the company." className="h-full w-full rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO5w7ALAn71DSUFLa1ldKCQFX5g8TctY2YEmgjb9EkvGhOz49Y6hiLn-3hqZVenUwAUdlcInerkKounyWNc1foXFAoa22VMND1_u7YGd76GeguWtdLSHyUqdN5y0d41iTUqKia47tbE76dhwvCH_Q2LVkF-KXPOyQANu2fc4KygJH2PAcfk_6gNE3r7mK6DxGfLlFzRxUXGYd1RnzjDKDY9CeC-_cPaPmo64Lujf8rLIWaY5POSMOFc-dsIN9vT467_ap_TVnsLbyL"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story

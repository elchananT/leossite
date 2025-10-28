import React from 'react'
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Work | Remodeling Projects | Leo's Remodeling & Renovation",
    description:
        "Explore our portfolio of remodeling, renovation, and new build projects — from modern kitchens and luxury bathrooms to commercial spaces and family homes.",
    keywords: [
        "remodeling",
        "renovation",
        "construction",
        "home improvement",
        "interior design",
        "commercial projects",
        "new builds",
        "kitchen remodel",
        "bathroom renovation"
    ],
    openGraph: {
        title: "Our Work | Remodeling Projects | Leo's Remodeling & Renovation",
        description:
            "A showcase of our finest residential and commercial remodeling projects, including kitchens, bathrooms, and full home builds.",
        url: "https://yourwebsite.com/our-work",
        siteName: "Your Company Name",
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Work | Remodeling Projects | Leo's Remodeling & Renovation",
        description:
            "Browse our portfolio of high-end remodeling and renovation work.",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDOpuZekN2hV9qQGPa3RGMqzvPmiprhrAwQNOONqUEOrIShcf8w5RugFhX8CmjcY9isOvFWK9w2jiN6TKQcRHNJfCiF4XBQYIZ4BvaQCjtvUJhum0po7wTDi0oa25i6thx102WvbHV0LY7ADcP8EaxFbDvJeS4kW-DqNH946TYRJ8xTYKcEJM617I69PmETrLXhjPhvxB6oIpXOBd0u6Ya9U5OtqIwb85JMbCv3Efx-0YjUENl4KYOZShw_85VrkJVTv3c_oNzXYZ1W"
        ]
    }
}


type Project = {
    image: string;
    title: string;
    kind: string;
}

const projects: Project[] = [
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOpuZekN2hV9qQGPa3RGMqzvPmiprhrAwQNOONqUEOrIShcf8w5RugFhX8CmjcY9isOvFWK9w2jiN6TKQcRHNJfCiF4XBQYIZ4BvaQCjtvUJhum0po7wTDi0oa25i6thx102WvbHV0LY7ADcP8EaxFbDvJeS4kW-DqNH946TYRJ8xTYKcEJM617I69PmETrLXhjPhvxB6oIpXOBd0u6Ya9U5OtqIwb85JMbCv3Efx-0YjUENl4KYOZShw_85VrkJVTv3c_oNzXYZ1W",
        title: "Modern Kitchen Remodel",
        kind: "Residential"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOXQj8mPJN42XJRSYB2WNNU6fv4om61nX68Jz6BhvecctZCWRKhyxpQioT0YWcuxGGnrkufZUFfAWJARzq2KDXzLMNyuCK9pT7elX2WooPeSkV_hwPr1Gif_P8A5HWpFkkfRzSTL8cJLOsm-U3MngtP8OHSt4ysirM7EB6zAX7c6Ky3CUMVV6MLa7IBsUVKG-zsq1osOZ7C_Gnabyq5ULET7tISEbTenb4Ltz_hPUAcUXIV__78DloxaEdn9BBnrnt6PXTO9BkGixt",
        title: "Luxury Bathroom Renovation",
        kind: "Residential"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3NrGejf2cTFD_slXOLFh955lbWqt9JpgLAtye-HqAGFb0xG2OnzYNvl-ta4Kr9G9U7a9wm701LGBdeMs6dxPsAdFZSoKCJa5qEP95gHkYc26GeUfNR5ix4a9pOwFZ8ER1swwdxpJZ6EFQgYkAgfbN1mjmadqx5UbdS0ppSWqUyBOI3-JkD0m3mg1XBcVteqZU09QvSX6IFDEUvoYIZK3UM4dDE6IRIouElkjIYjuAKZ6COsFG90skE4wTrTWHsx6v-ZvGS8bxgYGB",
        title: "Commercial Office Space",
        kind: "Commercial"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA595FV47kMZzxaaXdbwVOhqfads3Vu1nuq3khDVZ_Pp7pWNReDxPPsSsvQajQfD73GG0ccQVRDYKG6xJeOiZts9zoWFASVloufgimbrbow07sRJQJtCo8PsaCVKrXIPWymsozGg0LIcJbgdRep1wCwXotcvPt_7K0twga-7XauEojt3C2yP4nRZIeH7Arym_VHK2shWSu1ocXceSeI7z4-Xbx-9_L6F_voLvNvkSd_orK0Lkhbimm6A3OhiGQweg5b146ChEfDBxv-",
        title: "Full Home New Build",
        kind: "New Build"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1s_LB1PdOIx9-Y11nJRelOnWQxAuuVkYQpDbQhbGE1H9tkk14EWghRsM9ilLjZ267Xl9Rs1vtPQSOsXzlMmAJyM2CsjK6ZG6WNp13QWNo81nzlw4XbA2g8pfqjIoVXfsQ7a2klZh09SkJX4QAI-sxy6wXVIq6EAg0JD4NJsEKj9xpM12bXiMLGF5s7FHtwRyQylFAWuooZPaX5kzLX8__t4rFiz1G7_TvBcda4cQxxqmrMkpGGg9CfyDTDVQi2KkkT_iCjWBccoTa",
        title: "Downtown Loft Conversion",
        kind: "Renovation"
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr8Icni6PcUvAcNiHeYGlWLRt4rRpmANEfnLN01ay_q8V3V6vt_B9B8VqaBBMsZwc5On-dL5vZVZfxO4wO2KBsv8eP6w0gLrgXiohEX9zrhiOyHd3A9TJF9RDRdDMqB5EqNRljkZRL-h1MIENzVvC0b7bM_icSfFPXABsr_I30xpztxGbUcefj38p3JeIfTa0F0G21psUunZZ7X6KtD-B5NOk70LGmpQJWv9cJegVQVdmpOQGHKQ65oEmVY0P9zE4xqbOOhpmKcQbn",
        title: "Suburban Family Home",
        kind: "Renovation"
    }
]

const Page = () => {
    return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
            <main className="flex flex-1 justify-center py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
                <div className="layout-content-container flex flex-col max-w-7xl flex-1">
                    <div className="flex flex-wrap justify-between items-center gap-4 px-4 pt-8 pb-4">
                        <h1 className="text-[#333333] dark:text-white text-4xl sm:text-5xl font-bold tracking-tight font-display">Our Work</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">

                        {projects.map(({title, image, kind}, index) => (
                            <div key={index} className="group flex flex-col gap-3 rounded-lg overflow-hidden transition-shadow hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-primary/10">
                                <div className="relative w-full aspect-[4/3] overflow-hidden">
                                    <img loading='lazy' className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105" src={image} alt={title}></img>
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    </div>
                                </div>
                                <div className="px-2 pb-2">
                                    <p className="text-[#333333] dark:text-white text-lg font-bold font-display tracking-tight">{title}</p>
                                    <p className="text-[#555555] dark:text-gray-400 text-sm font-normal">{kind}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    </div>
    )
}
export default Page

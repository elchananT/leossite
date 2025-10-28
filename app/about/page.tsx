import React from "react";
import HeroAbout from "@/app/about/HeroAbout";
import Story from "@/app/about/Story";
import Team from "@/app/about/Team";
import CTA from "@/app/about/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Leo's Remodeling & Renovation",
    description:
        "Learn more about Leo's Remodeling & Renovation — our story, our team, and our mission to bring exceptional remodeling and renovation experiences to every home.",
    openGraph: {
        title: "About Leo's Remodeling & Renovation",
        description:
            "Meet the Leo's Remodeling & Renovation team and discover how we transform spaces with craftsmanship, innovation, and care.",
        url: "https://yourdomain.com/about",
        siteName: "Leo's Remodeling & Renovation",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Leo's Remodeling & Renovation",
        description:
            "Learn more about the story and people behind Leo's Remodeling & Renovation — where homes are reimagined with care and quality.",
        images: ["/images/about-og.jpg"],
    },
    keywords: [
        "remodeling company",
        "home renovation",
        "Leo's Remodeling & Renovation's team",
        "about Leo's Remodeling & Renovation",
        "construction professionals",
    ],
};

const Page = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#F8F8F8]/80">
            <main className="flex-grow">
                <HeroAbout />
                <Story />
                <Team />
                <CTA />
            </main>
        </div>
    );
};

export default Page;

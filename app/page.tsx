import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import {Faq} from "@/components/FAQ";
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Leo's Remodeling & Renovation",
    description:
        "Transform your home or business with Leo's Remodeling & Renovation — specialists in modern remodeling, renovation, and new build projects. Quality craftsmanship, innovative design, and trusted results.",
    keywords: [
        "home remodeling",
        "renovation",
        "kitchen remodeling",
        "bathroom renovation",
        "commercial construction",
        "new builds",
        "Leo's Remodeling & Renovation",
        "home improvement"
    ],
    openGraph: {
        title: "Leo's Remodeling & Renovation",
        description:
            "Explore stunning remodeling projects and discover how Leo's Remodeling & Renovation brings your vision to life with quality craftsmanship and modern design.",
        url: "https://yourwebsite.com",
        siteName: "Leo's Remodeling & Renovation",
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Leo's Remodeling & Renovation",
        description:
            "Your trusted remodeling partner for kitchens, bathrooms, and complete home transformations. Designed with precision. Built with passion.",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDOpuZekN2hV9qQGPa3RGMqzvPmiprhrAwQNOONqUEOrIShcf8w5RugFhX8CmjcY9isOvFWK9w2jiN6TKQcRHNJfCiF4XBQYIZ4BvaQCjtvUJhum0po7wTDi0oa25i6thx102WvbHV0LY7ADcP8EaxFbDvJeS4kW-DqNH946TYRJ8xTYKcEJM617I69PmETrLXhjPhvxB6oIpXOBd0u6Ya9U5OtqIwb85JMbCv3Efx-0YjUENl4KYOZShw_85VrkJVTv3c_oNzXYZ1W"
        ]
    }
}

export default function Home() {
  return (
    <div className="relative w-full flex flex-col">
        <main>
            <Hero/>
            <About/>
            <Projects/>
          <Testimonials/>
            <Faq/>
            <Contact/>
        </main>
    </div>
  );
}

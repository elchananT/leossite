import React from 'react'
import Form from "@/app/contact/Form";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact Us | Leo's Remodeling & Renovation",
    description:
        "Get in touch with Leo's Remodeling & Renovation — we’re here to discuss your renovation ideas, answer questions, and help plan your next remodeling project.",
    openGraph: {
        title: "Contact Leo's Remodeling & Renovation",
        description:
            "Let’s start your remodeling journey together. Contact Leo's Remodeling & Renovation for quotes, consultations, or any renovation inquiries.",
        url: 'https://yourdomain.com/contact',
        siteName: "Leo's Remodeling & Renovation",
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Contact Leo's Remodeling & Renovation",
        description:
            "Reach out to Leo's Remodeling & Renovation to discuss your renovation goals and get a free quote today.",
        images: ['/images/contact-og.jpg'],
    },
    keywords: [
        "contact Leo's Remodeling & Renovation",
        'home renovation quote',
        'remodeling services',
        'kitchen remodel contact',
        'construction consultation',
    ],
};

const Contact = () => {
    return (
        <div className="px-10 md:px-24 flex flex-1 justify-center py-5 mt-20">
            <div className="layout-content-container flex flex-col justify-center items-center max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-center text-center gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Let&#39;s
                            Start a Project</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-900/70">
                            We&#39;d love to hear about your ideas. Fill out the form below or use our contact details to
                            get in touch.
                        </p>
                    </div>
                </div>

                <Form/>
            </div>
        </div>
    )
}
export default Contact
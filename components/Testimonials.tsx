import React from 'react'

type Testimonial = {
    review: string;
    name: string;
    position: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        review: "The entire process, from design to construction, was seamless and professional. Their team is talented, communicative, and truly a pleasure to work with. Highly recommended!",
        name: "Emily Rodriguez",
        position: "Living Space Redesign",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9zFXnntynYw5sI6lTseqVlZjXbnyqujPY5sJ4PpGQXxI01yB56xbj0i_c0Dv8EZEfjGvF-6yx9uZ5v49zZRN84w4l3YRrhkUVClXH3Q7kHCCc3i0krB8BFUl1Bp5vbnjMx-z5vvoHTSu2X1sS5-4EH7Qsb10VN9RzXHnpcGX6LCyhCo6v9VmdJkSbjXpOcJS_C0B69R0m5XgfGCOUgqYHImK4BqZvRtAfK5gNR5A2y6uDyYa7-EELNYbotQuHnTW0uJcK6s_uURsM"
    },
    {
        review: "Working with Remodel Co was a dream. They took our vague ideas and turned them into a reality that exceeded all our expectations. The attention to detail was incredible.",
        name: "Sarah Johnson",
        position: "Homeowner",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfZBzQDyna4fJ87ExErYknOMTJyl6FQATf2FHsnvO56QFUoQrJJWELShdcMzsfzBfnrPbvtiIuhERhdpUxRwDoWP-x5WqHCKKy_dmLzLTSvacpZmyCmjtnGQqaCrUUQqAQfqEEVxd-YCIpEQnp-4Xtzehgd3B2RAH9aqIeZwmy67SYj6fHcT3Fb-fD3Y4hIvYdnw33SAKunadPmNjzLWPv1ijgi8yM5OxJ-MxsEveChZJblCJhzAOQG8Fb9q45Snqz_qB62O10yldi"
    },
    {
        review: "They transformed our outdated living area into a modern, functional, and beautiful space where our family loves to gather. The quality of their work is outstanding.",
        name: "Michael Chen",
        position: "Kitchen Remodel Client",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo70u-5K1XCzTDYMAJa1hJWb_-FQMFb5BKLUth_Jye6eNHDyvmG-U9smiFaEm3lkB93luDr76ImETkgY4m2MDpmnuCnCi73QpWS92OPz1pXBrHV7fZJkRpGp7ClYW4E1ExJAPsm_kFmbRUSj0WPowL3DHPp8B6A014nJhmb0FL6zxOoM4qSWPY_gRekxLLCZRP1JD2qZd5-_qbULj1TldX09pKn2_9LX-reBAmvngzPjBvwkFwTNhaWMzgA0oNLySCK3EuS7b9i40q"
    }
]

const Testimonials = () => {
    return (
        <section className="py-20 md:py-28" id="testimonials">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-display">What Our Clients Say</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-[#36454F]/80 dark:text-[#EAEAEA]/80">We&#39;re proud of the relationships we build and the stunning spaces we create together.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {testimonials.map(({review, image, name, position}, index) => (
                        <div key={index} className="bg-white dark:bg-[#EAEAEA]/50 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <p className="italic text-[#36454F]/90 dark:text-[#EAEAEA]/90">&#34;{review}&#34;</p>
                            <div className="flex items-center mt-6">
                                <img className="w-12 h-12 rounded-full object-cover" data-alt="Headshot of Sarah Johnson" src={image}/>
                                <div className="ml-4">
                                    <p className="font-semibold font-display">{name}</p>
                                    <p className="text-sm text-[#36454F]/70 dark:text-[#EAEAEA]/70">{position}</p>
                                </div>
                            </div>
                        </div>
                    ))}


            </div>
            </div>
        </section>
    )
}
export default Testimonials

import React from 'react'

const Team = () => {
    return (
        <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-[#4A908A] sm:text-4xl">Meet the Team</h2>
                    <p className="mt-4 text-lg leading-8">The creative minds and skilled hands behind every project.</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="group relative flex flex-col items-center text-center">
                        <div className="relative h-56 w-56 overflow-hidden rounded-full shadow-lg transition-transform group-hover:scale-105">
                            <img className="h-full w-full object-cover" data-alt="Professional headshot of John Carter, Founder &amp; CEO." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSBBzr6_7gVIZclAnovDIV0FyB0IbWzpZN1kfq9WDsh5VzCZU60mxd5GvjjvW2qdeErWLBF09aw2Ao_nvWCxyVsM89oMFQFpYn7SZZOoatvhBlIZo-uDXkFOopIb48ebwwH4uy7FYKfFlk-F4MyGjV8edFOqm-df57Pw9RY-6kp9ALFS8OoVlcaoRXJnaWaS3CA-WB0StVHywnyP1AvpOguwHug27B76-6AdqWUp6-3-Lmkwhx_bw9c7W6qbs_AqXviGYEHeUVEeuF"/>
                        </div>
                        <h3 className="mt-6 font-heading text-lg font-semibold leading-8 tracking-tight">John Carter</h3>
                        <p className="text-base leading-7 text-[#4A908A]">Founder &amp; CEO</p>
                        <p className="mt-2 text-sm leading-6">With over 20 years of experience, John leads our company with a vision for excellence and a passion for design.</p>
                    </div>
                    <div className="group relative flex flex-col items-center text-center">
                        <div className="relative h-56 w-56 overflow-hidden rounded-full shadow-lg transition-transform group-hover:scale-105">
                            <img className="h-full w-full object-cover" data-alt="Professional headshot of Sarah Miller, Lead Designer." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTv5-ea0YtXtYkyeiegUSr9gBHa3Mh78Ie5CTS7f6kOF0SaVDbFiDf1ctEjpx8VqTIy4er3XZ-QTLrVZbfxTfUOfSWskiUR3JXpUdWrQYJjVN7UyPO899Nap2czuphW6H3LlJV1HgiDL0S_3nRbqJKPSo6pX47WZOU5a-7ytpDiuQ9xv8_ZLPx9vqID0PSDNkeymw5gNqjxdGY21PIO9269ZUNKyvLv_4vKXRNVH14FOEecKGVPVIEqrVdnh_06MImkPdf-La3pRMD"/>
                        </div>
                        <h3 className="mt-6 font-heading text-lg font-semibold leading-8 tracking-tight">Sarah Miller</h3>
                        <p className="text-base leading-7 text-[#4A908A]">Lead Designer</p>
                        <p className="mt-2 text-sm leading-6">Sarah&#39;s innovative eye for detail and commitment to client happiness are the heart of our creative process.</p>
                    </div>
                    <div className="group relative flex flex-col items-center text-center">
                        <div className="relative h-56 w-56 overflow-hidden rounded-full shadow-lg transition-transform group-hover:scale-105">
                            <img className="h-full w-full object-cover" data-alt="Professional headshot of Emily Davis, Project Manager." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpsfZJterMhFtCSooQwopOdxWVLjhKF49Dk-P7x1PWAprbufCYahU4l57ni6dYm1bG8d6poU9mwBKh96Aa3WzPeLS79QMKSKcHM4pTELTje3KRijT28SWsHyJYNx2vd1F6fR4MPNIDN_oGxNfQrIBSxP4DErdpLLw1Db8ce7WKnj2OOsL9oNotWV3vkQFWLnfKcA7iGuEUGQSrfrQsDMjhok96Ob-Q_BFI9K6WEs7sKtBQdo5AnNYkZnS7LPTc20M0XwOe411fPn3-"/>
                        </div>
                        <h3 className="mt-6 font-heading text-lg font-semibold leading-8 tracking-tight">Emily Davis</h3>
                        <p className="text-base leading-7 text-[#4A908A]">Project Manager</p>
                        <p className="mt-2 text-sm leading-6">Emily ensures every project runs smoothly, on time, and on budget, turning complex plans into reality.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team

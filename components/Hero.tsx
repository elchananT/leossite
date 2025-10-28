import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center h-[85vh] min-h-[600px] w-full bg-cover bg-center" data-alt="A beautifully designed modern living room with minimalist furniture and large windows." id="home"
                 style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=2127&amp;auto=format&amp;fit=crop')" }}>
            <div className="container mx-auto px-6 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight tracking-tight drop-shadow-lg">Transforming Spaces, Inspiring Lives.</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-body drop-shadow">We believe great design is a harmonious blend of form and function, creating spaces that are beautiful, personal, and practical.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#4A908A] text-white text-base font-bold tracking-wide shadow-md hover:bg-[#4A908A]/90 transition-all transform hover:scale-105" href="/projects">
                        <span className="truncate">Watch our Projects</span>
                    </Link>
                    <Link className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#C0B283] text-[#36454F] text-base font-bold tracking-wide shadow-md hover:bg-[#C0B283]/90 transition-all transform hover:scale-105" href="/contact">
                        <span className="truncate">Contact us</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero

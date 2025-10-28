import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const Navbar = () => {
    return (
        <header className="fixed top-0 z-50 w-full bg-[#F8F8F8]/80 dark:bg-background-dark/80 backdrop-blur-sm dark:border-gray-700">
            <div className="hidden md:flex container mx-auto px-6 py-4 items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link className="text-lg font-bold font-display text-text-light dark:text-text-dark" href="/">Leo&#39;s Remodeling & Renovation</Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link className="text-sm font-semibold text-[#C0B283] transition-colors" href="/">Home</Link>
                    <Link className="text-sm font-semibold text-[#C0B283] transition-colors" href="/about">About</Link>
                    <Link className="text-sm font-semibold text-[#C0B283] transition-colors" href="/projects">Projects</Link>
                    <Link className="text-sm font-semibold text-[#C0B283] transition-colors" href="/contact">Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#4A908A] text-white text-sm font-bold tracking-wide shadow-sm hover:bg-[#4A908A]/90 transition-colors" href="#contact">
                        <span className="truncate">Get a Quote</span>
                    </Link>
                </div>
            </div>
                <MobileNav/>
        </header>
    );
};

export default Navbar;

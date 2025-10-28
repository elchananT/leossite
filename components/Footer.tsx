import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#36454F] dark:bg-gray-900 text-white font-body">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-lg font-semibold font-display">Remodel Co</h3>
                        <p className="mt-4 text-sm text-gray-300">Designing and building beautiful, functional spaces that inspire.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold font-display tracking-wider uppercase">Quick Links</h4>
                        <ul className="mt-4 space-y-2">
                            <li><Link className="text-sm text-gray-300 hover:text-white transition-colors" href="/">Home</Link></li>
                            <li><Link className="text-sm text-gray-300 hover:text-white transition-colors" href="/about">About</Link></li>
                            <li><Link className="text-sm text-gray-300 hover:text-white transition-colors" href="/projects">Projects</Link></li>
                            <li><Link className="text-sm text-gray-300 hover:text-white transition-colors" href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold font-display tracking-wider uppercase">Contact Info</h4>
                        <ul className="mt-4 space-y-2 text-sm text-gray-300">
                            <li>123 Design Lane, Suite 100</li>
                            <li>New York, NY 10001</li>
                            <li className="pt-2"><a className="hover:text-white transition-colors" href="tel:1234567890">(123) 456-7890</a></li>
                            <li><a className="hover:text-white transition-colors" href="mailto:contact@remodelco.com">contact@remodelco.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold font-display tracking-wider uppercase">Follow Us</h4>
                        <div className="flex mt-4 space-x-4">
                            <a className="text-gray-300 hover:text-white transition-colors" href="#">
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                                </svg>
                            </a>
                            <a className="text-gray-300 hover:text-white transition-colors" href="#">
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </a>
                            <a className="text-gray-300 hover:text-white transition-colors" href="#">
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.321 6.883c.484 0 .875.391.875.875v5.484c0 .484-.391.875-.875.875H8.679c-.484 0-.875-.391-.875-.875V9.758c0-.484.391-.875.875-.875h6.642zM12 10.156a2.91 2.91 0 100 5.82 2.91 2.91 0 000-5.82zm5.71-1.428a.96.96 0 100-1.92.96.96 0 000 1.92z" fillRule="evenodd"></path>
                                    <path d="M12 14.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                    <p className="text-sm text-gray-400">© 2024 Remodel Co. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
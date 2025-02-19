import { AiFillProduct } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaGithub, FaRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <section className="bg-white mt-14 dark:bg-gray-900">
    <div className="container p-6 mx-auto text-center md:text-justify">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                <Link to={'/'} className="btn relative -left-7 md:left-7 btn-ghost text-xs md:text-2xl gap-0 font_Jersey  text-gray-400"><AiFillProduct className="text-[hsl(112,43%,55%)]" />
                    <span className="text-[hsl(112,43%,55%)]">A</span>lt<span className="text-[hsl(112,43%,55%)]">P</span>rod<span className="text-[hsl(112,43%,55%)]">Hub</span></Link>

                    <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">AltProdHub : Streamlined, Transparent, Dynamic, Accessible, Comprehensive, Innovative, User-friendly.</p>

                    <div className="flex mt-6 -mx-2">
                        <Link title="visit our Instagram site" target="-blank" to={'https://www.instagram.com/the_shekh_toukir_ahmed/'}
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Reddit">
                           <FaInstagram></FaInstagram>
                        </Link>
                    
                        <Link title="visit our facebook site" target="-blank" to={'https://www.facebook.com/quiet.lam'}
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Facebook">
                            <FaFacebook></FaFacebook>
                        </Link>
                    
                        <Link title="visit our gitHub repository" target="-blank" to={'https://github.com/Ahmedturaj'}
                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Github">
                           <FaGithub></FaGithub>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</p>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</p>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</p>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</p>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</p>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</p>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">AnyTypes</p>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Recommended</p>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Branded</p>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Have any question?</span>
                        <Link to={'mailto:sheikhtoukirahmedturaj013@gmail.com'} className="flex gap-2  items-center mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"><FaRightLong className="text-[hsl(112,43%,55%)]"></FaRightLong> Mail Us</Link>
                    </div>
                </div>
            </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>

        <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© AltProdHub 2023 - All rights reserved</p>
        </div>
    </div>
</section>
    );
};

export default Footer;
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
    <div className="container p-6 mx-auto text-center md:text-justify">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                <Link to={'/'} className="btn relative -left-7 md:left-7 btn-ghost text-xs md:text-2xl gap-0 font_Jersey  text-gray-400"><piFillProduct className="text-[hsl(112,43%,55%)]" />
                    <span className="text-[hsl(112,43%,55%)]">A</span>lt<span className="text-[hsl(112,43%,55%)]">P</span>rod<span className="text-[hsl(112,43%,55%)]">Hub</span></Link>

                    <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

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
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</p>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</p>
                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</p>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                    </div>
                </div>
            </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>

        <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2023 - All rights reserved</p>
        </div>
    </div>
</section>
    );
};

export default Footer;
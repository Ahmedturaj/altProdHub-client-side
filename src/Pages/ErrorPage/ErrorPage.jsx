import { Link } from "react-router-dom";

import errorPhoto from '../../assets/angry-2498_256.gif'
import PageTitle from "../../Components/PageTitle/PageTitle";
const ErrorPage = () => {
    return (
        <section className="">
            <PageTitle title={'4o4'}></PageTitle>
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                    <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50">
                       <img src={errorPhoto} alt="" />
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold md:text-3xl">Page not found</h1>
                    <p className="mt-5">The page you are looking for does not exist. Here are some helpful links:</p>

                    <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto"> <Link to={'/'} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                            Take me home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
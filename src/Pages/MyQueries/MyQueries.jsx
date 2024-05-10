import { Link } from "react-router-dom";
import PageBanner from "../../Components/PageBanner/PageBanner";

const MyQueries = () => {
    return (
        <div>
            <div className="w-full relative -top-20">
            <PageBanner pageTitle={'My Queries'}></PageBanner>
            </div>
            <Link to={'/addQuery'} className="btn md:w-96 absolute md:top-56 top-36 mr-5 left-36 md:left-[510px] bg-[hsl(112,43%,55%)] hover:bg-[hsl(112,27%,26%)] text-white md:text-2xl">Add Queries</Link>
        </div>
    );
};

export default MyQueries;
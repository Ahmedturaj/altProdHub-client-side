import { Link } from "react-router-dom";
import PageBanner from "../../Components/PageBanner/PageBanner";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyQuery from "./MyQuery";
import noQueryPhoto from '../../assets/scratching-the-head-1647_256.gif'
import axios from "axios";
import PageTitle from "../../Components/PageTitle/PageTitle";

const MyQueries = () => {
    const { user } = useContext(AuthContext);
    const [myQueries, setMyQueries] = useState([]);
    const url = `https://b9a11-server-side-two.vercel.app/myQueries/${user?.email}`
    useEffect(() => {
       axios.get(url, {withCredentials:true})
       .then(data=>{
        setMyQueries(data.data)
       })
    }, [user,url]);
    // ____________________
    const [layoutOption, setLayoutOption] = useState("lg:grid-cols-3");
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleGridLayout = () => {
        setShowDropdown(!showDropdown);
    };

    const changeLayout = (layout) => {
        setLayoutOption(layout);
        setShowDropdown(false);
    };

    // Sort loadedData in descending order by dateTime
    const sortQueries = myQueries.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));


    return (
        <section>
            <PageTitle title={'My Queries'}></PageTitle>
            <div className="w-full relative -top-20">
                <PageBanner pageTitle={'My Queries'}></PageBanner>
            </div>
            <Link to={'/addQuery'} title="Add Your Query" className="md:w-80 text-center absolute lg:top-56 top-40 mr-5 left-36 md:left-48 lg:left-[510px] border-b-2 border-l-2
            rounded-md border-[hsl(112,43%,55%)] hover:text-[hsl(112,67%,63%)] text-white md:text-2xl p-2"><button className="border-b-2 w-full border-l-2
            rounded-md border-[hsl(112,43%,55%)]">Add Queries</button></Link>
            {sortQueries.length === 0 ? <div className="flex flex-col justify-center items-center">
                <img src={noQueryPhoto} alt="" className="bg-gray-200 bg-opacity-20" />
                <p>Please Add Your Query</p>
            </div> :
                <div className="">
                    <div className="flex justify-center my-6">
                        <div className="relative">
                            <button
                                className=" px-4 py-2 rounded-md border-b-2 w-full border-l-2 border-r-2
                        border-[hsl(112,43%,55%)] text-[hsl(112,43%,55%)]"
                                onClick={toggleGridLayout}
                            >
                                Layout
                            </button>
                            {showDropdown && (
                                <div className="absolute top-10 right-0 bg-white shadow-md rounded-md">
                                    <button
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                        onClick={() => changeLayout("grid-cols-1")}
                                    >
                                        single
                                    </button>
                                    <button
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                        onClick={() => changeLayout("grid-cols-2")}
                                    >
                                        Double
                                    </button>
                                    <button
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                        onClick={() => changeLayout("grid-cols-3")}
                                    >
                                        Triple
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={`w-11/12 mx-auto gap-10 grid ${layoutOption}`}>
                        {
                            sortQueries.map(myQuery => <MyQuery key={myQuery._id} myQuery={myQuery} setMyQueries={setMyQueries} myQueries={myQueries}></MyQuery>)
                        }
                    </div>
                </div>}
        </section>
    );
};

export default MyQueries;
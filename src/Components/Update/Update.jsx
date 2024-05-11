import { useContext, useState } from "react";
import PageBanner from "../PageBanner/PageBanner";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";



const Update = () => {
    const loadedData = useLoaderData();

    const {
        productName,
        productBrand,
        productImage,
        QueryTitle,
        detail,
        authorName,
        authorEmail,
        authorImage,
    } = loadedData;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleUpdateQuery = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productImage = form.productImage.value;
        const QueryTitle = form.QueryTitle.value;
        const detail = form.detail.value;
        const dateTime = form.dateTime.value;
        const query = {
            productName,
            productBrand,
            productImage,
            QueryTitle,
            detail,
            dateTime,
            authorName: user?.displayName,
            authorEmail: user?.email,
            authorImage: user?.photoURL,
        }
        console.log(query);
    }
    const getCurrentDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };
    const [defaultDateTime, setDefaultDateTime] = useState(getCurrentDateTime());

    return (
        <section className="">
            <div className="w-full relative -top-20">
                <PageBanner pageTitle={'Update Your Queries'}></PageBanner>
            </div>
            <div className=" mt-14 max-w-4xl p-6 mx-auto bg-gray-500 rounded-md shadow-m">
                <h2 className="text-lg font-semibold text-white capitalize dark:text-white">Update Your Query</h2>

                <form onSubmit={handleUpdateQuery}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white" >Product Name</label>
                            <input name="productName" type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={productName} />
                        </div>

                        <div>
                            <label className="text-white" >Product Brand</label>
                            <input type="text" name="productBrand" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={productBrand} />
                        </div>

                        <div>
                            <label className="text-white" >Product Image</label>
                            <input name="productImage" type="url" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={productImage} />
                        </div>

                        <div>
                            <label className="text-white">QueryTitle</label>
                            <input type="text" name="QueryTitle" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required defaultValue={QueryTitle} />
                        </div>
                        <div>
                            <label className="text-white">Boycotting Reason Details</label>
                            <textarea name="detail" id="" cols="10" rows="5" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required defaultValue={detail} />
                        </div>
                        <div>
                            <label className="text-white">Date & Time</label>
                            <input type='datetime-local' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="dateTime"
                                id="dateTime"
                                defaultValue={defaultDateTime} readOnly />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <input type="submit" value="Add Query" className="px-8 py-2.5 leading-5 bg-gray-400 transition-colors duration-300 transform btn text-[#f2f2f2f2] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Update;
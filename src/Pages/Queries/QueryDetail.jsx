
import { useLoaderData } from 'react-router-dom';
import PageBanner from '../../Components/PageBanner/PageBanner';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const QueryDetail = () => {
    const { user } = useContext(AuthContext);
    const queryDetails = useLoaderData();
    const [comments, setComments] = useState([]);
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


    const {
        productName,
        productBrand,
        productImage,
        QueryTitle,
        detail,
        dateTime,
        authorName,
        authorImage,
        authorEmail,
        _id
    } = queryDetails
    const parsedDateTime = new Date(dateTime);
    const formattedDateTime = parsedDateTime.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    // handle recommendation

    const handleAddRecommend = e => {
        e.preventDefault();
        const form = e.target;
        const recommendationTitle = form.recommendationTitle.value;
        const recommendedProductName = form.recommendedProductName.value;
        const recommendedProductImage = form.recommendedProductImage.value;
        const recommendationReason = form.recommendationReason.value;
        const recommendation = {
            recommendationTitle,
            recommendedProductName,
            recommendedProductImage,
            recommendationReason,
            recommendationEmail: user.email,
            recommendationName: user.displayName,
            productName,
            productBrand,
            productImage,
            QueryTitle,
            detail,
            dateTimes: defaultDateTime,
            authorName,
            authorImage,
            authorEmail,
            query_id: _id

        }
        axios.post('http://localhost:5000/recommendation', recommendation)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        title: `${authorName}`,
                        text: "Your recommendation have taken .",
                        showConfirmButton: false,
                        timer: 1500,
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/recommendation/${_id}`)
            .then(comment => {
                setComments(comment.data);
            })
    }, [comments]);



    // function for Date and Time
    const formatDate = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        return dateTime.toLocaleString('en-US', options);
    }
    return (
        <section>
            <div className="w-full relative -top-20">
                <PageBanner pageTitle={`Details of: ${productName}`}></PageBanner>
            </div>
            <div className="container flex flex-col md:flex-row items-center justify-center px-6 py-16 mx-auto text-center">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-semibold lg:text-4xl">{productName}</h1>
                    <h1 className="text-3xl font-semibold lg:text-4xl">{QueryTitle}</h1>
                    <p className="mt-6">{detail}</p>
                    <p className="mt-3 text-sm  badge  badge-outline">{productBrand}</p>
                    <p className="mt-3 ml-3 text-sm  badge  badge-outline">{formattedDateTime}</p>
                    <div className="flex items-center justify-center mt-4">
                        <img src={authorImage} alt="Author Thumbnail" className="w-8 h-8 rounded-full" />
                        <p className="text-sm ml-2">{authorName}</p>
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src={productImage} />
                </div>
            </div>
            <h2 className='text-center my-12 font-bold text-3xl underline'>Recommendation: {comments?.length}</h2>
            <div className="w-11/12 h-36 mx-auto overflow-y-auto mt-8 border-2 p-2 rounded-md">
                {
                    comments.map(comment => <div key={comment._id} className="chat chat-start">
                        <div className="chat-header">
                           From: {comment?.recommendationName}
                            <time className="text-xs ml-2 opacity-50">{formatDate(comment.dateTimes)}</time>
                        </div>
                        <div className="chat-bubble">
                            <h2>{comment?.recommendationTitle}</h2>
                            <h2>{comment?.recommendationReason}</h2>
                        </div>
                        <div className="chat-footer opacity-50">
                            To:{comment?.authorName}
                        </div>
                    </div>)
                }

            </div>
            <div className="container px-6 py-16 mx-auto text-center">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-semibold lg:text-4xl">Hello there! Ready to dive into a recommendation that might just become your new favorite?</h1>

                    <p className="mt-6">
                        Absolutely! I have got a recommendation for a gripping mystery novel that will keep you on the edge of your seat until the very last page. With intricate plot twists and compelling characters, it is a must-read for any fan of the genre.
                    </p>

                    {/*_____________ form _________*/}

                    <div className="max-w-4xl p-6 mx-auto rounded-md shadow-md ">
                        <h2 className="text-lg font-semibold  capitalize">Recommendation Form</h2>

                        <form onSubmit={handleAddRecommend}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="">Recommendation Title</label>
                                    <input name='recommendationTitle' type="text" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="">Recommended product Name</label>
                                    <input name='recommendedProductName' type="text" className="block w-full px-4 py-2 mt-2border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="">Recommended Product Image</label>
                                    <input name='recommendedProductImage' type="url" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="" >Recommendation reason</label>
                                    <textarea name="recommendationReason" id="" cols="10" rows="2" className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                                </div>
                            </div>

                            <div className="flex justify-center mt-6">
                                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Recommendation</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default QueryDetail;
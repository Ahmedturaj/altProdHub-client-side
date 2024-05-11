
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt'
const RecentQuery = ({ recent }) => {
    const {
        productName,
        productBrand,
        QueryTitle,
        detail,
        dateTime,
        authorName,
        authorImage,
        _id,
        productImage
    } = recent;

    const parsedDateTime = new Date(dateTime);
    const formattedDateTime = parsedDateTime.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    return (

        <div className="max-w-2xl mt-24 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <Tilt className="scale-95" options={{ scale: 1.01, transition: true, speed: 1000, easing: "cubic-bezier(.03,.98,.52,.99)" }} >
            <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">{formattedDateTime}</span>
                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" role="button">{productBrand}</a>
            </div>

            <div className="mt-2">
                <p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{productName}</p>
                <p className="text-xl mt-5 font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{QueryTitle}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{`${detail.substring(0, 150)}.....`}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
                <Link to={`/queryDetails/${_id}`} className="text-blue-600 dark:text-blue-400 hover:underline">View details</Link>

                <div className="flex items-center">
                    <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={authorImage} alt="avatar" />
                    <p className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{authorName}</p>
                </div>
            </div>
            </Tilt>
            <Tilt className="scale-95" options={{ scale: 1.01, transition: true, speed: 1000, easing: "cubic-bezier(.03,.98,.52,.99)" }} >
                <div className="mt-5 flex justify-between items-center">
                    <img src={productImage} alt="" />
                </div>
                </Tilt>
        </div>

    );
};

RecentQuery.propTypes = {
    recent: PropTypes.object
};

export default RecentQuery;
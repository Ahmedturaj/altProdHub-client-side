
import axios from 'axios';
import PropTypes from 'prop-types';
import { GrUpdate } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import Swal from 'sweetalert2';

const MyQuery = ({ myQuery, myQueries, setMyQueries }) => {

    const {
        productName,
        productBrand,
        QueryTitle,
        detail,
        dateTime,
        authorName,
        authorImage,
        _id
    } = myQuery

    const parsedDateTime = new Date(dateTime);
    const formattedDateTime = parsedDateTime.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/queries/${_id}`,{withCredentials:true})

                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = myQueries.filter(query => query._id !== _id)
                            setMyQueries(remaining);
                        }

                    })

            }
            return;
        });
    }

    return (
        <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">{formattedDateTime}</span>
                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" role="button">{productBrand}</a>
            </div>

            <div className="mt-2">
                <p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{productName}</p>
                <Tilt><p className="text-xl mt-5 font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{QueryTitle}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{`${detail.substring(0, 150)}.....`}</p></Tilt>
            </div>

            <div className="flex items-center justify-between mt-4">
                <Link to={`/queryDetails/${_id}`} className="text-blue-600 dark:text-blue-400 hover:underline">View details</Link>

                <div className="flex items-center">
                    <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={authorImage} alt="avatar" />
                    <p className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{authorName}</p>
                </div>
            </div>
            <div className="mt-5 flex justify-between items-center">
                <Link to={`/update/${_id}`}>
                    <Tilt><button style={{transition:'all 1s'}} className='btn bg-gray-600 text-white hover:bg-green-500'><GrUpdate /> Update</button></Tilt>
                </Link>
                <Tilt><button style={{transition:'all 1s'}} onClick={() => handleDelete(_id)} className='btn bg-gray-600 text-white hover:bg-amber-500'><MdDelete /> Delete</button></Tilt>
            </div>
        </div>
    );
};

MyQuery.propTypes = {
    myQuery: PropTypes.object,
    myQueries: PropTypes.array,
    setMyQueries: PropTypes.func
};

export default MyQuery;
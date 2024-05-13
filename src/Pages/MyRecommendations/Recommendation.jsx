
import axios from 'axios';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { Tilt } from 'react-tilt';
import Swal from 'sweetalert2';


const Recommendation = ({ comment, myRecommendations, setMyRecommendation }) => {
    const { recommendationTitle,
        recommendedProductName,
        recommendedProductImage,
        recommendationReason,
        recommendationName,
        dateTimes,
        authorName,
        authorImage,
        _id } = comment;

    // ______________handle Delete______________
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/recommendation/${_id}`, { withCredentials: true })
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500
                            })
                            const remainingRecommendation = myRecommendations.filter(req => req._id !== _id)
                            setMyRecommendation(remainingRecommendation);
                        }
                    })
            }
        });

    }






    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={recommendedProductImage} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{recommendedProductName}</div>
                        <div className="text-sm opacity-50">{recommendationTitle}</div>
                    </div>
                </div>
            </td>
            <td>
                {dateTimes}
                <br />
                <div className="badge badge-ghost badge-sm">{recommendationReason}</div>
            </td>
            <td> From: {recommendationName}
                <br />
                <div className="badge badge-ghost badge-sm">To: {authorName}</div></td>
            <div className="avatar cursor-pointer">
                <div className="mask mask-squircle w-12 h-12">
                    <img title={authorName} src={authorImage} alt="" />
                </div>
            </div>
            <th>
                <Tilt><button style={{ transition: 'all 1s' }} onClick={() => handleDelete(_id)} className='btn bg-gray-600 text-white hover:bg-amber-500'><MdDelete /> Delete</button></Tilt>
            </th>
        </tr>
    );
};

Recommendation.propTypes = {
    comment: PropTypes.object,
    myRecommendations: PropTypes.array,
    setMyRecommendation: PropTypes.func
};

export default Recommendation;
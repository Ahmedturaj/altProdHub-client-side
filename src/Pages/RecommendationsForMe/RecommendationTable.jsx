
import PropTypes from 'prop-types';

const RecommendationTable = ({ comment }) => {
    const { recommendationTitle,
        recommendedProductName,
        recommendedProductImage,
        recommendationReason,
        recommendationName,
        dateTimes,
        authorName,
        authorImage,
         } = comment;
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
        </tr>
    );
};

RecommendationTable.propTypes = {
    comment: PropTypes.object
};

export default RecommendationTable;
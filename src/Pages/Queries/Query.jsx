import PropTypes from 'prop-types';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Query = ({ query }) => {
    const {
        productName,
        productBrand,
        productImage,
        QueryTitle,
        detail,
        dateTime,
        authorName,
        authorImage,
        _id
    } = query;

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
        <section>
           
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={productImage} alt="Product" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {productName}
                            <div className="badge text-white bg-[hsl(112,43%,55%)]">{productBrand}</div>
                        </h2>
                        <div className="badge badge-outline">{formattedDateTime}</div>
                        <h2 className='font-bold'>{QueryTitle}</h2>
                        <p>{detail}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <FaComment />
                                <p>0</p>
                            </div>
                            <div>
                               <Link to={`/queryDetails/${_id}`}> <button className='btn text-white bg-[hsl(112,43%,55%)]'>Recommended</button></Link>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <img src={authorImage} alt="Author Thumbnail" className="w-8 h-8 rounded-full" />
                            <p className="text-sm ml-2">{authorName}</p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

Query.propTypes = {
    query:PropTypes.node
};

export default Query;

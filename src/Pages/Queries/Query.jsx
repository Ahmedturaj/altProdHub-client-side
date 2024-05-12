import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CountUp from 'react-CountUp';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'react-scroll-trigger';
const Query = ({ query }) => {
    const [comments, setComments] = useState([]);
    const [counterOn, setCounterOn] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:5000/recommendation/${_id}`)
            .then(comment => {
                setComments(comment.data);
            })
    }, [comments]);


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
           
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img src={productImage} alt="Product" className='h-96 object-cover' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {productName}
                            <div className="badge text-white bg-[hsl(112,43%,55%)]">{productBrand}</div>
                        </h2>
                        <div className="badge badge-outline">{formattedDateTime}</div>
                        <h2 className='font-bold'>{QueryTitle}</h2>
                        <p>{`${detail.substring(0, 100)}.....`}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <FaComment />
                                <p>
                                <ScrollTrigger
                                    onEnter={() => setCounterOn(true)}
                                    onExit={() => setCounterOn(false)}
                                >
                                    {counterOn && (
                                        <CountUp
                                            start={0}
                                            end={comments?.length}
                                            duration={2}
                                            delay={0}
                                        />
                                    )}
                                </ScrollTrigger>
                                </p>
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
    query:PropTypes.object
};

export default Query;

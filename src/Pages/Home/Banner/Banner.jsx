import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.png'
import './styles.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';

const Banner = () => {
    useEffect(() => {
        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');
        const slider = document.querySelector('.slider');
        const sliderList = slider.querySelector('.list');
        const thumbnail = document.querySelector('.slider .thumbnail');
        const thumbnailItems = thumbnail.querySelectorAll('.item');

        thumbnail.appendChild(thumbnailItems[0]);

        // Function for next button 
        nextBtn.onclick = function () {
            moveSlider('next');
        }

        // Function for prev button 
        prevBtn.onclick = function () {
            moveSlider('prev');
        }

        function moveSlider(direction) {
            const sliderItems = sliderList.querySelectorAll('.item');
            const thumbnailItems = document.querySelectorAll('.thumbnail .item');

            if (direction === 'next') {
                sliderList.appendChild(sliderItems[0]);
                thumbnail.appendChild(thumbnailItems[0]);
                slider.classList.add('next');
            } else {
                sliderList.prepend(sliderItems[sliderItems.length - 1]);
                thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
                slider.classList.add('prev');
            }

            slider.addEventListener('animationend', function () {
                if (direction === 'next') {
                    slider.classList.remove('next');
                } else {
                    slider.classList.remove('prev');
                }
            }, { once: true });
        }
    }, []); 

    return (
        <div className="mt-10 container mx-auto">
            <div className="slider">


                <div className="list">

                    <div className="item">
                        <img src={img1} alt="" className='w-full'/>

                        <div className="content">
                            <div className="title text-xl lg:text-5xl  font-extrabold">Discover Alternatives </div>
                            <div className="type font-extrabold text-xl lg:text-4xl my-6"> with AltProdHub!</div>
                            <Tilt><div style={{transition:'all 1s'}} className="btn  mb-5 bg-[hsl(112,43%,55%)] md:mt-5 mt-0 text-white hover:bg-[hsl(52,68%,49%)]">
                                <Link to={'/allQueries'}><button className=''>Explore Queries</button></Link>
                            </div></Tilt>
                        </div>
                    </div>

                    <div className="item">
                        <img src={img2} alt="" className='w-full'/>

                        <div className="content">
                            <div className="title text-xl lg:text-5xl  font-extrabold">Unlock Better Solutions: </div>
                            <div className="type font-extrabold text-xl lg:text-4xl my-6">Explore</div>
                            <Tilt><div style={{transition:'all 1s'}} className="btn mb-5 hover:bg-[hsl(52,68%,49%)] bg-[hsl(112,43%,55%)] mt-5 text-white">
                            <Link to={'/allQueries'}><button className=''>Explore Queries</button></Link>
                            </div></Tilt>
                        </div>
                    </div>

                    <div className="item">
                        <img src={img3} alt="" />

                        <div className="content">
                            <div className="title text-xl lg:text-5xl  font-extrabold"> Explore Alternative  </div>
                            <div className="type font-extrabold text-xl lg:text-4xl my-6">Products with Confidence!</div>
                            <Tilt><div style={{transition:'all 1s'}} className="btn mb-5 bg-[hsl(112,43%,55%)] mt-1 md:mt-5 text-white hover:bg-[hsl(52,68%,49%)]">
                            <Link to={'/allQueries'}><button className=''>Explore Queries</button></Link>
                            </div></Tilt>
                        </div>
                    </div>

                    <div className="item">
                        <img src={img4} alt="" />

                        <div className="content">
                            <div className="title text-xl lg:text-5xl  font-extrabold">Join the Conversation </div>
                            <div  className="type font-extrabold text-xl lg:text-4xl my-6"> Unleash Your Product Wisdom!</div>
                           <Tilt><div style={{transition:'all 1s'}} className="btn mb-5 bg-[hsl(112,43%,55%)] lg:mt-5 text-white hover:bg-[hsl(52,68%,49%)]">
                            <Link to={'/allQueries'}><button  className=''>Explore Queries</button></Link>
                            </div></Tilt>
                        </div>
                    </div>

                </div>


                <div className="thumbnail">

                    <div className="item">
                        <img src={img1} alt="" />
                    </div>
                    <div className="item">
                        <img src={img2} alt="" />
                    </div>
                    <div className="item">
                        <img src={img3} alt="" />
                    </div>
                    <div className="item">
                        <img src={img4} alt="" />
                    </div>

                </div>


                <div className="nextPrevArrows mt-5">
                    <button className="prev btn text-xl md:text-2xl  text-center"> <FaAngleRight /> </button>
                    <button className="next btn text-xl md:text-2xl text-center"> <FaAngleLeft /> </button>
                </div>


            </div>
        </div>
    );
};

export default Banner;
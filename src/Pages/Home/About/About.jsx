
import { Tilt } from 'react-tilt';
import homePoster from '../../../assets/Humaaans - 3 Characters (1).png'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold lg:text-4xl">Give your opinion on any <br /> Product / <span className="text-green-600">Concept</span></h1>

                        <p className="mt-3">When you offer your opinion on a product or concept, you are providing valuable insights and perspectives that can influence decisions of others and shape the discourse surrounding that topic. Your opinion serves as a reflection of your personal experiences, preferences, and expertise, contributing to a diverse range of viewpoints within the community</p>

                        <Link  to={'/allQueries'}><button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-lg lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-green-500"><Tilt> Explore Concept </Tilt></button></Link>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"><Tilt> 
                    <img className="w-full h-full lg:max-w-3xl" src={homePoster} alt="Catalogue-pana.svg" /></Tilt>
                </div>
            </div>
        </div>
    );
};

export default About;
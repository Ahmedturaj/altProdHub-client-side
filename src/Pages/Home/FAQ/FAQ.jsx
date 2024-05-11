import { Tilt } from 'react-tilt';
import FAQPoster from '../../../assets/FAQ_IMG.png'
const FAQ = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 w-11/12 mx-auto'>
            <div className="w-6/12">
                <Tilt><img src={FAQPoster} alt="" className='rounded-3xl w-full'/></Tilt>
            </div>
            {/* FAQ part */}
            <div className="w-6/12">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    What is an Alternative Product Information System?
                    </div>
                    <div className="collapse-content">
                        <p>An Alternative Product Information System is a comprehensive online platform designed to provide users with information about alternative products and sustainable production methods. It serves as a centralized hub where individuals can discover eco-friendly alternatives to conventional products, learn about their environmental impact, and explore sustainable production practices.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    How does the Alternative Product Information System work?
                    </div>
                    <div className="collapse-content">
                        <p>The Alternative Product Information System aggregates data from various sources, including product manufacturers, sustainability certifications, and user-contributed content. Users can search for specific products or browse categories to find alternatives that align with their values and preferences. The system provides detailed product information, such as materials used, manufacturing processes, carbon footprint, and social impact, allowing users to make informed purchasing decisions</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    What are the benefits of using the Alternative Product Information System?
                    </div>
                    <div className="collapse-content">
                        <p> By utilizing the Alternative Product Information System, users gain access to a wealth of knowledge about sustainable products and production methods. They can reduce their environmental footprint by choosing products that are eco-friendly and ethically produced. Additionally, the system empowers users to support companies that prioritize sustainability and transparency, fostering a more environmentally conscious consumer culture.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
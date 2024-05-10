
import { useLoaderData } from 'react-router-dom';
import PageBanner from '../../Components/PageBanner/PageBanner';

const QueryDetail = () => {
    const queryDetails = useLoaderData();
    const {
        productName,
        productBrand,
        productImage,
        QueryTitle,
        detail,
        dateTime,
        authorName,
        authorImage
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

            <div className="container px-6 py-16 mx-auto text-center">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-semibold lg:text-4xl">Hello there! Ready to dive into a recommendation that might just become your new favorite?</h1>

                    <p className="mt-6">
                    Absolutely! I have got a recommendation for a gripping mystery novel that will keep you on the edge of your seat until the very last page. With intricate plot twists and compelling characters, it is a must-read for any fan of the genre.
                    </p>

                  {/* form */}
                </div>
                </div>
        </section>
    );
};


export default QueryDetail;
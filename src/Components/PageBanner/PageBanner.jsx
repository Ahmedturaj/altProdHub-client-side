
import PropTypes from 'prop-types';
import pageBanner from '../../assets/endless-constellation.svg'
const PageBanner = ({ pageTitle }) => {
    return (
        <div>
            <img src={pageBanner} alt="" className='relative object-cover w-full h-72' />
            <p className='absolute z-30 top-32 ml-3 text-3xl md:text-5xl text-white'>{pageTitle}</p>
        </div>
    );
};

PageBanner.propTypes = {
    pageTitle: PropTypes.string
};

export default PageBanner;


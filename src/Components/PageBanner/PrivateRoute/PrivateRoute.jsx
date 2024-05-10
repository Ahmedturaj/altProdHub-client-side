import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import loadingPhoto from '../../../assets/waiting-7579_512.gif'

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex items-center justify-center my-32">
            <img src={loadingPhoto} alt="" />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/logIn"></Navigate>;
};
PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;
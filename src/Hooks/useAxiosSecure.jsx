import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_URL}`,
    withCredentials: true,
});

function useAxiosSecure() {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(
            (res) => {
                return res;
            },
            (error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    logOut()
                        .then(() => {
                            navigate("/login");
                        })
                        .catch((error) => console.error(error));
                }
            }
        );
    }, [logOut, navigate]);

    return axiosSecure;
}

export default useAxiosSecure;
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillProduct } from 'react-icons/ai';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { signUp, setUser } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password.length < 6) {
            Swal.fire({
                icon: "warning",
                text: 'You have to put 6 character In Your Password',
            });
            return;
        } else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "warning",
                text: 'You have to use at least one Uppercase character In Your Password',
            });
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "warning",
                text: 'You have to use at least one lowercase character In Your Password',
            });
            return;
        }

        else if (!/[0-9]/.test(password)) {
            Swal.fire({
                icon: "warning",
                text: 'You have to use at least one numeric character In Your Password',
            });
            return;
        }
        else if (password !== confirmPassword) {
            Swal.fire({
                icon: "warning",
                text: 'Please confirm right password',
            });
            return;
        }
        signUp(name, photo, email, password)
            .then((result) => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })

                setUser(result.user)

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have Signed up successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')

                e.target.reset();
            })
            .catch(error => {
                const errorMessage = error.message
                    .split("/")[1]
                    .replace(/\)\./g, "")
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorMessage}`,
                });
            })

    }

    return (
        <section className="mt-24">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form onSubmit={handleSignUp} className="w-full max-w-md">
                    <div className="flex justify-center mx-auto">
                        <AiFillProduct className="text-[hsl(112,43%,55%)] w-auto h-7 text-2xl sm:h-8" />
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <a href="#" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400">
                            sign up
                        </a>
                    </div>

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>

                        <input type="text" className="block w-full py-3 text-gray-700  border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" name='name' />
                    </div>

                    <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center  border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>

                        <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                        <input id="dropzone-file" type="url" className="" name='photo' />
                    </label>

                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input type="email" className="block w-full py-3 text-gray-700  border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" name='email' />
                    </div>

                    <div className="relative flex items-center mt-4">
                    <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input type={showPassword ? "text" : "password"}  className="block w-full px-10 py-3 text-gray-700  border rounded-lg  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" name='password' />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-8 mr-5 cursor-pointer  w-8 md:w-11 ml-1 top-4 left-[300px] md:left-[400px] text-gray-500">{showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}</span>
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input type={showConfirmPassword ? "text" : "password"} className="block w-full px-10 py-3  border rounded-lg  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" name='confirmPassword' />

                        <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute bottom-8 mr-5 cursor-pointer  w-8 md:w-11 ml-1 top-4 left-[300px] md:left-[400px] text-gray-500">{showConfirmPassword ? <FaEyeSlash /> : <FaEye></FaEye>}</span>
                    </div>

                    <div className="mt-6">
                        <input type="submit" value="Sign Up" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[hsl(112,43%,55%)] rounded-lg hover:bg-[hsl(112,32%,42%)] focus:outline-none focus:ring focus:ring-[hsl(112,32%,42%)] focus:ring-opacity-50" />

                        <div className="mt-6 text-center ">
                            <Link to={'/logIn'} className="text-sm text-[hsl(112,43%,55%)] hover:underline">
                                Already have an account?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
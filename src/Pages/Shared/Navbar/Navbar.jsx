
import { Link, NavLink } from "react-router-dom";
import './nav.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { AiFillProduct } from "react-icons/ai";

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [isChecked, setIsChecked] = useState(theme === "dark");
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);
    const handleTheme = (e) => {
        const newTheme = e.target.checked ? "dark" : "light";
        setTheme(newTheme);
        setIsChecked(e.target.checked);
    }
    const navLink = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] mr-2  border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-xl text-lime-500'}>Home</NavLink></li>
        <li><NavLink to={'/allQueries'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] mr-2  border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-xl text-lime-500'}>Queries</NavLink></li>
        {loading ? <span className="loading loading-dots loading-md"></span> : user && <li><NavLink to={'/reCommendForMe'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] mr-2 border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-xl text-lime-500'}>Recommendations
            For Me</NavLink></li>}
        {loading ? <span className="loading loading-dots loading-md"></span> : user && <li><NavLink to={'/myQueries'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] mr-2   border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-xl text-lime-500'}>MyQueries</NavLink></li>}
        {loading ? <span className="loading loading-dots loading-md"></span> : user && <li><NavLink to={'/myRecommend'} className={({ isActive }) => isActive ? 'text-[hsl(112,43%,55%)] mr-2   border border-[hsl(112,43%,55%)] font-bold  p-2 rounded-md text-xl' : 'text-xl text-lime-500'}>My recommendations</NavLink></li>}


    </>
    return (
        <section className="navbar bg-base-content bg-opacity-5 absolute z-10 container">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(112,43%,55%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-300 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/'} className="btn relative -left-7 md:left-7 btn-ghost text-xs md:text-2xl gap-0 font_Jersey  text-gray-400"><AiFillProduct className="text-[hsl(112,43%,55%)]" />
                    <span className="text-[hsl(112,43%,55%)]">A</span>lt<span className="text-[hsl(112,43%,55%)]">P</span>rod<span className="text-[hsl(112,43%,55%)]">Hub</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="cursor-pointer w-0 grid place-items-center mr-12 md:mr-12 lg:mr-12">
                    <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" checked={isChecked} />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {loading ? <progress className="progress w-40 md:w-56 bg-[hsl(112,43%,55%)]"></progress> : <div className="flex items-center">
                    {
                        user &&
                        <div tabIndex={0} role="button" className="btn btn-ghost w-8 md:w-12 lg:w-14 btn-circle avatar mr-5">
                            <div className="w-10 rounded-full">
                                <img alt={`picture of ${user.displayName}`} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Y36ZBDD/blank-avatar-photo-place-holder-600nw-1095249842.jpg'} title={user.displayName} />
                            </div>
                        </div>
                    }
                    {
                        user ? <>
                            <button onClick={logOut} className="p-1 cursor-pointer rounded md:btn lg:btn text-[#f2f2f2f2] md:text-[#f2f2f2f2] lg:text-[#f2f2f2f2] text-base md:text-xl bg-[hsl(112,43%,55%)] md:bg-[hsl(112,43%,55%)] lg:bg-[hsl(112,43%,55%)] hover:bg-[hsl(112,43%,55%)]">LogOut</button>
                        </> :
                            <>
                                <Link to={'/logIn'}>  <button className="p-1 cursor-pointer rounded md:btn lg:btn text-[#f2f2f2f2] md:text-[#f2f2f2f2] lg:text-[#f2f2f2f2] text-xs mr-2 ml-2 md:text-xl bg-[hsl(112,43%,55%)] md:bg-[hsl(112,43%,55%)] lg:bg-[hsl(112,43%,55%)] hover:bg-[hsl(112,43%,55%)]">SignIn</button></Link>
                            </>
                    }
                </div>}
            </div>
        </section>
    );
};

export default Navbar;
import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <section className="flex flex-col h-screen bg-base-200 bg-fixed">
        <nav className="md:mb-12 lg:mb-14 lg:pb-6">
            <Navbar></Navbar>
        </nav>
        <main className="flex-1 bg-base-200 bg-fixed">
            <Outlet />
        </main>
        <footer className="bg-base-200 bg-fixed">
            Footer
        </footer>
    </section>
    );
};

export default Main;
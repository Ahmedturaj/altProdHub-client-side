import About from "../About/About";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import RecentQueries from "../RecentQueries/RecentQueries";
import TopUsers from "../TopUsers/TopUsers";

const Home = () => {
    return (
        <section>
         <div className="banner relative md:-top-14 lg:-top-20">
            <Banner></Banner>
         </div>
         <div className="p-4">
            <RecentQueries></RecentQueries>
         </div>
         <div className="mt-14 p-4">
            <About></About>
         </div>
         <div className="p-4">
            <TopUsers></TopUsers>
         </div>
         <div className="p-4 mt-24">
            <FAQ></FAQ>
         </div>
        </section>
    );
};

export default Home;
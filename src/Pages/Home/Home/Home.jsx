import Banner from "../Banner/Banner";
import RecentQueries from "../RecentQueries/RecentQueries";

const Home = () => {
    return (
        <section>
         <div className="banner relative md:-top-14 lg:-top-20">
            <Banner></Banner>
         </div>
         <div className="bg-slate-200 p-4">
            <RecentQueries></RecentQueries>
         </div>
        </section>
    );
};

export default Home;
import axios from "axios";
import { useEffect, useState } from "react";
import RecentQuery from "./RecentQuery";

const RecentQueries = () => {
    const [recentQueries, setRecentQueries] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/queries')
            .then(data => {
                setRecentQueries(data.data)
            })
    }, [])
    const recentSortQueries = recentQueries.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    return (
        <div className="w-11/12 mx-auto">
           <div className="border-l-2 border-b-2 pl-1 pb-1 border-blue-400 w-72 rounded-md">  <h2 className="text-center  border-l-2 border-b-2 border-blue-400 w-72 rounded-md mt-14 text-3xl font-bold text-green-500">Recent Queries</h2></div>
           <p className="my-5 text-base-200">Discover the latest insights on Queries in our newest blog post! Dive into  trends queries, tips, and expert analysis to stay ahead of the curve. Explore how Queries is shaping industries and unlocking new possibilities. Do not miss out on this must-read article</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{
                recentSortQueries.slice(0, 6).map(recent=><RecentQuery key={recent._id} recent={recent}></RecentQuery>)
            }</div>
        </div>
    );
};

export default RecentQueries;
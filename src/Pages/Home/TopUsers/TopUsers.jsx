import axios from "axios";
import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";

const TopUsers = () => {
    const [topContributors, setTopContributors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                setTopContributors(response.data);
            })
            .catch(error => {
                console.error("Error fetching top contributors:", error);
            });
    }, []);

    return (
        <div className="mt-24 w-11/12 mx-auto">
            <div className="my-14 text-center w-full">
                <h2 className="text-3xl text-center font-bold underline border-b-2 border-green-400 w-80">Ous Top Contributors</h2>
                <p className="my-5">At AltProdHub, our top contributors represent the backbone of our community, embodying the spirit of collaboration and shared knowledge. These individuals have distinguished themselves through their consistent dedication and valuable contributions to the platform. Whether it is meticulously crafting comprehensive product listings, providing insightful reviews and ratings, or actively participating in discussions and forums, our top contributors play a pivotal role in shaping the AltProdHub experience for all users</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    topContributors.map(topContributor => <div key={topContributor._id} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${topContributor.photo})` }}></div>

                       <Tilt> <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{topContributor.name}</h3>

                            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                <span className="font-bold text-gray-800 dark:text-gray-200">&</span>
                                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700  focus:bg-gray-700  focus:outline-none">{topContributor.email}</button>
                            </div>
                        </div></Tilt>
                    </div>)

                }
            </div>
        </div>
    );
};

export default TopUsers;

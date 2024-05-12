import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Recommendation from "./Recommendation";

const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const [myRecommendations, setMyRecommendation] = useState([]);
    useEffect(() => {
        const fetchMyRecommendations = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/myRecommendation/${user?.email}`);
                setMyRecommendation(response.data);
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };

        fetchMyRecommendations();
    }, [user]);
    return (
        <div>
            <div className="relative -top-20 w-full">
                <PageBanner pageTitle={`My ReCommendations: ${myRecommendations?.length}`}></PageBanner>
            </div>
            <div className="lg:ml-10">

        <div className="overflow-x-scroll md:overflow-x-hidden">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Query Name</th>
                <th>Recommendation</th>
                <th>Information</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                myRecommendations.map(comment => <Recommendation key={comment._id} comment={comment} myRecommendations={myRecommendations} setMyRecommendation={setMyRecommendation}></Recommendation>)
              }

            </tbody>
          </table>
        </div>

      </div>
        </div>
    );
};

export default MyRecommendations;
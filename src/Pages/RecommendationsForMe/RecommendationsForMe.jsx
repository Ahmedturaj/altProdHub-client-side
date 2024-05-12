import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import PageBanner from "../../Components/PageBanner/PageBanner";
import RecommendationTable from "./RecommendationTable";

const RecommendationsForMe = () => {
    const { user } = useContext(AuthContext);
    const [recommendationForMe, setRecommendationForMe] = useState([]);
    useEffect(() => {
        const fetchMyRecommendations = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/recommendationForMe/${user?.email}`);
                setRecommendationForMe(response.data);
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };

        fetchMyRecommendations();
    }, [user]);
    return (
        <div>
          <div className="relative -top-20 w-full">
                <PageBanner pageTitle={`ReCommendations for me : ${recommendationForMe?.length}`}></PageBanner>
            </div>
            {/* table */}
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
                recommendationForMe.map(comment => <RecommendationTable key={comment._id} comment={comment} recommendationForMe={recommendationForMe} ></RecommendationTable>)
              }

            </tbody>
          </table>
        </div>

      </div>
        </div>
    );
};

export default RecommendationsForMe;
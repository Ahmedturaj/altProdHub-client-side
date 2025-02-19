import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Query from "./Query";
import PageTitle from "../../Components/PageTitle/PageTitle";

const Queries = () => {
  const loadedData = useLoaderData();
  const [layoutOption, setLayoutOption] = useState("lg:grid-cols-3");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleGridLayout = () => {
    setShowDropdown(!showDropdown);
  };

  const changeLayout = (layout) => {
    setLayoutOption(layout);
    setShowDropdown(false);
  };

  // Sort loadedData in descending order by dateTime
  const sortedData = loadedData.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

  // Filter queries based on product name matching searchText
  const filteredData = sortedData.filter(query =>
    query.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section>
      <PageTitle title={'All Queries'}></PageTitle>
      <div className="relative -top-20 w-full">
        <PageBanner pageTitle={'All Queries'}></PageBanner>
      </div>

      <div className="flex justify-center my-6">
        <div className="relative">
          <button
            className=" px-4 py-2 rounded-md bg-white border border-[hsl(112,43%,55%)] text-[hsl(112,43%,55%)]"
            onClick={toggleGridLayout}
          >
            Layout
          </button>
          {showDropdown && (
            <div className="absolute z-50 top-10 right-0 bg-white shadow-md rounded-md">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                onClick={() => changeLayout("grid-cols-1")}
              >
               single
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                onClick={() => changeLayout("grid-cols-2")}
              >
                Double
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                onClick={() => changeLayout("grid-cols-3")}
              >
                Triple
              </button>
            </div>
          )}
        </div>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search by product name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="ml-4 px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className={`w-11/12 mx-auto gap-10 grid ${layoutOption}`}>
        {filteredData.map((query) => (
          <Query key={query._id} query={query}></Query>
        ))}
      </div>
    </section>
  );
};

export default Queries;

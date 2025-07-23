import { useLocation } from "react-router-dom";
import GetShops from "../components/getShops";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const city = query.get("city");
  const type = query.get("type");

  return (
    <div>
      {/* <h2>Search Results</h2>
      <p>
        Showing results for <strong>{type || "All Types"}</strong> in{" "}
        <strong>{city || "All Cities"}</strong>
      </p> */}
      <GetShops cafetype={type} city={city} />
      {/* Here you can call your API with city/type or filter a list */}
    </div>
  );
}

export default SearchResults;

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
      <GetShops cafetype={type} city={city} />
    </div>
  );
}

export default SearchResults;

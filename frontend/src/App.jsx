import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import GetShops from "./components/getShops";
import Boba from "./pages/Boba";
import Coffee from "./pages/Coffee";
import Juice from "./pages/Juice";
import CustomSearch from "./pages/CustomSearch";
import SearchResults from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetShops />} />
        <Route path="/coffee" element={<Coffee />}></Route>
        <Route path="/boba" element={<Boba />}></Route>
        <Route path="/juice" element={<Juice />}></Route>
        <Route path="/search" element={<CustomSearch />}></Route>
        <Route path="/search-results" element={<SearchResults />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

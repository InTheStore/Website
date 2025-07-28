import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Shops from "./pages/Shops";
import GetShops from "./components/getShops";
import Boba from "./pages/Boba";
import Coffee from "./pages/Coffee";
import Juice from "./pages/Juice";
import CustomSearch from "./pages/CustomSearch";
import SearchResults from "./pages/Results";

// function Logout() {
//   localStorage.clear();
//   return <Navigate to="/login" />;
// }

// function RegisterAndLogout() {
//   localStorage.clear();
//   return <Register />;
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetShops />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} /> */}
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

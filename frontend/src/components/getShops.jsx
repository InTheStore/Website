import { useState, useEffect } from "react";
import api from "../api";
import NavBar from "./navbar";
import ShopGrid from "./ShopGrid";
import LoadingIndicator from "./LoadingIndicator";
import "../styles/Shops.css";

function GetShops(props) {
  const [shops, setShops] = useState(null);
  const [loading, setLoading] = useState(true);
  const city = props.city;
  const cafetype = props.cafetype;
  useEffect(() => {
    getShops();
  }, []);

  const getShops = () => {
    if (city && cafetype) {
      api
        .get("/api/drinks/?sort=name&type=" + cafetype + "&city=" + city)
        .then((res) => res.data)
        .then((data) => {
          setShops(data);
          setLoading(false); // ✅ done loading
        })
        .catch((err) => {
          alert(err);
          setLoading(false); // ✅ still stop loading even if failed
        });
    } else if (city) {
      api
        .get("/api/drinks/?sort=name&city=" + city)
        .then((res) => res.data)
        .then((data) => {
          setShops(data);
          setLoading(false); // ✅ done loading
        })
        .catch((err) => {
          alert(err);
          setLoading(false); // ✅ still stop loading even if failed
        });
    } else if (cafetype) {
      api
        .get("/api/drinks/?sort=name&type=" + cafetype)
        .then((res) => res.data)
        .then((data) => {
          setShops(data);
          setLoading(false); // ✅ done loading
        })
        .catch((err) => {
          alert(err);
          setLoading(false); // ✅ still stop loading even if failed
        });
    } else {
      api
        .get("/api/drinks/?sort=name")
        .then((res) => res.data)
        .then((data) => {
          setShops(data);
          setLoading(false); // ✅ done loading
        })
        .catch((err) => {
          alert(err);
          setLoading(false); // ✅ still stop loading even if failed
        });
    }
  };
  console.log(shops);
  return (
    <div className="Shops">
      <NavBar />
      <div>{loading ? <LoadingIndicator /> : <ShopGrid shops={shops} />}</div>
    </div>
  );
}

export default GetShops;

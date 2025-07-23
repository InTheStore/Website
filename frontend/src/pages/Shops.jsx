import ShopGrid from "../components/ShopGrid";
import NavBar from "../components/navbar";

function Shops() {
  return (
    <div>
      <NavBar />
      <div class="container shops d-flex flex-wrap justify-content-start">
        <ShopGrid />
      </div>
    </div>
  );
}

export default Shops;

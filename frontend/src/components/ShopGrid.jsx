import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "../styles/ShopGrid.css";

function ShopGrid(props) {
  // const shops = props;
  // console.log(props);
  return (
    <div className="p-3 d-flex flex-wrap justify-content-center gap-5">
      {props.shops.map(
        ({
          id,
          name,
          cafetype,
          Location: { address, city, state, zipcode },
        }) => (
          <Card
            key={id}
            style={{
              width: "18rem",
              backgroundColor: "#DBDBDB",
              color: "#333",
              fontFamily: "Caveat",
            }}
            className="m-5 shopCards"
          >
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {cafetype}
              </Card.Subtitle>
              <Card.Text>{address}</Card.Text>
              <Card.Text>
                {city}, {state} {zipcode}
              </Card.Text>
              {/* <Button variant="primary">View Details</Button> */}
            </Card.Body>
          </Card>
        )
      )}
    </div>
  );
}

export default ShopGrid;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
// import "../styles/ShopGrid.css";

function MapButton({ url, children }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "8px 16px",
        backgroundColor: "#007bff",
        color: "white",
        textDecoration: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
}

// Usage example:

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
          maps_url,
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
              <MapButton url={maps_url}>Open Maps</MapButton>
            </Card.Body>
          </Card>
        )
      )}
    </div>
  );
}

export default ShopGrid;

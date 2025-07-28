import NavBar from "../components/navbar";
import Selector from "../components/selector";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CustomSearch() {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundColor: "#706D54",
          minHeight: "100vh",
          padding: "60px 0",
        }}
      >
        <Container className="d-flex justify-content-center mt-5">
          <Form style={{ width: "500px", backgroundColor: "#DBDBDB" }}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">All</option>
                <option value="coffee">Coffee</option>
                <option value="boba">Boba</option>
                <option value="juice">Juice</option>
              </Form.Select>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              onClick={() =>
                navigate(`/search-results?city=${city}&type=${type}`)
              }
            >
              Search
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default CustomSearch;

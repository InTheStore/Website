import Form from "react-bootstrap/Form";

function Selector() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Select One</option>
      <option value="1">All</option>
      <option value="2">Coffee</option>
      <option value="3">Boba</option>
      <option value="4">Juice</option>
    </Form.Select>
  );
}

export default Selector;

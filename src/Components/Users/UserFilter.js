
import React from "react";
import { Form } from "react-bootstrap";
const UserFilter = (props) => {
  return (
    <Form.Group>
      {/* TODO: Filter control will be here which will send filter output back to
      parent compentn. */}
      <Form.Control
        placeholder="Filter by name or email"
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Group>
  );
};

export default UserFilter;
import React from "react";
import { Form, FormControl, Row } from "react-bootstrap";
import NewTaskBtn from "./NewTaskBtn";

export default function SearchBar({ setAddNew, setQ }) {
  return (
    <Row as="div" xs={1} md={3} className="d-flex pt-4 pb-2">
      <h4 className="mr-auto">Tasks</h4>
      <Form>
        <FormControl
          type="search"
          onChange={(e) =>
            setQ(e.target.value)
          }
          placeholder="Search by task name"
          aria-label="Search"
        />
      </Form>

      <NewTaskBtn setAddNew={setAddNew} />
    </Row>
  );
}

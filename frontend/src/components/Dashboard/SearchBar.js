import React from "react";
import { Form, FormControl, Row } from "react-bootstrap";
import NewTaskBtn from "./NewTaskBtn";

export default function SearchBar ({setAddNew, user, userTasks, setUserTasks}) {
  return (
    <div className="d-flex pt-4">
      <h4 className="mr-auto">Tasks</h4>
        <Form className="pr-2">
          <FormControl type="search" placeholder="Search by task name" aria-label="Search" />
        </Form>

        <NewTaskBtn className="" setAddNew={setAddNew} />
    </div>
  );
};


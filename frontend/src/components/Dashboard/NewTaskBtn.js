import React from "react";
import { Button } from "react-bootstrap";

export default function NewTaskBtn ({setAddNew}) {
  return (
    <Button onClick={() => setAddNew(true)} className="rounded">
      + New Task
    </Button>
  );
};


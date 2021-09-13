import React from "react";
import { Card } from "react-bootstrap";
import NewTaskBtn from "./NewTaskBtn";

export default function EmptyDash ({setAddNew, user, userTasks, setUserTasks}){
  return (
    <div className="w-100 h-100 grid">
      <Card className="">
        <Card.Body className="text-center">
          <h1>You have no task.</h1>
          <NewTaskBtn setAddNew={setAddNew} />
        </Card.Body>
      </Card>
    </div>
  );
};


import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function  AddTaskForm ({addNew, setAddNew, user, userTasks, setUserTasks}) {
  //   const [show, setShow] = useState(true);
  const [task, setTask] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    let allTasks = userTasks ?? [];
    console.log(
      "🚀 ~ file: Dashboard.js ~ line 85 ~ submit ~ userTasks",
      userTasks
    );
    // userTasks.push(task)
    setUserTasks([...allTasks, task]);
    localStorage.setItem(
      "tasks-" + user.id + user.name,
      JSON.stringify([...allTasks, task])
    );
    setAddNew(false);
  };

  return (
    <>
      <Modal
        show={addNew}
        onHide={() => setAddNew(false)}
        // backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>+ New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex flex-column">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="name"
                placeholder="Task Name"
                onChange={(e) =>
                  setTask({ 
                      id: Math.ceil(Math.random()*1000000),
                      name: e.target.value, 
                      isDone: false ,
                      createdAt: new Date()
                    })
                }
              />
            </Form.Group>
            <Button
              className="rounded"
              variant="primary"
              type="submit"
              onClick={submit}
            >
              + New Task
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};


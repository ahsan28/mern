import { Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function  TaskForm ({addNew, setAddNew, user, userTasks, setUserTasks, id, setId}) {
  const [task, setTask] = useState(null);
  // console.log("🚀 ~ id", id)
  // console.log("🚀 ~ userTasks.find(x=>x.id===id)", userTasks.find(x=>x.id===id))
  // console.log("🚀 ~ task", task)

  useEffect(() => {
    if(id) setTask(userTasks.find(x=>x.id===id))
    else console.log("no id: ",id)
  }, []);

  const submit = (e) => {
    e.preventDefault();
    let allTasks = userTasks ?? [];

    if(id){
      const oldTask = allTasks.find(x=>x.id===id);
      const indexId = allTasks.indexOf(oldTask);
      allTasks[indexId] = task
      setUserTasks(allTasks.filter(x=>x))
      localStorage.setItem(
        "tasks-" + user.id + user.name,
        JSON.stringify(allTasks.filter(x=>x))
      );
    } else {
      setUserTasks([...allTasks, task].filter(x=>x));
      localStorage.setItem(
        "tasks-" + user.id + user.name,
        JSON.stringify([...allTasks, task].filter(x=>x))
      );
    }
    setAddNew(false);
    setId("")
    setTask(null)
  };

  const onHide = () => {
    setAddNew(false);
    setId("")
    setTask(null)
  };

  return (
    <>
      <Modal
        show={addNew}
        onHide={onHide}
        // backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h4>+ New Task</h4>
          <Form className="d-flex flex-column">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Input
                type="name"
                placeholder="Task Name"
                value={task?.name||(userTasks.find(x=>x?.id===id))?.name}
                onChange={(e) =>
                  setTask({ 
                      id: id || Math.ceil(Math.random()*1000000),
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


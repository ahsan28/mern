import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [show, setShow] = useState(true);

  const [user, setUser] = useState(props.currentUser);

  console.log("🚀 ~ file: Login.js ~ line 10 ~ Login ~ user", user);
  const submit = (e) => {
    props.setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    let localTasks = "tasks-"+user.id+user.name
    let tasks = JSON.parse(localStorage.getItem(localTasks));
    console.log("🚀 ~ file: Login.js ~ line 18 ~ submit ~ tasks", tasks)
    if (tasks) props.setUserTasks(tasks)
    
    // e.preventDefault()
    // fetch('/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ user }),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then(res => res.json())
    //   .then(json => setUser(json.user))
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex flex-column">
            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Control
                type="id"
                placeholder="Id (only numbers)"
                // pattern="[0-9]*"
                onKeyPress={(e) => {
                console.log("🚀 ~ file: Login.js ~ line 46 ~ Login ~ e", e)
                    if (!/[0-9]/.test(e.key) || user?.id?.length>=3) {
                      e.preventDefault();
                    }
                  }}
                onChange={(e) => setUser({ ...user, id: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="name"
                placeholder="Name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </Form.Group>
            <Button
              className="rounded"
              variant="primary"
              type="submit"
              onClick={submit}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;

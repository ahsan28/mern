import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [show, setShow] = useState(true);


  const [user, setUser] = useState({
    id: "",
    name: "",
  });

  const submit = (e) => {
    props.setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
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
        onHide={()=>setShow(false)}
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
                placeholder="Id"
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

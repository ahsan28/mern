import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import UserApi from '../../api/user.api'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Login = (props) => {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState(null);

  const submit = (e) => {
    props.setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    let localTasks = "tasks-" + user.id + user.name;
    let tasks = JSON.parse(localStorage.getItem(localTasks));
    props.setUserTasks(tasks?.filter((x) => x) || []);
  };

  // return (
  //   <Modal
  //     show={show}
  //     onHide={() => setShow(false)}
  //     backdrop="static"
  //     keyboard={false}
  //   >
  //     <Modal.Body>
  //       <h4>Login</h4>
  //       <Form className="d-flex flex-column">
  //         <Form.Group className="mb-3" controlId="formBasicId">
  //           <Form.Control
  //             type="id"
  //             placeholder="Id (only numbers)"
  //             onKeyPress={(e) => {
  //               if (!/[0-9]/.test(e.key) || user?.id?.length >= 3) {
  //                 e.preventDefault();
  //               }
  //             }}
  //             onChange={(e) => setUser({ ...user, id: e.target.value })}
  //           />
  //         </Form.Group>

  //         <Form.Group className="mb-3" controlId="formBasicName">
  //           <Form.Control
  //             type="name"
  //             placeholder="Name"
  //             onChange={(e) => setUser({ ...user, name: e.target.value })}
  //           />
  //         </Form.Group>
  //         <Button
  //           className="rounded"
  //           variant="primary"
  //           type="submit"
  //           onClick={submit}
  //         >
  //           Login
  //         </Button>
  //       </Form>
  //     </Modal.Body>
  //   </Modal>
  // );
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setUser({...user, [e.target.id]:e.target.value})
    console.log("🚀 ~ file: Login.js ~ line 87 ~ handleChange ~ user", user)
  };
  
  const handleClose = (e) => {
    console.log("🚀 ~ file: Login.js ~ line 86 ~ handleChange ~ user", user)
    
    e.preventDefault()
    setOpen(false);
    UserApi.comboLogin(user).then(res=>{
      props.reloadUser()
    }).catch(err=>{
    })


  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="login"
      >
        <DialogContent>
          <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
            <Box sx={{ textAlign: 'center', m: 1 }}><h3>Login</h3></Box>
            <TextField
              autoFocus
              margin="dense"
              id="id"
              label="Id"
              type="id"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="email"
              fullWidth
              onChange={handleChange}
              variant="standard"
            />
            <Button className="rounded" variant="primary" onClick={handleClose}>
              Login
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;

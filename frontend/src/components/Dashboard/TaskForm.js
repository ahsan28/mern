import { Input } from "@material-ui/core";
import { Dialog, DialogContent, Box, TextField, Button, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import TaskApi from '../../api/task.api'
// import { Button, Form, Modal } from "react-bootstrap";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function  TaskForm ({addNew, setAddNew, user, userTasks, setUserTasks, id, setId}) {
  const [task, setTask] = useState(null);
  console.log("🚀 ~ file: TaskForm.js ~ line 13 ~ TaskForm ~ task", task)
  // console.log("🚀 ~ id", id)
  // console.log("🚀 ~ userTasks.find(x=>x.id===id)", userTasks.find(x=>x.id===id))
  // console.log("🚀 ~ task", task)

  useEffect(() => {
    console.log("no id: ",id)

    if (id){
      TaskApi.add(task).then(res=>{
        setTask(res.data)
      })
    } else {
      setTask(null)
    }
  }, [id]);

  const submit = (e) => {
    e.preventDefault();
    let allTasks = userTasks ?? [];
    if (id){
      TaskApi.update(task).then(res=>{
        console.log("task updated", res.data)
      })
    } else {
      TaskApi.add(task).then(res=>{
        console.log("task added", res.data)
      })
    }

    // if(id){
    //   const oldTask = allTasks.find(x=>x.id===id);
    //   const indexId = allTasks.indexOf(oldTask);
    //   allTasks[indexId] = task
    //   setUserTasks(allTasks.filter(x=>x))
    //   localStorage.setItem(
    //     "tasks-" + user.id + user.name,
    //     JSON.stringify(allTasks.filter(x=>x))
    //   );
    // } else {
    //   setUserTasks([...allTasks, task].filter(x=>x));
    //   localStorage.setItem(
    //     "tasks-" + user.id + user.name,
    //     JSON.stringify([...allTasks, task].filter(x=>x))
    //   );
    // }
    // setAddNew(false);
    // setId("")
    // setTask(null)
  };

  const onHide = () => {
    setAddNew(false);
    setId("")
    setTask(null)
  };

  const [open, setOpen] = useState(false);


  const handleChange = (e) => {
    setTask({...task, [e.target.id]:e.target.value})
  };
  

return (
  <Dialog
        open={addNew}
        TransitionComponent={Transition}
        keepMounted
        onClose={onHide}
        aria-describedby="login"
      >
        <DialogContent>
          <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
            <Box sx={{ textAlign: 'center', m: 1 }}><h3>+ New Task</h3></Box>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Task Name"
              type="name"
              fullWidth
              required
              onChange={handleChange}
              variant="standard"
            />
            <Button className="rounded" variant="primary" onClick={submit}>
              + New Task
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
)
  // return (
  //   <>
  //     <Modal
  //       show={addNew}
  //       onHide={onHide}
  //       // backdrop="static"
  //       keyboard={false}
  //     >
  //       <Modal.Body>
  //         <h4>+ New Task</h4>
  //         <Form className="d-flex flex-column">
  //           <Form.Group className="mb-3" controlId="formBasicName">
  //             <Input
  //               type="name"
  //               placeholder="Task Name"
  //               value={task?.name||(userTasks?.find(x=>x?.id===id))?.name}
  //               onChange={(e) =>
  //                 setTask({ 
  //                     id: id || Math.ceil(Math.random()*1000000),
  //                     name: e.target.value, 
  //                     isDone: false ,
  //                     createdAt: new Date()
  //                   })
  //               }
  //             />
  //           </Form.Group>
  //           <Button
  //             className="rounded"
  //             variant="primary"
  //             type="submit"
  //             onClick={submit}
  //           >
  //             + New Task
  //           </Button>
  //         </Form>
  //       </Modal.Body>
  //     </Modal>
  //   </>
  // );
};


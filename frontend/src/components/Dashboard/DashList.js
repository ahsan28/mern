import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: "1rem",
  }
}));

export default function DashList({ user, userTasks, setUserTasks, q, setId, setAddNew }) {
  const classes = useStyles();
  const [checked, setChecked] = useState(userTasks.filter((x) => x?.isDone));


  const handleToggle2 = (value) => () => {
    value.isDone = !value?.isDone;

    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    const allTasks = [...userTasks]

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    localStorage.setItem("tasks-" + user.id + user.name, JSON.stringify(userTasks));
    setUserTasks(allTasks.filter(x=>x));
    setChecked(newChecked);
  };

  const taskList = userTasks.filter(x=>(q? x.name.includes(q):true)).map((value, index) => {
    const labelId = `checkbox-list-label-${value?.id}`;

    return (
      <ListItem key={value?.id} className="p-2">
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={value?.isDone}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onClick={handleToggle2(value)}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={value?.isDone ? <del>{value?.name}</del> : value?.name}
        />
        {/* <li><h5>{value?.isDone ? <del>{value?.name}</del> : value?.name}</h5></li> */}
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <MdEdit
              onClick={() => {
                setAddNew(true)
                setId(value?.id)
              }
              }
            />
          </IconButton>
          <IconButton edge="end" aria-label="comments">
            <MdDelete
              onClick={() =>
                setUserTasks((p) => {
                  let val = Object.assign([], p);
                  val = val.filter((x) => x.id !== value?.id);
                  return val;
                })
              }
            />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  })

  return (
    <Card className="p-2">
      <List className={classes.root+" p-0 m-0"}>
        {taskList}
      </List>
    </Card>
  );
}

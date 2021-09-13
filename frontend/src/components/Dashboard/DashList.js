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
import { MdDelete } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: "1rem",
  },
}));

export default function DashList({ user, userTasks, setUserTasks }) {
  const classes = useStyles();
  const [checked, setChecked] = useState(userTasks.filter((x) => x.isDone));

  useEffect(() => {
    console.log("🚀 ~ file: DashList.js ~ line 44 ~ useEffect ~ userTasks", userTasks);
    //   localStorage.setItem(
    //     "tasks-" + user.id + user.name,
    //     JSON.stringify(tasks)
    //   );
    //   setUserTasks(tasks)
    //   for (var key in localStorage){
    //     console.log("-- "+ key)
    //  }

    //   let user = JSON.parse(localStorage.getItem("currentUser"))
    //   console.log("🚀 ~ file: App.js ~ line 17 ~ useEffect ~ user", user)
    //   if (user) {
    //     setCurrentUser(user)
    //     let localTasks = "tasks-"+user.id+user.name
    //     let tasks = JSON.parse(localStorage.getItem(localTasks))
    //     console.log("🚀 ~ file: App.js ~ line 29 ~ useEffect ~ tasks", tasks)
    //     if (tasks) setUserTasks(tasks)
    //   }
    //   for (var key in localStorage){
    //     console.log("-- "+ key)
    //  }

    // localStorage.setItem(
    //   "tasks-" + user.id + user.name,
    //   JSON.stringify(val)
    // );
  }, [checked]);

  const handleToggle2 = (value) => () => {
    console.log("🚀 ~ file: DashList.js ~ line 58 ~ handleToggle2 ~ value", value)
    value.isDone = !value.isDone;

    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    const allTasks = [...userTasks]

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    localStorage.setItem("tasks-" + user.id + user.name, JSON.stringify(userTasks));
    setUserTasks(allTasks);
    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {userTasks.map((value, index) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem key={value.id} className="rounded">
            <ListItemIcon>
              <Checkbox
                edge="start"
                // checked={checked.indexOf(value) !== -1}
                checked={value.isDone}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
                onClick={handleToggle2(value)}
                // onClick={(e)=>{
                //   console.log("🚀 ~ file: DashList.js ~ line 95 ~ {tasks.map ~ e", e)
                //   e.preventDefault();
                //   setTasks((p) => {
                //     console.log("🚀 ~ file: DashList.js ~ line 85 ~ setTasks ~ p", p)
                //     let val = Object.assign([], p);
                //     val[index].isDone = !val[index].isDone;
                //     console.log("🚀 ~ file: DashList.js ~ line 88 ~ setTasks ~ val[index].isDone", val[index].isDone)
                //     console.log("🚀 ~ file: DashList.js ~ line 88 ~ setTasks ~ val", val)
                //     return val;
                //   })
                // }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={value.isDone ? <del>{value.name}</del> : value.name}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <MdDelete
                  onClick={() =>
                    setUserTasks((p) => {
                      let val = Object.assign([], p);
                      val = val.filter((x) => x.id !== value.id);
                      return val;
                    })
                  }
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

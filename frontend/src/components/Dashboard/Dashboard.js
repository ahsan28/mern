import React, { useEffect, useState } from "react";

import TaskForm from "./TaskForm";
import EmptyDash from "./EmptyDash";
import DashList from "./DashList";
import SearchBar from "./SearchBar";
import Dash3 from "./Dash3";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

import AuthApi from "../../api/auth.api";

const Dashboard = ({ user, userTasks, setUserTasks, reloadUser }) => {
  const [addNew, setAddNew] = useState(false);
  const [id, setId] = useState("");
  const [q, setQ] = useState("");

  const logout = () => {
    AuthApi.logout();
    reloadUser();
  };

  useEffect(() => {
    console.log("🚀 ~ file: Dashboard.js ~ line 11 ~ Dashboard ~ user", user);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              src="../../../public/propic.jpg"
            > */}
            <Avatar
              alt={user?.name || "Your Name"}
              src="../../../public/propic.jpg"
            />
            {/* </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user?.name || "Your Name"}
            </Typography>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box className="dashboard">
        <Container>
          {userTasks?.length > 0 ? (
            <>
              <Dash3
                user={user}
                userTasks={userTasks}
                setUserTasks={setUserTasks}
              />
              <SearchBar setQ={setQ} setAddNew={setAddNew} />
              <DashList
                q={q}
                user={user}
                setId={setId}
                setAddNew={setAddNew}
                userTasks={userTasks}
                setUserTasks={setUserTasks}
              />
            </>
          ) : (
            <EmptyDash
              user={user}
              setAddNew={setAddNew}
              userTasks={userTasks}
              setUserTasks={setUserTasks}
            />
          )}
        </Container>
      </Box>
      <TaskForm
        id={id}
        user={user}
        setId={setId}
        addNew={addNew}
        setAddNew={setAddNew}
        userTasks={userTasks}
        setUserTasks={setUserTasks}
      />
    </Box>
  );
};

export default Dashboard;

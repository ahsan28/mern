import "./App.css";
import "./mdb.min.css";
// import './bootstrap2.min.css';
// import './bootstrap.min.css';
// import Dashboard from './components/Dashboard/Dashboard';
// import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

// import DashboardAPI from './actions/posts'
import DashboardService from "./api/dashboard.api";
import UserService from "./api/user.api";
import { useEffect, useState } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import memories from "./images/pic.png";
// import Dashboards from './components/Dashboard/Dashboard';
import Form from "./components/Form/Form";

const App = () => {
  // const dispatch = useDispatch()

  const [currentUser, setCurrentUser] = useState(null);
  const [userTasks, setUserTasks] = useState(null);

  useEffect(() => {
    UserService.getUsers().then((res) => {
      console.log(res.data);
      console.log("connected to user backend  !");
    });
    DashboardService.getDashboards().then((res) => {
      console.log(res.data);
      console.log("connected to dash backend!");
    });
    // dispatch(DashboardService.getDashboards())
    // localStorage.clear()
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
      let localTasks = "tasks-" + user.id + user.name;
      let tasks = JSON.parse(localStorage.getItem(localTasks));
      if (tasks) setUserTasks(tasks);
    }
    for (var key in localStorage) {
      console.log("-- " + key);
    }
  }, []);

  // return (
  //   <Container maxidth='lg'>
  //     <AppBar position='static' color='inherit'>
  //       <Typography variant='h2' align='center'>
  //         Memories
  //       </Typography>
  //       <img src={memories} alt="memories" height="60"/>
  //     </AppBar>
  //     <Grow in>
  //       <Container>
  //         <Grid container justify='space-between' alignItems='stretch' spacing={3}>
  //           <Grid item xs={12} sm={7}>
  //             {/* <Dashboards /> */}
  //           </Grid>
  //           <Grid item xs={12} sm={4}>
  //             <Form />
  //           </Grid>
  //         </Grid>
  //       </Container>
  //     </Grow>
  //   </Container>
  // )

  // return (
  //   <BrowserRouter>
  //     {!currentUser?
  //       <Login
  //       currentUser={currentUser}
  //       setCurrentUser={setCurrentUser}
  //       setUserTasks={setUserTasks}
  //     />
  //     :
  //     <>
  //       <Header
  //         currentUser={currentUser}
  //         setCurrentUser={setCurrentUser}
  //       />
  //       <Switch>
  //         <Route exact path="/dashboard" component={Dashboard} />
  //       </Switch>
  //       {/* <Dashboard
  //               user={currentUser}
  //               userTasks={userTasks}
  //               setUserTasks={setUserTasks}
  //             /> */}
  //     </>
  //     }
  //   </BrowserRouter>
  // )

  return (
    <Container maxidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      {/* <BrowserRouter> */}
        <Login
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setUserTasks={setUserTasks}
        />
      {/* </BrowserRouter> */}
    </Container>
  );
};

export default App;

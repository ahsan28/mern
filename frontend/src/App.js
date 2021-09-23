import "./App.css";
// import Dashboard from './components/Dashboard/Dashboard';
// import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

import TaskApi from "./api/task.api";
import AuthApi from "./api/auth.api";
import { useEffect, useState } from "react";

import Dashboards from './components/Dashboard/Dashboard';
import { Container } from "@mui/material";
import { Box } from "@mui/system";

const App = () => {
  // const dispatch = useDispatch()

  const [currentUser, setCurrentUser] = useState(null);
  console.log("🚀 ~ file: App.js ~ line 27 ~ App ~ currentUser", currentUser)
  const [userTasks, setUserTasks] = useState(null);
  const reloadUser = () => {
    const user = AuthApi.getCurrentUser();
    setCurrentUser(user);
  };
  
  useEffect(() => {
    let currentUser = AuthApi.getCurrentUser();
    if (currentUser) {
      setCurrentUser(currentUser);
      // let localTasks = "tasks-" + user.id + user.name;
      // let tasks = JSON.parse(localStorage.getItem(localTasks));
      // if (tasks) setUserTasks(tasks);
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
    <Box
      sx={{
        bgcolor: '#f4f4f6',
        overflow: 'hidden',
        height: '100vh'
      }}
    >
      {currentUser?
      <Dashboards
        user={currentUser}
        userTasks={userTasks}
        setUserTasks={setUserTasks}
        reloadUser={reloadUser}
      />
       :
      <Login
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        reloadUser={reloadUser}
      />
        }

    </Box>
  );
};

export default App;

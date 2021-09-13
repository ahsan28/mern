import './App.css';
import './mdb.min.css';
// import './bootstrap2.min.css';
// import './bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userTasks, setUserTasks] = useState(null);
  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ currentUser", currentUser)
  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ userTasks", userTasks)

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("currentUser"))
    console.log("🚀 ~ file: App.js ~ line 17 ~ useEffect ~ user", user)
    if (user) {
      setCurrentUser(user)
      let localTasks = "tasks-"+user.id+user.name
      let tasks = JSON.parse(localStorage.getItem(localTasks))
      console.log("🚀 ~ file: App.js ~ line 29 ~ useEffect ~ tasks", tasks)
      if (tasks) setUserTasks(tasks)
    }
    for (var key in localStorage){
      console.log("-- "+ key)
   }
  }, []);
  
  return (
    <BrowserRouter>
      {!currentUser?
        <Login 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setUserTasks={setUserTasks}
      />
      : 
      <>
        <Header 
          currentUser={currentUser} 
          setCurrentUser={setCurrentUser}
        />
        <Dashboard 
                user={currentUser}
                userTasks={userTasks} 
                setUserTasks={setUserTasks}
              />
      </>
      }
    </BrowserRouter>
  )
};





export default App;

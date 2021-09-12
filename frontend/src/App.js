import './App.css';
import './bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';

const App = () => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("currentUser"))??false
    setCurrentUser(user)
  }, []);
  
  return (
    <BrowserRouter>
      {!currentUser?
        <Login setCurrentUser={setCurrentUser} />
      : 
      <>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <main>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/tasks' component={Dashboard} />
  
        </main>
      </>
      }
    </BrowserRouter>
  )
};





export default App;

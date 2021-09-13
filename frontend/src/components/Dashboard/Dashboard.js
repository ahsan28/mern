import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import AddTaskForm from "./AddTaskForm";
import EmptyDash from "./EmptyDash";
import DashList from "./DashList";
import SearchBar from "./SearchBar";
import Dash3 from "./Dash3";

const Dashboard = ({user, userTasks, setUserTasks}) => {
  const [addNew, setAddNew] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="dashboard">
      {userTasks?.length > 0 ? (
        <Container>
          <Dash3
            user={user}
            userTasks={userTasks}
            setUserTasks={setUserTasks}
          />
          <SearchBar
            setAddNew={setAddNew}
            user={user}
            userTasks={userTasks}
            setUserTasks={setUserTasks}
          />
          <DashList
            user={user}
            userTasks={userTasks}
            setUserTasks={setUserTasks}
          />
        </Container>
      ) : (
        <EmptyDash
          setAddNew={setAddNew}
          user={user}
          userTasks={userTasks}
          setUserTasks={setUserTasks}
        />
      )}
      <AddTaskForm
        addNew={addNew}
        setAddNew={setAddNew}
        user={user}
        userTasks={userTasks}
        setUserTasks={setUserTasks}
      />
    </div>
  );
};

export default Dashboard;

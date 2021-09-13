import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import TaskForm from "./TaskForm";
import EmptyDash from "./EmptyDash";
import DashList from "./DashList";
import SearchBar from "./SearchBar";
import Dash3 from "./Dash3";

const Dashboard = ({user, userTasks, setUserTasks}) => {
  const [addNew, setAddNew] = useState(false);
  const [id, setId] = useState("");
  const [q, setQ] = useState("");

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
            setQ={setQ}
            setAddNew={setAddNew}
          />
          <DashList
            q={q}
            user={user}
            setId={setId}
            setAddNew={setAddNew}
            userTasks={userTasks}
            setUserTasks={setUserTasks}
          />
        </Container>
      ) : (
        <EmptyDash
        user={user}
          setAddNew={setAddNew}
          userTasks={userTasks}
          setUserTasks={setUserTasks}
        />
      )}
      <TaskForm
        id={id}
        user={user}
        setId={setId}
        addNew={addNew}
        setAddNew={setAddNew}
        userTasks={userTasks}
        setUserTasks={setUserTasks}
      />
    </div>
  );
};

export default Dashboard;

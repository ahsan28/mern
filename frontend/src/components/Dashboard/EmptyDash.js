import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NewTaskBtn from "./NewTaskBtn";

export default function EmptyDash({
  setAddNew,
  user,
  userTasks,
  setUserTasks,
}) {
  return (
    <Box className="center-inside">
      <Paper >
        <Box sx={{ textAlign: "center", m: 1 }}>
          <h3>You have no task.</h3>
        </Box>
        <NewTaskBtn setAddNew={setAddNew} />
      </Paper>
    </Box>
  );

  // return (
  //   <div className="w-100 h-100 grid">
  //     <Card className="">
  //       <Card.Body className="text-center">
  //         <h3 style={{marginBottom:"1rem"}}>You have no task.</h3>
  //         <NewTaskBtn setAddNew={setAddNew} />
  //       </Card.Body>
  //     </Card>
  //   </div>
  // );
}

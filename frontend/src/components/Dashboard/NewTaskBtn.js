import { Button } from "@mui/material";
import React from "react";

export default function NewTaskBtn ({setAddNew}) {
  return (
    <Button fullWidth color="primary" onClick={() => setAddNew(true)} className="rounded">
      + New Task
    </Button>
  );
};


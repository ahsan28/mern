import React from "react";
import { Card, Row } from "react-bootstrap";
import CanvasJSReact from './../../../src/canvasjs.react'

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Dash3 ({user, userTasks, setUserTasks}) {
    const completed = userTasks.filter(x=>x.isDone).length
    const total = userTasks.length
    const options = {
        exportEnabled: false,
        animationEnabled: false,
        height: 120, //in pixels
        width: 400,
        backgroundColor: "transparent",
        data: [{
            type: "pie",
            startAngle: -90,
            showInLegend: false,
            // legendText: "{label}",
            indexLabelFontSize: 11,
            indexLabel: "{label}",
            dataPoints:[
                { y: completed, label: "Completed Tasks" },
                { y: total-completed },
            ]
        }]
    }
  return (
    <Row xs={1} md={3} className="pt-4 pb-3 flex-container space-between">
      <Card className="">
        <Card.Body>
          <Card.Title>Task Completed</Card.Title>
          <h1 className="text-primary" style={{ float: "left" }}>
            {userTasks.filter(x=>x.isDone).length}
          </h1>
          <span className="pt-3">/{userTasks?.length ?? 0}</span>
        </Card.Body>
      </Card>
      
      <Card className="">
        <Card.Body>
          <Card.Title>Latest Created Tasks</Card.Title>
          <ul>
            {userTasks.sort((a,b)=>(new Date(b.createdAt) - new Date(a.createdAt))).slice(0, 3).map((x) => (
              <li>{x.isDone? <del>{x.name}</del>:x.name}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <Card className=" p-1">
        <CanvasJSChart options = {options} />
      </Card>
    </Row>
  );
};

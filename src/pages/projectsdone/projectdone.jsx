import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./projectdone.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Projects Done:</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
           
                    <Card.Body>          
                    <ul className="text-left">
                        <li>Responsive Hotel Website using Html, CSS, JS</li>
                        <li>A real Time Digital Clock using HTML,CSS,JS 
                        <li>Cricket Website using React Js</li>
                        <li>To do list using HTML,CSS,JS </li>
                        <li>Responsive website using React Js</li>
                        <li>To-Do List using ReactJs</li>
                        <li>Digital Clock using React Js</li>
                        <li>Clone of Google Keep using React Js</li>
                        <li>LinkedIn Clone using React Js</li>
                        <li>Snapchat Clone using React Js</li>
                        <li>Covid-19 Tracker using ReactJs & Material UI</li>
                        <li>Netﬂix Clone using React Js</li>
</li>
                      

                    </ul>
                    
        
            </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./about.style.css";
import Profile from "../../assets/img/profile/karthik.jpg";
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";



const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Karthik Iyer</strong>
                                <br />A passionate programmer , born and brought up in India. I have done my Course in Full Stack Web Developement with Html, CSS, JS , React.js, Express.js, Node.js, and MongoDB as my tech stack.
                <br />
                In 2021, I have successfully completed my Engineering with specialization in 'Electronics".
                <br />
                I have done Various Project ,as you can see my in resume and some of the most interesting project I have done are LinkedIn clone, Covid-19 Tracker and Netflix clone.
                <br />
                And I have changed my path to IT field because I like coding, and interested in making Web applications, and the best part is I love finding the error and solving it by myself.
                <br /> I love to learn new technologies,and work on my skillset.
                <br /> <br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1yz5R9aBbD9QTgVgEl0AIcCMJOMLhmqYW/view" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/KarthikIyer97" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/karthik-iyer-36a59120a/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                      </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default About;

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {ProjectCard } from './ProjectCard';
// import projImg1 from "../assets/img/chatapp.png";
// import projImg2 from "../assets/img/quiz.png";
// import projImg3 from "../assets/img/music1.png";
// import projImg4 from "../assets/img/ide.jpeg";
// import projImg5 from "../assets/img/disscusify.png";
import projImg1 from "../assets/img/img/pragyaa_logo.png";
// import projImg5 from "../assets/img/disscusify.png";
// import projImg5 from "../assets/img/disscusify.png";
// import projImg5 from "../assets/img/disscusify.png";


import colorSharp2 from "../assets/img/heroImage.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Comming Soon ",
      // github:"https://github.com/SayaliZambre/chat-app",
      // description: "https://github.com/SayaliZambre/chat-app  A sleek and intuitive chat app that facilitates seamless communication with friends and colleagues. Enjoy real-time for a personalized chatting experience",
      imgUrl: projImg1,
    },
    {
      title: "Comming Soon ",
      // github:"https://github.com/SayaliZambre/chat-app",
      // description: "https://github.com/SayaliZambre/chat-app  A sleek and intuitive chat app that facilitates seamless communication with friends and colleagues. Enjoy real-time for a personalized chatting experience",
      imgUrl: projImg1,
    },
    {
      title: "Comming Soon ",
      // github:"https://github.com/SayaliZambre/chat-app",
      // description: "https://github.com/SayaliZambre/chat-app  A sleek and intuitive chat app that facilitates seamless communication with friends and colleagues. Enjoy real-time for a personalized chatting experience",
      imgUrl: projImg1,
    },
    {
      title: "Comming Soon ",
      // github:"https://github.com/SayaliZambre/chat-app",
      // description: "https://github.com/SayaliZambre/chat-app  A sleek and intuitive chat app that facilitates seamless communication with friends and colleagues. Enjoy real-time for a personalized chatting experience",
      imgUrl: projImg1,
    },
    {
      title: "Comming Soon ",
      // github:"https://github.com/SayaliZambre/chat-app",
      // description: "https://github.com/SayaliZambre/chat-app  A sleek and intuitive chat app that facilitates seamless communication with friends and colleagues. Enjoy real-time for a personalized chatting experience",
      imgUrl: projImg1,
    },
   
    {
      title: "Comming Soon ",
      // github:"https://github.com/SayaliZambre/chat-app",
      // description: "https://github.com/SayaliZambre/chat-app  A sleek and intuitive chat app that facilitates seamless communication with friends and colleagues. Enjoy real-time for a personalized chatting experience",
      imgUrl: projImg1,
    },
  
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Events</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
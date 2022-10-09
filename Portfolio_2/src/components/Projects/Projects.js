import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Zomato from "../../../src/Assets/zomato.png";
import Netflix from "../../../src/Assets/netflix.png";
import Career from "../../../src/Assets/career_selector.png";
import Tech from "../../../src/Assets/tech_ahead.png";
import Parya from "../../../src/Assets/Paryavarn.jpeg";
import Krypt from "../../../src/Assets/krypt.png";
import Event from "../../Assets/Event.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Event}
              isBlog={false}
              title="Event-x3"
              description="A event scheduler dApp on which you can schedule an event, RSVP an event, except attendees need to deposit ETH to RSVP and will get it back upon checking in at the event. In this project I have used React, Solidity, Web3, Truffle, Ganache, Metamask, IPFS, and Infura."
              ghLink="https://github.com/chirag0002/Event-X3"
              // demoLink="polygon-buidl-it-gdg9ntl.spheron.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Krypt}
              isBlog={false}
              title="Krypt"
              description="A DApp to transfer MATIC from one account to another, and store them as a post. In this every transaction is stored as a meme post containing details about time, date and an message for sending it to another user. I have used React.js, Solidity, Web3, Hardhat, IPFS, Polygon and Metamask for this project."
              ghLink="https://github.com/chirag0002/Polygon_Buidl_It"
              demoLink="polygon-buidl-it-gdg9ntl.spheron.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Parya}
              isBlog={false}
              title="Paryavarn"
              description="Deforestation is one of the most severe and common problems nowadays. For this, Paryavarn is a fully fledge solution as our team “Super contributors” comes with an amazing idea with calculating tree cover and detecting the live location of user’s contains detailed information about that particular place tree cover so that we came to know that the places which are not well occupied with trees."
              ghLink="https://github.com/chirag0002/Paryavarn"
              demoLink="paryavarn-yyxbur.spheron.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tech}
              isBlog={false}
              title="Tech-Ahead"
              description="It is a platform at which users can access the data and imformation so they can travell/explore through different trending technologies for their understanding. This website is made by using JavaScript, React.js and CSS3."
              ghLink="https://github.com/SuperAayush/TECH-AHEAD"
              demoLink="tech-ahead.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Career}
              isBlog={false}
              title="Career Selector"
              description="It is a platform at which all users/students can access the dataand information so they can decide the career of their choice for their betterment of future. This website is made by using JavaScript, React.js and CSS3."
              ghLink="https://github.com/chirag0002/career_selector"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Clone"
              description="It is a Clone Website of Netflix Website. This is our first project on which we have tried to implement our learning. This Netflix Clone is made by using HTML5 & CSS3."
              ghLink="https://github.com/chirag0002/Netflix"
             demoLink="netflixxclonee.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zomato}
              isBlog={false}
              title="Zomato Clone"
              description="It is a Clone Website of Zomato Website. This is our first project on which we have tried to implement our learning. This Zomato Clone is made by using HTML5 & CSS3."
              ghLink="https://github.com/SuperAayush/Zomato-Clone"
              demoLink="superaayush.github.io/Zomato-Clone/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

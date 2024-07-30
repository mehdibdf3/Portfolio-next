"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Power Fitness"
              description="A web application for fitness enthusiasts to track workouts, diet plans, and progress. Built using HTML, CSS, and JavaScript."
              ghLink="https://github.com/mehdibdf3/Power_Fitness_Projet_Web2"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Gestion Hopital"
              description="A comprehensive hospital management system for managing patient records, appointments, and staff. Developed using C#, WPF, and SQLite."
              ghLink="https://github.com/mehdibdf3/Gestion-Hopital"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Inventaire Cannabis"
              description="An inventory management system for cannabis products to keep track of stock levels and product details. Implemented with C#, WPF, and SQLite."
              ghLink="https://github.com/mehdibdf3/Inventaire-Cannabis"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Calculatrice"
              description="A simple calculator application for basic arithmetic operations. Created using C#, WPF, and SQLite."
              ghLink="https://github.com/mehdibdf3/Calculatrice"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

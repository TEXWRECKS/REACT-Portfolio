import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Wrapper from '../Extras/Wrapper';

const Portfolio = () => {
    const myProjects = [
        {
            "imageSRC": "Assets/Images/Random Recipe Generator.JPG",
            "alt": "Random Recipe Generator",
            "title": "Random Recipe Generator",
            "about": "A user is tired of cooking the same old stuff, and decides to leave chance to fate.  In this website, they will be able to select the meal type (breakfast, lunch, dinner, snack, tea-time,) and be provided a random recipe, complete with calories, yield, ingredients, and health warnings",
            "functionality": "Displaying javascript/jquery functionality with the use of multiple APIs, and incorporating bootstrap alternative css (Materialize)",
            "deployedLink": "https://emgal-aguirre.github.io/Recipe-Generator/",
            "deployedLinkID": "random-recipe-browser",
            "gitHub": "https://github.com/emgal-aguirre/Recipe-Generator.git",
            "gitHubLinkID": "random-recipe-GitHub"
        },
        {
            "imageSRC": "Assets/Images/Listly.JPG",
            "alt": "Listly",
            "title": "Listly",
            "about": "A website which provides sticky note functionality for to-do's, projects, or lists, and can sort and track them by urgency.  Simply populate the fields to create a new to-do, and check it off once the to-do has been completed!",
            "functionality": "Using Javascript & Jquery, Sequelize and SQL, along with Node.js and rest APIs.",
            "deployedLink": "https://listly-app.herokuapp.com/",
            "deployedLinkID": "listly-browser",
            "gitHub": "https://github.com/TEXWRECKS/Listly",
            "gitHubLinkID": "listly-GitHub"
        },
        {
            "imageSRC": "Assets/Images/Work Day Scheduler.JPG",
            "alt": "Work Day Scheduler",
            "title": "Day Planner",
            "about": "A user will be presented a day calendar for the current work day, with an active date and time display.  They will be able to enter meetings, appointments, or to do's within the text area of the corresponding hour, and save, to have a functional day calendar.",
            "functionality": "Building a functional work day scheduler with Javascript, Jquery, and the use of APIs",
            "deployedLink": "https://texwrecks.github.io/05---Day-Planner/",
            "deployedLinkID": "day-planner-browser",
            "gitHub": "https://github.com/TEXWRECKS/05---Day-Planner.git",
            "gitHubLinkID": "day-planner-GitHub"
        },
        {
            "imageSRC": "Assets/Images/Responsive Portfolio.JPG",
            "alt": "Responsive Portfolio",
            "title": "Responsive Portfolio",
            "about": "A website where you will get to know the creator, connect on LinkedIn, see a sample portfolio page, and a sample contact page.",
            "functionality": "Building a responsive portfolio, including an About Me and a Contact page, using HTML, and Bootstrap CSS.",
            "deployedLink": "https://texwrecks.github.io/02---Responsive-Portfolio/",
            "deployedLinkID": "responsive-portfolio-browse",
            "gitHub": "https://github.com/TEXWRECKS/02---Responsive-Portfolio.git",
            "gitHubLinkID": "responsive-portfolio-GitHub"
        },
        {
            "imageSRC": "",
            "alt": "Stockify",
            "title": "Stockify",
            "about": "A user finds a product on Amazon which does not have desired price or availability, so they sign up for alerts on price and or availability change notifications to be emailed to them",
            "functionality": "MERN and including web-scrapping technology to review product pages for updates to price or availability",
            "deployedLink": "",
            "deployedLinkID": "",
            "gitHub": "",
            "gitHubLinkID": ""
        }
    ];

    const ProjectCard = (card, index) => {
        return (
            <Card className="bg-dark text-white" key={index}>
                <Card.Img src={card.imageSRC} alt={card.alt} />
                <Card.ImgOverlay>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.about}</Card.Text>
                    <Card.Text>{card.functionality}</Card.Text>
                    <Card.Text>{card.deployedLink}</Card.Text>
                    <Card.Text>{card.deployedLinkID} Open In Browser </Card.Text>
                    <Card.Text>{card.gitHub}</Card.Text>
                    <Card.Text>{card.gitHubLinkID} GitHub Project Page</Card.Text>
                </Card.ImgOverlay>
            </Card>
        );
    };

    return (
        <Wrapper>
            <h4 className="text-center header">Projects</h4>
            <p className="text-center">Please review a few of my projects below!</p>
            <div className="grid">{myProjects.map(ProjectCard)}</div>
        </Wrapper>
    );
};

export default Portfolio;
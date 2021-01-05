import React from "react";
import Projects from "../Utils/Projects.json";
import Projects from "../Extras/Projects";
import Card from "react-bootstrap/Card";
import Wrapper from '../Extras/Wrapper';

const Card = props => {
    return (
        <div class="col-lg-3 col-md-4 mb-1">
            <div class="card h-100">
                <img class="card-img-top" src={props.imageSRC} alt={props.alt}/>
                    <div class="card-body">
                        <h4 class="card-title">{props.title}</h4>
                        <p class="card-text">{props.about}</p>
                        <div class="card-text-2">{props.functionality}</div>
                    </div>
                    <div class="card-footer">
                        <a href={props.deployedLink} class="btn btn-primary" id={props.deployedLinkID}>Open In Browser</a>
                        <a href={props.gitHub} class="btn btn-primary2" id={props.gitHubLinkID}>GitHub Project Page</a>
                    </div>
                </div>
            </div>
    )
}

export default Card
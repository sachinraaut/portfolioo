import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render(){
        return(
            <div className="about-section">
                <Grid>
                    <Cell col={2}></Cell>
                    <Cell col={8}>
                        <h1>About Me</h1>
                        <p>Hi there, I am Sachin. I am a full time front end developer working since last more than 2 years in IT industry. As a frontend Web Developer, I have created many beautiful websites using web technologies like HTML, CSS, Bootstrap JavaScript, React. 
                        Converting wireframes, PSD, Sketch, etc into into highly scalable, clean code using web technologies.
                        Experienced in building pixel perfect and responsive web applications. </p>
                        <p>Common libraries of use: react-router, Redux, react MDL, react Bootstrap, redux- thunk. Common use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS</p>
                    </Cell>
                    <Cell col={2}></Cell>
                </Grid>
            </div>
        );
    }
}

export default About;
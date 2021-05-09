import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Website from './Website';

class Resume extends Component {
    render(){
        return(
            <div className="resume-body">
                <Grid className="resume-grid">
                    <Cell col={4} className="resume-left">
                        <img src={require('../images/sachin-raut2.jpeg')} className="profile-picture" alt="" />
                        <h2 className="name">Sachin Raut</h2>
                        <h4>Frontend Web Developer</h4>
                        <hr />
                        <p> Front end developer with 3+ years of experience. Extensive experience and passion for building interactive user experiences, problem solving, adept knowledge of new technologies will be put to maximum use for organisation growth. </p>
                        <hr />
                        <h5>Address</h5>
                        <p>Kothrud, Pune, India</p>
                        <h5>Phone</h5>
                        <p>+91 9730398143</p>
                        <h5>Email </h5>
                        <p>sachinr1013@gmail.com</p>
                        <h5>Website</h5>
                        <p>https://sachinraaut.github.io/portfolio</p>
                        <hr />
                    </Cell>
                    <Cell col={8} className="resume-right">
                        
                        {/* Experience Section */}

                        <h2 className="resume-headings">Experience</h2>
                        <Experience 
                            startYear={"Sept 2020"} 
                            endYear={"Till Date"}
                            jobRole = {"Frontend Developer"}
                            companyName = { "Livpure India Pvt. Ltd., Pune" }
                            jobDesc = { 
                                <ul>
                                    <li>Writing clean & pixel perfect code to meet client requirements into application designs & system requirements</li>
                                    <li>Creating reusable web components with the help of modern libraries like React by using functional and class components</li>
                                    <li>Implementing new features & functionalities on site using JavaScript, AJAX & liquid language</li>
                                    <li>Helped to achieve a responsive look of website across all devices by checking cross-browser compatibility</li>
                                    <li>Translation of the UI/UX design wireframes to actual code that will produce visual elements of the application</li>
                                    <li>Designing and implementing HTML email templates and newsletters for marketing campaigns</li>
                                </ul>
                            }
                            
                        />

                        <Experience 
                            startYear={"Jan 2018"} 
                            endYear={"Aug 2020"}
                            jobRole = {"Frontend Developer"}
                            companyName = { "ColabIT LLP, Pune" }
                            jobDesc = {
                                <ul> 
                                    <li> Implementing a mobile-first approach to existing websites</li>
                                    <li> Collaborating with designers to ensure designs were efficient and technically sound</li>
                                    <li> Creating modular, responsive templates using modern CSS techniques and JavaScript libraries </li>
                                    <li> Working directly with client stakeholders to develop technical solutions for business cases. </li>
                                </ul>
                            }
                        />

                        <hr />

                        {/* Skills Section */}

                        <h2 className="resume-headings">Skills</h2>

                        <Skills skill = {"HTML / CSS"} progress = {90} />
                        <Skills skill = {"Bootstrap / Materialize CSS"} progress = {80} />
                        <Skills skill = {"JavaScript / jQuery"} progress = {70} />
                        <Skills skill = {"React JS"} progress = {50} />
                        <Skills skill = {"Wordpress"} progress = {60} />

                        <hr />
                        
                        {/* Projects Section */}
                        
                        <h2 className="resume-headings">Projects</h2>

                        <Website 
                            projectName = {"En Dash Studio"}
                            projectUrl = {"https://endash.studio"}
                            aboutProject = {"En Dash Studio is a creative agency. They specialize in strategy and interaction design and provide a wide range of digital and creative services like brand building, marketing, photography and more."}                        
                            techNames = {"HTML, CSS, Javascript, jQuery, Wordpress"}
                        />

                        <Website 
                            projectName = {"6 Group"}
                            projectUrl = {"https://www.6-group.com"}
                            aboutProject = {"6 Group is an executive search, leadership development, strategic resourcing and organisational change service provider that helps medium to large scale businesses with transforming their businesses and reaching their goals."}                        
                            techNames = {"HTML, CSS, Javascript, jQuery, Wordpress"}
                        />

                        <hr />

                        {/* Education Section */}

                        <h2 className="resume-headings">Education</h2>
                        <Education 
                            startYear={2009}
                            endYear={"2010 (SSC)"} 
                            schoolName = { "S.S.G.M High School, Loha, Nanded" }
                            schoolDesc = {" Front End Web Developer using HTML, CSS, Bootstrap JavaScript, React with an emphasis on Frontend web development. Experienced in building pixel perfect and responsive web applications. Common libraries of use: Redux, react-router, redux- thunk. Common use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS "}
                        />
                        <Education 
                            startYear={2010} 
                            endYear={"2012 (HSC)"} 
                            schoolName = { "Yashwant College, Nanded" }
                        />
                        <Education 
                            startYear={2012} 
                            endYear={"2016 B.E (E&TC)"} 
                            schoolName = { "SVPM's College Of Engineering, Baramati" }
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;

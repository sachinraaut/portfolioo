import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h1>Sachin Raut</h1>
                        <img src={require('../images/sachin-raut2.jpeg')} className="profile-picture" alt="" />
                        <p>Front End Web Developer using HTML, CSS, Bootstrap JavaScript, React with an emphasis on Frontend web development. Experienced in building pixel perfect and responsive web applications. Common libraries of use: Redux, react-router, redux- thunk. Common use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS </p>
                    </Cell>
                    <Cell col={6}>
                        <h1>Contact Me</h1>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-phone-square" />
                                        +91 973 039 8143
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-envelope-square" />
                                        sachinr1013@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-skype" />
                                        +91 973 039 8143
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>                        
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
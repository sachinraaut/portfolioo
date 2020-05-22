import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component {
    render(){
        return(
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>

                    <img src={require('../images/sachin-raut2.jpeg')} className="profile-picture" alt="" />
                        
                        <div className="banner-text">
                            <h1>Front End Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | BOOTSTRAP | JAVASCRIPT | JQUERY | REACTJS | WORDPRESS</p>
                            <div className="social-links">
                                <a href="/" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="/" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                <a href="/" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                                <a href="/" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>                        
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landingpage;
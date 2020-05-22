import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Website extends Component {
    render(){
        return(
            <div className="website">
                <Grid>
                    <Cell col={12}>
                        <h5>Name: {this.props.projectName}</h5>
                        <a href={this.props.projectUrl} target="_blank">URL: {this.props.projectUrl}</a>
                        <p>{this.props.aboutProject}</p>
                        <p className="tech"> <span>Technology Used:</span> {this.props.techNames}</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Website;
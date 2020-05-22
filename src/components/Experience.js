import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render(){
        return(
            <div className="experience">
                <Grid>
                    <Cell col={3}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={9}>
                        <h4>{this.props.jobRole}</h4>
                        <h5>{this.props.companyName}</h5>
                        {this.props.jobDesc}
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Experience;
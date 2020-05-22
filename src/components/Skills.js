import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render(){
        return(
            <div className="skills">
                <Grid>
                    <Cell col={12}>
                        <div>{this.props.skill} <ProgressBar progress={this.props.progress} /></div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Skills;
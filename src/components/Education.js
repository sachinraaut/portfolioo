import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render(){
        return(
            <div className="education">
                <Grid>
                    <Cell col={3}>
                        <h4>{this.props.startYear} - {this.props.endYear}</h4>
                    </Cell>
                    <Cell col={9}>
                        <h4>{this.props.schoolName}</h4>
                        {/* <p>{this.props.schoolDesc}</p> */}
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Education;
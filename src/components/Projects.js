import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import Background from '../images/fresh_on_list.png';
import Background1 from '../images/portfolio_screenshot.png';
import Admsoft from '../images/admsoft.png';
import Invoice from '../images/invoice_gen.png';

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab : 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return (
                <div className="html-projects">
                    <Card shadow={5} style={{width: '400px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>Fresh Food</CardTitle>
                        <CardText>
                        Freshonlist provide the complete catering solution, a quality catering for all occasions in Pune city.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="http://freshonlist.com/" target="_blank">visit site</a></Button>
                        </CardActions>                        
                    </Card>
                    <Card shadow={5} style={{width: '400px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${Admsoft})`, backgroundSize: 'cover'}}>ADMsoft</CardTitle>
                        <CardText>
                            ADMsoft is a web development agency who creates beautiful web creatives. It also provides best software solutions across the globe.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://admsoft.in/" target="_blank"> visit site </a></Button>
                        </CardActions>                        
                    </Card>
                    <Card shadow={5} style={{width: '400px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${Invoice})`, backgroundSize: 'cover'}}>Invoice Generator</CardTitle>
                        <CardText>
                            Invoice generators is a tool created using HTML, CSS, javascript. It creates invoice for your items in PDF format.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://invoicegenerators.in/" target="_blank"> visit site </a></Button>
                        </CardActions>                        
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="html-projects">
                    <Card shadow={5} style={{width: '400px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${Background1})`, backgroundSize: 'cover'}}>Sachin Raut</CardTitle>
                        <CardText>
                            This is my own personal portfolio website designed using HTML, CSS, React JS and React-MDL.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://sachinraaut.github.io/portfolio"> visit site </a> </Button>
                        </CardActions>                        
                    </Card>
                    <Card shadow={5} style={{width: '400px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>visit site</Button>
                        </CardActions>                        
                    </Card>
                    <Card shadow={5} style={{width: '400px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>visit site</Button>
                        </CardActions>                        
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div className="html-projects">
                    <Card shadow={5} style={{width: '400px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>Fresh Food</CardTitle>
                        <CardText>
                            Freshonlist provide the complete catering solution, a quality catering for all occasions in Pune city.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="http://freshonlist.com/" target="_blank">visit site </a> </Button>
                        </CardActions>                        
                    </Card>
                    <Card shadow={5} style={{width: '400px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://endash.studio/" target="_blank"> visit site </a></Button>
                        </CardActions>                        
                    </Card>
                    <Card shadow={5} style={{width: '400px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://www.6-group.com/" target="_blank"> visit site </a></Button>
                        </CardActions>                        
                    </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId}) } ripple >
                    <Tab>HTML</Tab>
                    <Tab>REACT</Tab>
                    <Tab>WORDPRESS</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div> 
                        </Cell>
                    </Grid>                    
                </section>

            </div>
        )
    }
}

export default Projects;
import React from 'react';
import './App.css';
import Main from './components/Main';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

function App() {
  return (
    /* Uses a header that scrolls with the text, rather than staying locked at the top */
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontWeight: '600'}} to="/">Sachin Raut</Link>} >
                <Navigation>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontWeight: '600'}} to="/">Sachin Raut</Link>} >
                <Navigation>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;

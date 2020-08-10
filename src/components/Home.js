import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './style.css';
import { Card, Icon, Button, Container, Header } from 'semantic-ui-react'
const Home = () => (
    <Fragment>
        <Helmet>
            <title>Home || CS Quiz</title></Helmet>
        <Container fluid style={{textAlign:"center"}}>
            <Card centered fluid style={{padding:70,borderRadius:20}}>
                <Card.Content>
                <Header size='huge' style={{fontSize:40,fontFamily:'Sora'}}>CS Quiz!</Header>
                <Header.Subheader>
                    <h6 style={{fontFamily:'Sora'}}>Test your Computer Science knowledge!</h6>
                </Header.Subheader>
                </Card.Content>
                <Card.Content>
                <Link to="/play/instructions">
                <Button secondary style={{fontFamily:'Sora',borderRadius:7}}> <Icon name='book' />Instructions</Button>
                </Link>
                <Link to="/play/quiz">
                <Button secondary style={{marginTop:10,fontFamily:'Sora',borderRadius:7}}> <Icon name='play circle outline' />Start Quiz</Button>
                </Link>
                </Card.Content>
            </Card>
            </Container>
    </Fragment>
);

export default Home;
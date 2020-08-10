import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { List, Card, Container,Button,Icon, Header, Divider } from 'semantic-ui-react'
import isEmpty from '../../utils/is-empty';
import Message from './message'
import '../style.css';
const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions || CS Quiz</title></Helmet>
        <Container fluid style={{textAlign:"center"}}>
        <Card fluid style={{padding:40}}>
        <Header size='large' style={{fontFamily:'Sora'}}>Quiz Instructions</Header>
        <Card.Content>
        <List bulleted style={{fontSize:16}}>
            <List.Item style={{fontFamily:'Sora'}}>The game consists of 25 IT related questions.</List.Item>
            <List.Item style={{fontFamily:'Sora'}}>Each question has four options.</List.Item>
            <List.Item style={{fontFamily:'Sora'}}>Select the option which you think is right by clicking it.</List.Item>
            <List.Item style={{fontFamily:'Sora'}}>This Quiz is mainly to check your technical knowledge.</List.Item>
            <List.Item style={{fontFamily:'Sora'}}>You won't get any chocolates or trophies after completing the quiz, not even a certificate, but you'll learn a lot.</List.Item>
            <List.Item style={{fontFamily:'Sora'}}>Complete the quiz to get your results. </List.Item>
            <List.Item style={{fontFamily:'Sora'}}>Do you have what it takes? Let's find out, just click the play button!</List.Item>
        </List>
        </Card.Content>
        <Message/>
        <Card.Content>
        
        <Link to="/">
        <Button secondary style={{fontFamily:'Sora'}} > <Icon name='backward' />Go back</Button>
        </Link>
        <Link to="/play/quiz">
        <Button secondary style={{fontFamily:'Sora'}}> <Icon name='play circle outline' />Start Quiz</Button>
        </Link>
        </Card.Content>
       
        </Card>
        </Container>
         </Fragment>
);

export default QuizInstructions;
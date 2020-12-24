import './App.css';
import React from 'react';
import Navgation from './component/Navgation';
import Welcome from './component/Welcome'; 
import Footer from './component/Footer';
import Book from './component/Book';
import BookList from './component/BookList';
import { Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import logo from './logo.svg';

function App() {
  const marginTop = {
    marginTop: "20px"
  }
  return (
    <Router>
      <Navgation />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome}/>
              <Route path="/add" exact component={Book}/>
              <Route path="/edit/:id" exact component={Book}/>
              <Route path="/list" exact component={BookList}/>

            </Switch>
        </Col>
        </Row>
      </Container>
      <Footer/>
    </Router >
  );
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import CollectionPage from './pages/collectionPage';
import FormPage from './pages/formPage';
import HomePage from './pages/homePage';
import PageNotFound from './pages/notFoundPage'

export default class App extends Component {

    state = {
      data: [],
      id: 0
    };

  deleteItem(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);
        
        const before = data.slice(0, index);
        const after = data.slice(index + 1);

        const newArr = [...before, ...after];

        return {
            data: newArr
        }
    });
  }

  addItem(name, number) {
    
    this.setState({
      id: this.state.id + 1
    })

    const newItem = {
        names: name,
        phone: number,
        id: this.state.id
    };
    this.setState(({data}) => {
        const newArr = [newItem,...data];
        return {
            data: newArr
        }
    })
  }

  render() {
    return (
      <Router>
        <Header/>
        <Container>
          <div className="app">
            <Switch>
              <Route 
                path='/'
                exact 
                component={HomePage}/>
              <Route 
                path='/form'
                exact
                render={() => {
                  return <FormPage 
                          onAdd={this.addItem.bind(this)}/>
                }}/>
              <Route 
                path='/collection'
                exact
                render={() => {
                  return <CollectionPage 
                          users={this.state.data} 
                          onDelete={this.deleteItem.bind(this)}/>
                }}/>
              <Route path="*" component={PageNotFound} />
            </Switch>
          </div>
        </Container>
      </Router>
    )
  }
}
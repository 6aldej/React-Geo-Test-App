import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import CollectionPage from './pages/collectionPage';
import FormPage from './pages/formPage';
import HomePage from './pages/homePage';
import PageNotFound from './pages/notFoundPage'

import {connect} from 'react-redux';
import {setStateId, setStateData, setStateDataArr} from './store/actions/actionApp'

class App extends Component {

  deleteItem(id) {
    const {data} = this.props,
          index = data.findIndex(elem => elem.id === id),
          before = data.slice(0, index),
          after = data.slice(index + 1),
          newArr = [...before, ...after];
    this.props.setStateDataArr(newArr);
  }

  addItem(name, number) {
    this.props.setStateId();
    const newItem = {
        names: name,
        phone: number,
        id: this.props.id
    };
    this.props.setStateData(newItem);
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
                render={() => {return <FormPage onAdd={this.addItem.bind(this)}/>}}/>
              <Route 
                path='/collection'
                exact
                render={() => {return <CollectionPage users={this.props.data} onDelete={this.deleteItem.bind(this)}/>}}/>
              <Route path="*" component={PageNotFound} />
            </Switch>
          </div>
        </Container>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.app.data,
    id: state.app.id
  }
}

const mapDispatchToProps = {
  setStateId,
  setStateData,
  setStateDataArr
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
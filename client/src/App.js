import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import ProjectListContainer from './containers/ProjectList';
import ProjectContainer from './containers/Project';
import NewProjectContainer from './containers/NewProject';

import styles from './App.module.css';
import {Container, Header} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Header className={styles.header}>
            Projector -- simple project management
          </Header>
          <Router>
            <Route exact path="/" component={ProjectListContainer} />
            <Route exact path="/new-project" component={NewProjectContainer} />
            <Route path="/project/:id" component={ProjectContainer} />
          </Router>
        </Container>
      </Provider>
    );
  }
}
export default App;
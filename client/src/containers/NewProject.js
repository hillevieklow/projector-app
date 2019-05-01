import React from 'react';

import {
  Container,
  Card,
  Form,
  Button
} from 'semantic-ui-react';

import { connect } from 'react-redux';

import { createProject } from '../actions/project';
import NewProjectForm from "../components/NewProjectForm";

class NewProjectContainer extends React.Component {
  state = {
    name: '',
    deadline: Date.now(),
  };

  setProjectName = (val) => this.setState({ name: val });
  setDeadline = (val) => this.setState({ deadline: val });

  render() {
    const { createProject, success } = this.props;

    return (
        <Container>
          <NewProjectForm
              createProject={createProject}
              setProjectName={this.setProjectName}
              setDeadline={this.setDeadline}
              deadline={this.state.deadline}
              name={this.state.name}
              success={success}
          />
        </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  success: state.project.success,
});

const mapDispatchToProps = ({
  createProject,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectContainer);

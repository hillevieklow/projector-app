import React from 'react';
import { connect } from 'react-redux';

import {
  Loader,
  Button,
  Form,
  Progress
} from 'semantic-ui-react';
import { fetchProject, createTask, completeTask } from "../actions/project";
import { Link } from 'react-router-dom';

import moment from 'moment';
import TaskList from "../components/TaskList";
import NewTaskForm from "../components/NewTaskForm";
import ProjectInfo from "../components/ProjectInfo";

class Project extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  state = {
    task: '',
  };

  setTaskValue = (val) => this.setState({ task: val });

  render() {
    const {
      loading,
      error,
      project,
      createTask,
      completeTask
    } = this.props;

    if (loading) {
      return (
          <Loader>Loading</Loader>
      );
    }

    if (!project) {
      return (<p>The requested project was not found.</p>)
    }

    if (error) {
      return (<p>There was an error fetching tasks for this project.</p>);
    }

    const completedTasks = project.tasks.filter(t => t.done).length;
    const tasks = project.tasks.length;

    return (
        <div>
          <Link to="/">Back to project list</Link>
          <ProjectInfo project={project} completedTasks={completedTasks} tasks={tasks} />
          <h2>Tasks</h2>
          <TaskList
              tasks={project.tasks}
              onToggleTask={completeTask}
          />
          <NewTaskForm
              handleCreateTask={createTask}
              handleSetValue={this.setTaskValue}
              value={this.state.task}
              projectId={this.props.match.params.id}
          />
        </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loading: state.project.loading,
  error: state.project.error,
  project: state.project.projects.filter(p => p.id == props.match.params.id).length > 0 &&
      state.project.projects.filter(p => p.id == props.match.params.id)[0],
});

const mapDispatchToProps = ({
  fetchProject,
  createTask,
  completeTask
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);

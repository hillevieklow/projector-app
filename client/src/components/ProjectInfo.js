import React from 'react';
import moment from "moment";
import {Progress} from "semantic-ui-react";

class ProjectInfo extends React.Component {
  render() {
    const { project, completedTasks, tasks } = this.props;

    return (
        <div>
          <h1>{project.description}</h1>
          <p>Deadline {moment(project.deadline).format('MM-DD-YYYY')}</p>
          <h2>Progress</h2>
          <Progress percent={completedTasks / tasks * 100} />
        </div>
    )
  }
}

export default ProjectInfo;

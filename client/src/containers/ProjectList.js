import React from 'react';
import {Container, Header, Loader} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {fetchProjects} from "../actions/project";
import connect from "react-redux/es/connect/connect";
import ProjectCard from "../components/ProjectCard";

import styles from './ProjectList.module.css';

class ProjectListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();

  }

  render() {
    const { loading, error, projects } = this.props;

    if (loading) {
      return (
          <Loader>Loading</Loader>
      );
    }

    if (error) {
      return (<p>There was an error fetching projects.</p>);
    }

    return (
      <Container>
        <Link to="/new-project">New Project</Link>
        <div className={styles.list}>
          {projects && projects.map(p => (
              <ProjectCard
                  id={p.id}
                  key={p.id}
                  name={p.description}
                  deadline={p.deadline}
              />
          ))}
        </div>
      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
  loading: state.project.loading,
  error: state.project.error,
  projects: state.project.projects,
});

const mapDispatchToProps = ({
  fetchProjects
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer);
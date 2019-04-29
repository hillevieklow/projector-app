import React from 'react';

import { Card } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import styles from './ProjectCard.module.css';

const ProjectCard = ({
  id,
  name,
  deadline,
}) => (
    <div className={styles.card}>
      <Link to={`/project/${id}`}>
        <Card>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>Deadline: {moment(deadline).format('MM-DD-YYYY')}</Card.Description>
          </Card.Content>
        </Card>
      </Link>
    </div>
);

export default ProjectCard;
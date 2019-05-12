import React from 'react';
import classnames from 'classnames';

import { Card } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import styles from './ProjectCard.module.css';

const ProjectCard = ({
  id,
  name,
  deadline,
  tasks
}) => {
  const isDone = tasks.length > 0 && tasks.reduce((a, v) => a + (v.done ? 0 : 1), 0) === 0;

  return (
    <div className={classnames(styles.card, { [styles.isDone]: isDone })}>
      <Link to={`/project/${id}`}>
        <Card>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>Deadline: {moment(deadline).format('MM-DD-YYYY')}</Card.Description>
          </Card.Content>
        </Card>
      </Link>
    </div>
  )
};

export default ProjectCard;
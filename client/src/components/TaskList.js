import React from 'react';
import { List, Checkbox } from 'semantic-ui-react';

class TaskList extends React.Component {
  render() {
    const { tasks, onToggleTask } = this.props;

    return (
        <List>
          {tasks.map(t => (
              <List.Item style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox checked={t.done} onChange={() => onToggleTask(t.id, !t.done)} />
                <span style={{ marginLeft: '1rem' }}>{t.name}</span>
              </List.Item>
          ))}
        </List>
    )
  }
}

export default TaskList;

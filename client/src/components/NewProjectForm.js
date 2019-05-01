import React from 'react';
import {Card, Button, Form, Message} from "semantic-ui-react";
import { Link } from 'react-router-dom';

class NewProjectForm extends React.Component {
  render() {
    const {
      setProjectName,
      setDeadline,
      createProject,
      deadline,
      name,
      success
    } = this.props;

    return (
        <Form>
          <Card>
            <Card.Content>
              <Form.Field>
                <label>Project Name</label>
                <input
                    onChange={(e) => setProjectName(e.target.value)}
                    value={name}
                />
              </Form.Field>
              <Form.Field>
                <label>Project Deadline</label>
                <input
                    type="date"
                    onChange={(e) => setDeadline(e.target.value)}
                    value={deadline}
                />
              </Form.Field>
              <Button type="submit" onClick={() => createProject({ name, deadline })}>Submit</Button>
            </Card.Content>
          </Card>
          {success && (
              <Message>
                <p>Your project has been created.</p>
              </Message>
          )}
          <Link to="/">Back to project list</Link>
        </Form>
    );
  }
}

export default NewProjectForm;

import {Button, Form} from "semantic-ui-react";
import React from "react";

class NewTaskForm extends React.Component {
  render() {
    const { handleCreateTask, value, handleSetValue, projectId } = this.props;

    return (
      <Form>
        <Form.Field>
          <input
              placeholder="What else needs to be done?"
              value={value}
              onChange={(e) => handleSetValue(e.target.value)}
          />
        </Form.Field>
        <Button
            type="submit"
            onClick={e => {
              e.preventDefault();
              handleCreateTask({
                name: value,
                projectId: projectId,
                done: false,
              })
            }}>
          Create Task
        </Button>
      </Form>
    )
  }
}

export default NewTaskForm;

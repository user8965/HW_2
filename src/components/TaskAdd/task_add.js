import React from "react";
import './task_add.css';

class TaskAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'new task name',
            description: 'new task description'
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handleDescChange(e) {
        this.setState({description: e.target.value})
    }

    handleSubmit(event) {
        this.props.onAddButtonClick(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} /></label>
                <label>Description: <input type="text" value={this.state.description} onChange={this.handleDescChange} /></label>
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default TaskAdd;
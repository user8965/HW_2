import React from "react";
import './task.css';

class Task extends React.Component {
    render() {
        return (
            <li className="task-item">
                <span className="task-info">
                    <span className="task-name">{this.props.name}</span>
                    <span className="task-desc">{this.props.description}</span>

                </span>
                <span className="task-state">
                    <span className="task-status">{this.props.completed ? "✅" : "❌"}</span>
                    <button className="task-button" onClick={() => this.props.onStateChange(this.props.index)}>change state</button>
                </span>
            </li>
        );
    }
}

export default Task;
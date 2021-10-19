import React from "react";
import Task from "../Task/task";
import TaskAdd from "../TaskAdd/task_add";
import './task_list.css';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:
                [
                    {id: 0, name: 'Name 0', description: 'Description 0'},
                    {id: 1, name: 'Name 1', description: 'Description 1', completed: true},
                    {id: 2, name: 'Name 2', description: 'Description 2', completed: true},
                    {id: 3, name: 'Name 3', description: 'Description 3'},
                    {id: 4, name: 'Name 4', description: 'Description 4', completed: true},
                    {id: 5, name: 'Name 5', description: 'Description 5', completed: true},
                    {id: 6, name: 'Name 6', description: 'Description 6'},
                    {id: 7, name: 'Name 7', description: 'Description 7', completed: true},
                    {id: 8, name: 'Name 8', description: 'Description 8', completed: true},
                    {id: 9, name: 'Name 9', description: 'Description 9'},
                ]
        }

        this.onTaskStateChanged = this.onTaskStateChanged.bind(this);
        this.onTaskAdd = this.onTaskAdd.bind(this);
    }

    onTaskAdd(task) {
        this.setState({tasks: [...this.state.tasks, task]})
    }

    onTaskStateChanged(id) {
        let tasks = [...this.state.tasks];
        let changedTask = {...tasks[id]};
        changedTask.completed = !changedTask.completed;
        tasks[id] = changedTask;
        this.setState({tasks});
    }

    render() {
        return <div>
            <TaskAdd onAddButtonClick={this.onTaskAdd}/>
            <hr/>
            <ul className="task-list">
                {this.state.tasks.map((task, index) => {
                    return <Task id={task.id} index={index} name={task.name} description={task.description} completed={task.completed}
                                 onStateChange={this.onTaskStateChanged}/>;
                })}
            </ul>
        </div>
    }
}

export default TaskList;
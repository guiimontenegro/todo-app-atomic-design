import React from "react"
import TaskList from "../organisms/TaskList"

const TaskTemplate: React.FC = () => (
    <div className="task-template">
        <h1>To-Do List</h1>
        <TaskList />
    </div>
)

export default TaskTemplate

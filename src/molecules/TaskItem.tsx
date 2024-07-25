import React from "react"
import { Task } from "../interfaces/Task"
import Checkbox from "../atoms/Checkbox"
import Button from "../atoms/Button"

interface TaskItemProps {
    task: Task
    onComplete: (id: string) => void
    onRemove: (id: string) => void
    onEdit?: (id: string, newName: string) => void
}

const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onComplete,
    onRemove,
    onEdit,
}) => {
    return (
        <div className="task-item">
            <Checkbox
                checked={task.completed}
                onChange={() => onComplete(task.id)}
            />
            <span className={task.completed ? "completed" : ""}>
                {task.name}
            </span>
            {onEdit && (
                <Button onClick={() => onEdit(task.id, task.name)}>Edit</Button>
            )}
            <Button onClick={() => onRemove(task.id)}>Remove</Button>
        </div>
    )
}

export default TaskItem

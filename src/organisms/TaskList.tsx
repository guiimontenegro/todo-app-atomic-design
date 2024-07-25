import React, { useState, useEffect } from "react"
import { Task } from "../interfaces/Task"
import TaskItem from "../molecules/TaskItem"
import InputField from "../atoms/InputField"
import Button from "../atoms/Button"
import { getTasks, saveTasks } from "../utils/storage"
import jsPDF from "jspdf"

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [taskName, setTaskName] = useState("")

    useEffect(() => {
        setTasks(getTasks())
    }, [])

    const addTask = () => {
        if (taskName) {
            const newTask: Task = {
                id: Date.now().toString(),
                name: taskName,
                completed: false,
            }
            const updatedTasks = [...tasks, newTask]
            setTasks(updatedTasks)
            saveTasks(updatedTasks)
            setTaskName("")
        }
    }

    const completeTask = (id: string) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
        )
        setTasks(updatedTasks)
        saveTasks(updatedTasks)
    }

    const removeTask = (id: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        setTasks(updatedTasks)
        saveTasks(updatedTasks)
    }

    const removeCompletedTasks = () => {
        const updatedTasks = tasks.filter((task) => !task.completed)
        setTasks(updatedTasks)
        saveTasks(updatedTasks)
    }

    const editTask = (id: string, newName: string) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, name: newName } : task,
        )
        setTasks(updatedTasks)
        saveTasks(updatedTasks)
    }

    const exportCompletedTasksToPDF = () => {
        const doc = new jsPDF()
        const completedTasks = tasks.filter((task) => task.completed)
        completedTasks.forEach((task, index) => {
            doc.text(`${index + 1}. ${task.name}`, 10, 10 + index * 10)
        })
        doc.save("completed-tasks.pdf")
    }

    return (
        <div className="task-list">
            <div className="input-field-container">
                <InputField
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Add a new task"
                />
                <Button className="add-task-button" onClick={addTask}>
                    Add Task
                </Button>
            </div>
            <div className="tasks-container">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onComplete={completeTask}
                        onRemove={removeTask}
                        onEdit={editTask}
                    />
                ))}
            </div>
            <div className="buttons-container">
                <Button onClick={removeCompletedTasks}>
                    Remove Selected Tasks
                </Button>
                <Button onClick={exportCompletedTasksToPDF}>
                    Export Selected Tasks to PDF
                </Button>
            </div>
        </div>
    )
}

export default TaskList

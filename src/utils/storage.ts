import { Task } from "../interfaces/Task"

const TASKS_KEY = "tasks"

export const getTasks = (): Task[] => {
    const tasks = localStorage.getItem(TASKS_KEY)
    return tasks ? JSON.parse(tasks) : []
}

export const saveTasks = (tasks: Task[]): void => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
}

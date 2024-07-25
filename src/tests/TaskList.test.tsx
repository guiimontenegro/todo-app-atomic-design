import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import TaskList from "../organisms/TaskList"
import jsPDF from "jspdf"

jest.mock("jspdf")

describe("TaskList", () => {
    test("renders TaskList and interacts with it", () => {
        const { getByPlaceholderText, getByText } = render(<TaskList />)
        const input = getByPlaceholderText("Add a new task")
        const button = getByText("Add Task")

        fireEvent.change(input, { target: { value: "New Task" } })
        fireEvent.click(button)

        expect(getByText("New Task")).toBeInTheDocument()
    })

    test("allows editing a task", () => {
        const { getByPlaceholderText, getByText, getAllByText } = render(
            <TaskList />,
        )
        const input = getByPlaceholderText("Add a new task")
        const addButton = getByText("Add Task")

        fireEvent.change(input, { target: { value: "New Task" } })
        fireEvent.click(addButton)

        const editButtons = getAllByText("Edit")
        fireEvent.click(editButtons[0])

        const editInput = screen.getByRole("textbox")
        fireEvent.change(editInput, { target: { value: "Updated Task" } })
        fireEvent.blur(editInput)

        expect(getByText("Updated Task")).toBeInTheDocument()
    })
})

import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import "./index.css"

const rootElement = document.getElementById("root")
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <React.StrictMode>
            <Home />
        </React.StrictMode>
    )
}

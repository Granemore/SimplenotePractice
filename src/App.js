import React from "react"
import SideBar from "./components/SideBar"
import RightSide from "./components/RightSide"
import "./App.css"

const App = () => {
    return (
        <div className="appCon">
            <SideBar />
            <RightSide />
        </div>
    )
}

export default App

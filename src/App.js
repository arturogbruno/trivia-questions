import React from "react";
import Navbar from "./components/navbar/Navbar";
import BrowsePage from "./components/browsePage/BrowsePage";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <BrowsePage />
        </div>
    )
}

export default App;
import React from "react";
import Navbar from "./components/navbar/Navbar";
import QuestionsTable from "./components/questionsTable/QuestionsTable";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <QuestionsTable />
        </div>
    )
}

export default App;
import React from "react";
import axios from "axios";
import QuestionRow from "../questionRow/QuestionRow";
import "./QuestionsTable.scss";


class QuestionsTable extends React.Component {
    state = {
        questions: null,
    }

    componentDidMount = () => {
        axios.get("https://opentdb.com/api.php?amount=10")
        .then(response => this.setState({ questions: response.data.results }))
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.state);
        return (
            this.state.questions ? (
                <div className="main">
                    <h1 className="title">Browse Questions</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="id">ID<i className="fas fa-sort"></i></th>
                                <th>Category</th>
                                <th>Type</th>
                                <th>Difficulty</th>
                                <th>Question / Statement</th>
                                <th>Created By</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.questions.map((question, idx) => <QuestionRow key={idx} questionData={question} />)}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h3 className="loading">Loading data...</h3>
            )
        )
    }
}

export default QuestionsTable;
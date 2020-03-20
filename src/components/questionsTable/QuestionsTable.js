import React from "react";
import QuestionRow from "../questionRow/QuestionRow";
import axios from "axios";


class QuestionsTable extends React.Component {
    state = {
        questions: null
    }

    componentDidMount = () => {
        axios.get("https://opentdb.com/api.php?amount=10")
        .then(response => this.setState({ questions: response.data.results }))
        .catch(err => console.log(err))
    }

    render() {
        return (
            this.state.questions ? (
                <div className="main">
                    <h1>Browse Questions</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
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
                <h3>Cargando...</h3>
            )
        )
    }
}

export default QuestionsTable;
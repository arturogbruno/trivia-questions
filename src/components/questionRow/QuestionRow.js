import React from "react";
import { Link } from "react-router-dom";
import "./QuestionRow.scss";

const QuestionRow = (props) => {
    const {id, category, difficulty, author} = {...props.questionData};
    const type = props.questionData.type === "multiple" ? "Multiple Choice" : "True / False";
    const parser = new DOMParser();
    const formattedQuestion = parser.parseFromString(props.questionData.question, "text/html").body.innerHTML;
    return (
        <tr>
            <td>{id}</td>
            <td>{category}</td>
            <td>{type}</td>
            <td>{difficulty}</td>
            <td>{formattedQuestion}</td>
            <td><Link to="#" className="author">{author}</Link></td>
        </tr>
    )
}

export default QuestionRow;
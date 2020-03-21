import React from "react";
import { Link } from "react-router-dom";
import faker from "faker";
import "./QuestionRow.scss";

const QuestionRow = (props) => {
    const {category, difficulty} = {...props.questionData};
    const type = props.questionData.type === "multiple" ? "Multiple Choice" : "True / False";
    const parser = new DOMParser();
    const formattedQuestion = parser.parseFromString(props.questionData.question, "text/html").body.innerHTML;
    return (
        <tr>
            <td>{Math.floor(Math.random() * 100)}</td>
            <td>{category}</td>
            <td>{type}</td>
            <td>{difficulty}</td>
            <td>{formattedQuestion}</td>
            <td><Link to="#" className="author">{faker.internet.userName()}</Link></td>
        </tr>
    )
}

export default QuestionRow;
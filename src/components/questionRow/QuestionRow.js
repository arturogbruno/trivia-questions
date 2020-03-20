import React from "react";

const QuestionRow = (props) => {
    const {category, type, difficulty, question} = {...props.questionData};
    return (
        <tr>
            <td>{Math.floor(Math.random() * 100)}</td>
            <td>{category}</td>
            <td>{type}</td>
            <td>{difficulty}</td>
            <td>{question}</td>
            <td>arthur</td>
        </tr>
    )
}

export default QuestionRow;
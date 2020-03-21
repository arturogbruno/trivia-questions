import React from "react";
import QuestionRow from "../questionRow/QuestionRow";
import "./QuestionsTable.scss";

const QuestionsTable = (props) => {
    return (
        <table className="questionsTable">
            <thead>
                <tr>
                    <th className="id">ID<i className="fas fa-sort"></i></th>
                    <th className="category">Category</th>
                    <th className="type">Type</th>
                    <th>Difficulty</th>
                    <th>Question / Statement</th>
                    <th>Created By</th> 
                </tr>
            </thead>
            <tbody>
                {props.filteredDifficultyLevels.length ? (
                    props.filteredCategories.length ? (
                        props.questions.filter(question => props.filteredDifficultyLevels.includes(question.difficulty)).filter(questionFilteredByDifficulty => props.filteredCategories.includes(questionFilteredByDifficulty.category)).map((question, idx) => <QuestionRow key={idx} questionData={question} />)
                    ) : (
                        props.questions.filter(question => props.filteredDifficultyLevels.includes(question.difficulty)).map((question, idx) => <QuestionRow key={idx} questionData={question} />)
                    )
                ) : (
                    props.filteredCategories.length ? (
                        props.questions.filter(question => props.filteredCategories.includes(question.category)).map((question, idx) => <QuestionRow key={idx} questionData={question} />)
                    ) : (
                        props.questions.map((question, idx) => <QuestionRow key={idx} questionData={question} />)
                    )
                )}
            </tbody>
        </table>
    )
}

export default QuestionsTable;
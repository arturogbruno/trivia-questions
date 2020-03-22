import React from "react";
import "./DifficultyFilter.scss";

const DifficultyFilter = (props) => {
    return (
        <div className="difficultyFilter">
            <h4><i className="fas fa-filter"></i> Difficulty levels:</h4>
            {props.levels.map((level, idx) => (
                <div className="filterItem" key={idx}>
                    <input type="checkbox" name="difficulty" id={level} value={level} onChange={e => props.handleChange(e)}/>
                    <label htmlFor={level}>{level}</label>
                </div>
            ))}
        </div>
    )
}

export default DifficultyFilter;
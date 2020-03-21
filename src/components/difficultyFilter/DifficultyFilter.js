import React from "react";

const DifficultyFilter = (props) => {
    return (
        <form>
            <label>Difficulty levels:</label>
            {props.levels.map((level, idx) => (
                <React.Fragment key={idx}>
                    <input type="checkbox" name="difficulty" id={level} value={level} onChange={props.handleChange}/>
                    <label htmlFor={level}>{level}</label>
                </React.Fragment>
            ))}
        </form>
    )
}

export default DifficultyFilter;
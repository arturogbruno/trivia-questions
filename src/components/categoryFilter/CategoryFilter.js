import React from "react";

const CategoryFilter = (props) => {
    return (
        <form>
            <label>Categories:</label>
            {props.categories.map((category, idx) => (
                <React.Fragment key={idx}>
                    <input type="checkbox" name="category" id={category} value={category} onChange={props.handleChange}/>
                    <label htmlFor={category}>{category}</label>
                </React.Fragment>
            ))}
        </form>
    )
}

export default CategoryFilter;
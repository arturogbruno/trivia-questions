import React from "react";
import "./CategoryFilter.scss";

const CategoryFilter = (props) => {
    return (
        <div className="categoryFilter">
            <h4><i className="fas fa-filter"></i> Categories:</h4>
            {props.categories.map((category, idx) => (
                <div className="filterItem" key={idx}>
                    <input type="checkbox" name="category" id={category} value={category} onChange={e => props.handleChange(e)}/>
                    <label htmlFor={category}>{category}</label>
                </div>
            ))}
        </div>
    )
}

export default CategoryFilter;
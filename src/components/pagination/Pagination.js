import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.scss";

const Pagination = () => {
    return (
        <ul className="pagination">
            <Link to="#" className="active">1</Link>
            <Link to="#">2</Link>
            <Link to="#">3</Link>
            <Link to="#">4</Link>
            <Link to="#">></Link>
        </ul>
    )
}

export default Pagination;
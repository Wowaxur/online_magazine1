import React from 'react';
import { Link } from "react-router-dom";

interface LinkToCategoryProps {
    category: string;
}

const LinkToCategory: React.FC<LinkToCategoryProps> = ({ category }) => {
    return (
        <Link to={`/category/${category}`}>{category}</Link>
    );
};

export default LinkToCategory;
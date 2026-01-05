import React from 'react';

interface CategoryHeaderProps {
    title: string;
    count: number;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, count }) => {
    return (
        <div className="category-header">
            <h2 className="cat-title">{title}</h2>
            <div className="cat-count">Index: 01-0{count}</div>
        </div>
    );
};

export default CategoryHeader;

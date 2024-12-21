import React from "react";
import styles from "./topCategories.module.css";
import { CategoriesProps } from "~/shared/types/types";

const TopCategories = ({ categories }: CategoriesProps) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Top Categories</h3>
            <hr className={styles.divider} />
            {categories.length === 0 ? (
                <p>No categories available</p>
            ) : (
                categories.map((category, index) => (
                    <div key={index} className={styles.category}>
                        <a href={`#${category}`} className={styles.link}>
                            {category.toUpperCase()}
                        </a>
                    </div>
                ))
            )}
        </div>
    );
};

export default TopCategories;
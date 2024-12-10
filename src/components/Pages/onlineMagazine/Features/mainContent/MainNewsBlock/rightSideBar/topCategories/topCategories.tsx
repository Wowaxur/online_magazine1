import React from "react";
import styles from "./topCategories.module.css";

type TopCategoriesPropsType = {
    categories: string[];
};

const TopCategories = ({ categories }: TopCategoriesPropsType) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Top Categories</h3>
            <hr className={styles.divider} />
            {categories.map((category, index) => (
                <div key={index} className={styles.category}>
                    <a href={`#${category}`} className={styles.link}>
                        {category}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default TopCategories;
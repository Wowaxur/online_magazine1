import React from "react";
import styles from "./topCategories.module.css";
import { CategoriesProps } from "~/shared/types/types";
import LinkToCategory from "~/Features/LinkToCategory/LinkToCategory";

const TopCategories = ({ categories }: CategoriesProps) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Top Categories</h3>
            <hr className={styles.divider} />
            {categories.length === 0 ? (
                <p>No categories available</p>
            ) : (
                <div className={styles.buttonsWrapper}>
                    {categories.map((category, index) => (
                        <div key={index} className={styles.categoryButton}>
                            <LinkToCategory category={category} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TopCategories;
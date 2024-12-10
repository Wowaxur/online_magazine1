import React from "react";
import styles from "./mainContentBlock.module.css";
import LogoWithRubric from "./logoWithRubric/logoWithRubric";
import NewsBlock from "./newsBlock/NewsBlock";
import { categoryRubrics, news } from "../../../../../../../data";
import { categoryStyles } from "../../../../helpers/categoryColor";

const MainContentBlock = () => {
    const excludedCategories = ['Startups', 'Humans'];
    const filteredCategoriesNews = news.filter((item) => !excludedCategories.includes(item.category));
    const categories = Object.keys(categoryRubrics);

    const getFilteredNews = (category: string) =>
        filteredCategoriesNews.filter((item) => item.category === category);

    return (
        <div className={styles.container}>
            {categories.map((category) => {
                const style = categoryStyles[category];
                if (!style) {
                    console.warn(`Category "${category}" is skipped due to missing style.`);
                    return null;
                }

                const filteredNews = getFilteredNews(category);
                if (filteredNews.length === 0) return null;

                return (
                    <div key={category} className={styles.categoryBlock}>
                        <LogoWithRubric
                            logo={style.logo}
                            rubrics={categoryRubrics[category]}
                        />
                        <NewsBlock
                            news={filteredNews}
                            categoryColor={style.color}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default MainContentBlock;
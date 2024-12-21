import React from "react";
import styles from "./mobileNewsSection.module.css";
import { addOpacityToColor } from "~/shared/helpers/addOpacityToColorHelper";
import {NewsArticle} from "~/shared/types/types";



interface Props {
    categories: string;
    logo: string;
    categoryColor: string;
    news: NewsArticle[];
}

const MobileNewsSection: React.FC<Props> = ({ logo, categories, categoryColor, news }) => {


    const mainNews = news[0];
    const newColor = addOpacityToColor(categoryColor, 0.1);

    if (!mainNews) return null;

    return (
        <div className={styles.container}>
            <div className={styles.mainNews}>
                <div className={styles.logoWrapper} style={{ backgroundColor: newColor }}>
                    <div
                        className={styles.logo}
                        style={{ backgroundImage: `url(${logo})` }}
                    >
                        {categories[0]}
                    </div>
                </div>
                <h2 style={{ borderColor: categoryColor }}>{mainNews.title}</h2>
            </div>
        </div>
    );
};

export default MobileNewsSection;
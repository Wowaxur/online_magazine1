import React from "react";
import styles from "./mainContentBlock.module.css";
import LogoWithRubric from "./logoWithRubric/logoWithRubric";
import NewsBlock from "./newsBlock/NewsBlock";
import { categoryRubrics, news } from "../../../../../../data";
import { blueLogo, orangeLogo, greenLogo, redLogo } from "../../../assets/images/ColorBlocks";

const categoryStyles: Record<string, { logo: string; color: string }> = {
    Tech: { logo: blueLogo, color: "#007bff" },
    Lifestyle: { logo: orangeLogo, color: "#ff6700" },
    Home: { logo: greenLogo, color: "#008000" },
    Politics: { logo: redLogo, color: "#ff0000" },
};

const MainContentBlock = () => {
    const categories = Object.keys(categoryRubrics);

    return (
        <div className={styles.container}>
            {categories.map((category) => {
                const style = categoryStyles[category];

                if (!style) {
                    console.error(`Style for category "${category}" is not defined.`);
                    return null;
                }

                return (
                    <div key={category} className={styles.categoryBlock}>
                        <LogoWithRubric
                            logo={style.logo}
                            rubrics={categoryRubrics[category]}
                            categoryColor={style.color}
                        />
                        <NewsBlock news={news.filter((item) => item.category === category)} />
                    </div>
                );
            })}
        </div>
    );
};

export default MainContentBlock;
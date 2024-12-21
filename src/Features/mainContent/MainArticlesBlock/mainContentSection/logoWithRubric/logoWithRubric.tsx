import React from "react";
import styles from "./LogoWithRubric.module.css";
import {addOpacityToColor} from "~/shared/helpers/addOpacityToColorHelper";

type Props = {
    categories: string;
    logo: string;
    categoryColor: string;
}

const LogoWithRubric = ({ logo, categories, categoryColor }: Props) => {
     const newColor = addOpacityToColor(categoryColor, 0.1)

    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper} style={{ backgroundColor: newColor }}>
               <div className={styles.logoAbsolute}>
                   <div style={{backgroundImage: `url(${logo})`}} className={styles.logo}>
                       <h2 className={styles.logoText}>{categories[0]}</h2>
                   </div>
               </div>
            </div>
            <div className={styles.rubricBlock}>
                <span className={styles.title}>
                    IN THIS RUBRIC
                </span>

            </div>
        </div>
    );
};




export default LogoWithRubric;
import React from "react";
import styles from "./LogoWithRubric.module.css";

type Props = {
    logo: string;
    rubrics: string[];
};

const LogoWithRubric = ({ logo, rubrics }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt="Category Logo" className={styles.logo} />
            </div>
            <div className={styles.rubricBlock}>
                <span className={styles.title}>
                    IN THIS RUBRIC
                </span>
                <ul className={styles.rubricList}>
                    {rubrics.map((rubric, index) => (
                        <li key={index} className={styles.rubricItem}>
                            {rubric}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LogoWithRubric;
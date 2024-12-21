import React from 'react';
import TopCategories from "./topCategories/topCategories";
import styles from './rightSideBar.module.css';
import { useSelector } from "react-redux";
import {selectCategories} from "~/shared/api/apiSlice";

const RightSideBar = () => {
    const categories = useSelector(selectCategories);

    // Если данные некорректны, вернуть пустой массив
    const validCategories = Array.isArray(categories) ? categories : [];

    return (
        <div className={styles.rightSideBar}>
            {/* Если категорий нет, отображается пустой список */}
            <TopCategories categories={validCategories} />
        </div>
    );
};

export default RightSideBar;
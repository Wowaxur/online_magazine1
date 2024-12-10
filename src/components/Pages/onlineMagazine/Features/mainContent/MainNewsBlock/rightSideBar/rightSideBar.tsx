import React from 'react';
import {topCategories, news} from "../../../../../../../data";
import TopCategories from "./topCategories/topCategories";
import Popular from "./popular/popular";
import styles from './rightSideBar.module.css'

const RightSideBar = () => {
    return (
        <div className={styles.rightSideBar}>
            <TopCategories categories={topCategories} />
            <Popular news={news}/>
        </div>
    );
};

export default RightSideBar;
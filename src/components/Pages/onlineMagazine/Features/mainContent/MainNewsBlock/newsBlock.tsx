import React from 'react';
import MainContentBlock from "./mainContentBlock/mainContentBlock";
import RightSideBar from "./rightSideBar/rightSideBar";
import s from './newsBlock.module.css'
const MainNewsBlock = () => {
    return (
        <div className={s.mainContent}>
            <MainContentBlock />
            <RightSideBar />
        </div>
    );
};

export default MainNewsBlock;
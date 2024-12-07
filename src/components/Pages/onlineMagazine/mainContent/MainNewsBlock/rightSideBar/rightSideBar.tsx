import React from 'react';
import {topCategories, news} from "../../../../../../data";
import TopCategories from "./topCategories/topCategories";
import Popular from "./popular/popular";

const RightSideBar = () => {
    return (
        <div>
            <TopCategories categories={topCategories} />
            <Popular news={news}/>
        </div>
    );
};

export default RightSideBar;
import React from 'react';
import Header from "./Features/header/header";
import Footer from "./Features/footer/footer";
import MainContent from "./Features/mainContent/mainContent";
import {categories, footerData} from "../../../data";

const OnlineMagazine = () => {
    return (
        <div>
        <Header categories={categories} />
            <MainContent/>
         <Footer columns = {footerData.columns}/>
        </div>
    );
};

export default OnlineMagazine;
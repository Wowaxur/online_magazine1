import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import MainContent from "./mainContent/mainContent";
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
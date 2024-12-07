import React from 'react';
import FooterCategoryBlock from "./footerCategoryBlock/footerCategoryBlock";
import { information} from "../../../../data";
import s from './footer.module.css';
import SocialLinks from "../socialLinks/socialLinks";


interface FooterProps {
    columns: {
        firstColumn: {
            title: string;
            links?: string[];
        }[];
        secondColumn: {
            title: string;
            links?: string[];
        }[];
        thirdColumn: {
            title: string;
            links?: string[];
        }[];
        fourthColumn: {
            title: string;
            links?: string[];
        }[];
    };
}

const Footer = ({  columns } : FooterProps) => {
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
                {/* Отображение колонок футера */}
                {Object.entries(columns).map(([columnKey, sections]) => (
                    <div key={columnKey} className={s.column}>
                        {sections.map((section, index) => (
                            <FooterCategoryBlock
                                key={index}
                                section={section}
                                className={s.categoryBlock}
                            />
                        ))}
                    </div>
                ))}
            </div>
            {/* Блок контактов */}
            <div className={s.contactContainer}>
                <div className={s.socialLinks}>
                    <h4>FOLLOW US</h4>
                    <SocialLinks />
                </div>
                {information.map((info, index) => (
                    <div key={index} className={s.informat}>
                        <h4>{info.title}</h4>
                        <p>{info.description}</p>
                    </div>
                ))}
            </div>
        </footer>
    );
};


export default Footer;
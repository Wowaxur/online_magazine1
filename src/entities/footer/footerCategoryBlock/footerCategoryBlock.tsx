import React from 'react';
import s from './footerCategoryBlock.module.css';
import {isWindowDesktop} from "~/shared/helpers/isWindowDesktopHelper";

interface FooterCategoryBlockProps {
    section: {
        title: string;
        links?: string[];
        description?: string;
    };
    className?: string;
}

const FooterCategoryBlock: React.FC<FooterCategoryBlockProps> = ({ section, className }) => {
    return (
        <div className={`${s.categoryBlock} ${className || ''}`}>
            <h4 className={s.categoryTitle}>{section.title}</h4>
            { isWindowDesktop && section.links ? (
                <ul className={s.linkList}>
                    {section.links.map((link, idx) => (
                        <li key={idx} className={s.linkItem}>
                            {link}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={s.description}>{section.description}</p>
            )}
        </div>
    );
};

export default FooterCategoryBlock;
import React from "react";
import SocialLinks from "~/Features/socialLinks/socialLinks";
import s from "./header.module.css";
import HeaderLink from "./headerLinks/headerLink";
import {isWindowDesktop} from "~/shared/helpers/isWindowDesktopHelper";
import {CategoriesProps} from "~/shared/types/types";



const Header = ({ categories }: CategoriesProps) => {
    return (
        <div className={s.Header}>
            <div className={s.LogoBlock}>
                {!isWindowDesktop && (
                    <button className={s.Burger} aria-label="Menu">☰</button>
                )}
                {isWindowDesktop && (
                    <div className={s.LeftControls}>
                        <button className={s.Burger} aria-label="Menu">☰</button>
                        <button className={s.Find} aria-label="Search">🔍</button>
                    </div>
                )}
                <div className={s.LogoContainer}>
                    <h1 className={s.Logo}>INFORMAT</h1>
                    <p className={s.Tagline}>WELCOME TO INFORMAT, WHERE THOUGHTS MATTER</p>
                </div>

                {!isWindowDesktop && (
                    <button className={s.Find} aria-label="Search">🔍</button>
                )}



                    {isWindowDesktop && <div className={s.RightControls}>
                        <SocialLinks />
                    </div>}
            </div>

            <div className={s.Categories}>
                <ul className={s.LinksList}>
                    {categories.map((text, index) => (
                        <li key={index}>
                            <HeaderLink text={text} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
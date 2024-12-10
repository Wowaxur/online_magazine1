import React from "react";
import SocialLinks from "../../socialLinks/socialLinks";
import s from "./header.module.css";
import HeaderLink from "./headerLinks/headerLink";

type HeaderProps = {
    categories: string[];
};

const Header = ({ categories }: HeaderProps) => {
    return (
        <div className={s.Header}>
            <div className={s.LogoBlock}>
                <div className={s.LeftControls}>
                    <button className={s.Burger} aria-label="Menu">☰</button>
                    <button className={s.Find} aria-label="Search">🔍</button>
                </div>

                <div>
                    <h1 className={s.Logo}>INFORMAT</h1>
                    <p className={s.Tagline}>WELCOME TO INFORMAT, WHERE THOUGHTS MATTER</p>
                </div>

                <div className={s.RightControls}>
                    <SocialLinks />
                </div>
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
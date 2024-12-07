import React from "react";
import s from './socialLinks.module.css';

const SocialLinks = () => {
    return (
        <section className={s.SocialLinks}>
            <a href="#instagram" aria-label="Instagram">1</a>
            <a href="#twitter" aria-label="Twitter">2</a>
            <a href="#facebook" aria-label="Facebook">3</a>
            <a href="#youtube" aria-label="YouTube">4</a>
        </section>
    );
};

export default SocialLinks;
import React from "react";
import s from './socialLinks.module.css';
import socialIcons from '~/shared/ui/assets/images/socialLinks'; // Импорт всех иконок

const SocialLinks = () => {
    return (
        <section className={s.SocialLinks}>
            <a href="#instagram" aria-label="Instagram">
                <img src={socialIcons.instagram} alt="Instagram" className={s.icon} />
            </a>
            <a href="#twitter" aria-label="Twitter">
                <img src={socialIcons.twitter} alt="Twitter" className={s.icon} />
            </a>
            <a href="#facebook" aria-label="Facebook">
                <img src={socialIcons.facebook} alt="Facebook" className={s.icon} />
            </a>
            <a href="#youtube" aria-label="YouTube">
                <img src={socialIcons.youtube} alt="YouTube" className={s.icon} />
            </a>
        </section>
    );
};

export default SocialLinks;
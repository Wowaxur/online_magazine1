import s from './headerLink.module.css';

type LinkPropsType = {
    text: string;
    isActive?: boolean;
};

const HeaderLink = ({ text, isActive }: LinkPropsType) => {
    return (
        <a
            className={`${s.headerNavLink} ${isActive ? s.active : ''}`}
            href={`#${text}`}
        >
            {text}
        </a>
    );
};

export default HeaderLink;
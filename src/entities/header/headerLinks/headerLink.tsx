import s from './headerLink.module.css';
import {Link} from "react-router-dom";

type LinkPropsType = {
    text: string;
    isActive?: boolean;
};

const HeaderLink = ({ text, isActive }: LinkPropsType) => {
    return (
        <Link to={`/category/${text}`}
            className={`${s.headerNavLink} ${isActive ? s.active : ''}`}
        >
            {text.toUpperCase()}
        </Link>
    );
};

export default HeaderLink;
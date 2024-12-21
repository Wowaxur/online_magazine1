import React from 'react';
import s from './searchBlock.module.css';
// import imageSrc from '../../assets/images/Orange_Full_BG_2.png';
import imageSearch from '../../../shared/ui/SearchIcon/SearchIcon.png';

const SearchBlock = () => {
    return (
        <div className={s.searchBlock}>
            <div className={s.searchContent}>
                <div className={s.inputWrapper}>
                    <input
                        type="text"
                        className={s.searchInput}
                        placeholder="Tesla cars"
                    />
                    <span className={s.focusBorder}></span>
                </div>
                <button className={s.searchButton} aria-label="Search">
                    <img src={imageSearch} alt="Search Icon" className={s.searchIcon} />
                </button>
            </div>
            {/*<img src={imageSrc} alt="Figure" className={s.imageSrc} />*/}
        </div>
    );
};

export default SearchBlock;
import React, {useContext, useState} from 'react';
import {motion} from 'framer-motion';
import { ColorScheme } from '../../theme';
import {MDButton} from 'react-md-components';

import palettes from '../../global.palettes.scss';
import style from './settings.module.scss';
import dark from './settings.dark.module.scss';
import light from './settings.light.module.scss';

const variants = {
    open: {y: '1rem'},
    closed: {y: `${10 * parseFloat(getComputedStyle(document.documentElement).fontSize) - 10}px`}
};

export const Settings = (props) => {
    const theme = useContext(ColorScheme).theme;
    // eslint-disable-next-line no-unused-vars
    const toggleTheme = useContext(ColorScheme).toggleTheme;
    const palette = theme == 'dark' ? dark : light;
    const [isOpen, setIsOpen] = useState(false);
    return (
    <motion.div 
        className={`${style.settingsdiv} ${palette.settingsdiv} ${props.className}`}
        initial={closed}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{type: "spring", damping: 12}}
    >
        <div onClick={() => setIsOpen(!isOpen)} className={style.toggle}></div>
        <ul className={style.settingscontent}>
            <li>
                <p>Theme: </p>
                <MDButton onClick={() => {toggleTheme();}} text accentColor={palettes.accentColorDarkened}>Change theme</MDButton>
            </li>
            <li>
                <p>Language: </p>
                <MDButton onClick={() => alert('Coming soon.')} text accentColor={palettes.accentColorDarkened}>Change language</MDButton>
            </li>
        </ul>
    </motion.div>
    );
};

export default Settings;
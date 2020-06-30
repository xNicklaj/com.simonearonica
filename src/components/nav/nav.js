import React, {useContext} from 'react';
import {generateKey} from '../../functions/common';

import {ColorScheme} from '../../theme';
import {DataContext} from '../../data';
import style from './nav.module.scss';
import dark from './nav.dark.palette.module.scss';
import light from './nav.light.palette.module.scss';

export const Nav = () => {
    const theme = useContext(ColorScheme).theme;
    const content = useContext(DataContext).content;
    const palette = theme == 'dark' ? dark : light;
    return (
        <nav style={{position: "sticky", top: 0, zIndex: 999}}>
            <ul className={`${style.navlist} ${palette.navlist}`}>
            {
                content.nav.map(elem => <li key={generateKey()} className={`${style.navitem} ${palette.navitem}`}><a className={`${style.navlink} ${palette.navlink}`} href={elem.href}>{elem.text}</a></li>)
            }
            </ul>
        </nav>
    );
};

export default Nav;
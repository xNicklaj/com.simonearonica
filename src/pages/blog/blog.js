import React, {useContext} from 'react';
import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';

import style from './blog.module.scss';
import light from './blog.light.palette.module.scss';
import dark from './blog.dark.palette.module.scss';
import palettes from '../../global.palettes.scss';

import {AssetContainer} from '../../assets';
import {ColorScheme} from '../../theme';

export const BlogPage = () => {
    const icons = useContext(AssetContainer).icons;
    const theme = useContext(ColorScheme).theme;
    const palette = theme == 'dark' ? dark : light;
    document.body.style = `background-color: ${theme == 'dark' ? palettes.bgColorDark : palettes.bgColorLight}`;
    return <>
        <Helmet>
            <title>Blog | Simone Aronica</title>
            <link rel="icon" href={icons["favicon.ico"].default} type="images/x-icon" />
            <meta property='og:title' content='Simone Aronica | Developer Blog'/>
            <meta property='og:type' content='website' />
            <meta property='og:site_name' content='Simone Aronica' />
            <meta name="google-site-verification" content="lsXBUrY9LxRO6rdCsoCmoFsC-X6DKQHCc-twbZJnzh0" />
            <meta property='og:description' content="This is my blog. Hi, I'm Simone Aronica and I'm your friendly neighbourhood junior developer." />
        </Helmet>
        <header className={`${style.header} ${palette.header}`}>
            <main>
                <motion.h1 animate={{x:-48}} transition={{duration: .25, type: "spring"}}>
                Hello, I&apos;m Simone
                </motion.h1>
                <motion.h1 animate={{x: 48}} transition={{duration: .25, type: "spring"}}>
                I like to develop stuff.
                </motion.h1>
            </main>
        </header>
        <div className={`${style.main} ${palette.main}`}>
            <section>
                <h1>This section is under construction.</h1>
            </section>
        </div>
    </>;
};

export default BlogPage;
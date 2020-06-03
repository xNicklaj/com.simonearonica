import React, {useContext} from 'react';
import {motion} from 'framer-motion';
import {MDCard, MDCardSection, MDDivider} from 'react-md-components';
import {Helmet} from 'react-helmet';

import style from './index.module.scss';
import light from './index.light.palette.module.scss';
import dark from './index.dark.palette.module.scss';
import palettes from '../../global.palettes.scss';
import Card from '../../components/card/card';
import Timeline from '../../components/timeline/timeline';

import {openLink} from '../../functions/common';
import {ColorScheme} from '../../theme';
import {AssetContainer} from '../../assets';

import avatar from '../../images/avatar.png';
import GmailIcon from '../../icons/gmail';
import GithubIcon from '../../icons/github-original';
import GitlabIcon from '../../icons/gitlab-original';
import TwitterIcon from '../../icons/twitter-original';
import CIcon from '../../icons/c-original';
import CppIcon from '../../icons/cpp-original';
import JavaIcon from '../../icons/java-original';
import HtmlIcon from '../../icons/html5-original';
import CSS3Icon from '../../icons/css3-original';
import JavascriptIcon from '../../icons/javascript-original';
import PhpIcon from '../../icons/php';
import ReactIcon from '../../icons/react-original';
import data from '../../data/en_EN';

export const IndexPage = () => {
  const theme = useContext(ColorScheme).theme;
  const palette = theme == 'dark' ? dark : light;
  document.body.style = `background-color: ${theme == 'dark' ? palettes.bgColorDark : palettes.bgColorLight}`;

  const images = useContext(AssetContainer).images;
  const icons = useContext(AssetContainer).icons;
  return <>
    <Helmet>
      <title>Home | Simone Aronica</title>
      <link rel="icon" href={icons["favicon.ico"].default} type="images/x-icon" />
      <meta property='og:title' content='Simone Aronica | Developer Portfolio'/>
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Simone Aronica' />
      <meta name="google-site-verification" content="lsXBUrY9LxRO6rdCsoCmoFsC-X6DKQHCc-twbZJnzh0" />
      <meta property='og:description' content="This is a web portfolio. Hi, I'm Simone Aronica and I'm your friendly neighbourhood junior developer." />
    </Helmet>
    <header className={`${style.header} ${palette.header}`}>
      <ul className={style.iconlist}>
        <motion.li 
          whileHover={{rotate: 360}} 
          transition={{duration: .7, ease: "easeInOut", yoyo: 0}}
          onClick={() => openLink("https://twitter.com/ItsSimonDev")}
        >
          <TwitterIcon />
        </motion.li>
        <motion.li 
          whileHover={{rotate: 360}} 
          transition={{duration: .7, ease: "easeInOut", yoyo: 0}}
          onClick={() => openLink("https://gitlab.com/xNicklaj")}
        >
          <GitlabIcon />
        </motion.li>
        <motion.li 
          whileHover={{rotate: 360}} 
          transition={{duration: .7, ease: "easeInOut", yoyo: 0}}
          onClick={() => openLink("https://github.com/xNicklaj")}
        >
          <GithubIcon />
        </motion.li>
        <motion.li 
          whileHover={{rotate: 360}} 
          transition={{duration: .7, ease: "easeInOut", yoyo: 0}}
          onClick={() => openLink("mailto:simonearonica@gmail.com")}
        >
          <GmailIcon />
        </motion.li>
      </ul>
      <main>
        <motion.h1 animate={{x:-64}} transition={{duration: .25, type: "spring"}}>
          Hello, I&apos;m Simone
        </motion.h1>
        <motion.h1 animate={{x: 64}} transition={{duration: .25, type: "spring"}}>
          I like to develop stuff.
        </motion.h1>
      </main>
    </header>
    <div className={`${style.main} ${palette.main}`}>
      <section>
        <h1 style={{color: theme == 'dark' ? palettes.textColorDark : palettes.textColorLight }}>My Skills</h1>
        <ul className={`${style.skillList} ${palette.skillList}`}>
          <li><CIcon /></li>
          <li><CppIcon /></li>
          <li><JavaIcon /></li>
          <li><HtmlIcon /></li>
          <li><CSS3Icon /></li>
          <li><JavascriptIcon /></li>
          <li><PhpIcon /></li>
          <li><ReactIcon /></li>
        </ul>
      </section>
      <section>
        <h1 style={{color: theme == 'dark' ? palettes.textColorDark : palettes.textColorLight }}>My projects</h1>
        <ul className={style.projects}>
          {
            data.projects.map(elem => {
              return <MDCard 
              key={elem.key} 
              media={elem.thumbnail ? images[`${elem.thumbnail}`.toString()].default : ''}
              title={elem.title}
              accentColor={palettes.accentcolor}
              className={style.MDCard}
              dark={theme == 'dark' ? true : false}
              actions={elem.links.map(link => {
                return {
                  title: link.title,
                  onClick: () => openLink(link.link),
                  key: link.key
                };
              })}
              >
                <MDCardSection>{elem.description}</MDCardSection>
                <MDDivider primaryColor={palettes.textColorDark} fullWidth/>
              </MDCard>;
            })
          }
        </ul>
      </section>
      <section>
        <h1 style={{color: theme == 'dark' ? palettes.textColorDark : palettes.textColorLight }}>About me and education</h1>
        <ul className={style.about}>
          <li>
            <Card src={avatar} data={data.about.attributes} back={data.about.back} className={style.card}/>
          </li>
          <li>
            <Timeline data={data.timeline} className={style.timeline}/>
          </li>
        </ul>
      </section>
    </div>
  </>;
};

export default IndexPage;
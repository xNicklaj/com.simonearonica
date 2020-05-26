import React from "react"
import {Helmet} from 'react-helmet'

import Layout from "../components/layout/layout"
import Heading from '../components/heading/heading'
import SEO from '../components/seo/seo'

import './global.scss'
import styles from './index.module.scss'
import palettes from './index.palettes.module.scss'
import avatar from '../images/avatar.png'
import fullBody from '../images/avatar-full-body.png'
import Skillcard from "../components/skillcard/skillcard";
import Card from '../components/card/card'

import CIcon from '../icons/c-original'
import CSS3Icon from '../icons/css3-original'
import CppIcon from '../icons/cpp-original'
import Html5Icon from '../icons/html5-original'
import JSIcon from  '../icons/javascript-original'
import ReactIcon from '../icons/react-original'
import JavaIcon from '../icons/java-original'
import PhpIcon from '../icons/php'

import { projects } from '../data/projects'
import GitLabOriginal from "../icons/gitlab-original"

const IndexPage = () => {
  const skills = [
    <CIcon key={0}/>,
    <CppIcon key={1} />,
    <Html5Icon key={2}/>,
    <CSS3Icon key={3}/>,
    <JSIcon key={4}/>,
    <PhpIcon key={5} />,
    <ReactIcon key={6}/>,
    <JavaIcon key={7} />
  ]

  return (<Layout>
    <Helmet htmlAttributes={{}} title='Home'>
      <meta property='og:title' content='Simone Aronica | Developer Portfolio'/>
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Simone Aronica' />
      <meta name="google-site-verification" content="lsXBUrY9LxRO6rdCsoCmoFsC-X6DKQHCc-twbZJnzh0" />
      <meta property='og:description' content="This is a web portfolio. Hi, I'm Simone Aronica and I'm your friendly neighbourhood junior developer." />
    </Helmet>
    <SEO />
    <Heading >
      <div className={styles.avatarDiv}>
          <img src={avatar} alt='avatar.png'/>
      </div>
      <div className={`${styles.textDiv} ${palettes.textDiv}`}>
          <h2>Hello, I'm Simone</h2>
          <h2>I like to develop stuff.</h2>
      </div>
      <div className={styles.skillcardWrapper}>
        <Skillcard style={{transform: 'translateY(5em)'}} speed={3}>
          {
            skills
          }
        </Skillcard>
      </div>
    </Heading>
    <div className={`${styles.wip} ${palettes.wip}`}>
      <div>
        <h1>My Projects</h1>
      </div>
      <div className={styles.pjgrid}>
        {
          projects.map(project => {
            let img = require(`../images/${project.thumbnail}`)
            return (
              <Card key={project.key}>
                  <img src={img} alt={project.thumbnail} />
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <span className={styles.divider}></span>
                  <span className={styles.links}>
                  {
                    project.links.map(link => {
                      return <button key={link.key} onClick={() => window.open(`${link.link}`)} alt={link.title} style={{borderColor:'#fbc02d', color:'#fbc02d'}}>{link.title}</button>
                    })
                  }
                  </span>
              </Card>
            )
          })
        }
      </div>
      <div>
        <h1>About me</h1>
      </div>
      <div className={styles.aboutMe}>
          <Card>
            <img src={fullBody} alt='avatar-full-body.png' />
            <h2>Simone</h2>
            <p>
              Born in Palermo, I’ve always loved progress and everything that is scientific.<br/>
              <br/>
              I attended an High School in Palermo that gave me some basics on Computer Science and since then I’ve always studied on my own.<br/>
              <br/>
              Right now Working on Web Development!
            </p>
          </Card>
          <div>
            <ul className={styles.timeline + ' ' + palettes.timeline}>
              <li>
                <h1>I.T.I. Ettore Majorana</h1>
                <p>
                  I attended my high school period in a computer science oriented public institute, where I've been taught notions of C, Java, HTML5, CSS, PHP and MySql.
                </p>
              </li>
              <li>
                <h1>Politecnico di Torino</h1>
                <p>
                  I will attend the Politecnico di Torino starting October 2020 to get a degree in Computer Engineering.
                </p>
              </li>
            </ul>
          </div>
          <div>

          </div>
      </div>
    </div>
  </Layout>
)}

export default IndexPage

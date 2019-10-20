import React from "react"
import {Helmet} from 'react-helmet'

import Layout from "../components/layout/layout"
import Heading from '../components/heading/heading'

import './global.scss'
import styles from './index.module.scss'
import palettes from './index.palettes.module.scss'
import avatar from '../images/avatar.png'
import fullBody from '../images/avatar-full-body.png'
import Skillcard from "../components/skillcard/skillcard";
import Card from '../components/card/card'

import CIcon from '../icons/c-original'
import CppIcon from '../icons/cpp-original'
import Html5Icon from '../icons/html5-original'
import JSIcon from  '../icons/javascript-original'

import { projects } from '../data/projects'

const IndexPage = () => {
  return (<Layout>
    <Helmet htmlAttributes={{}} title='Home | Simone Aronica'/>
    <Heading >
      <div className={styles.avatarDiv}>
          <img src={avatar} alt='avatar.png'/>
      </div>
      <div className={`${styles.textDiv} ${palettes.textDiv}`}>
          <h2>Hello, I'm Simone</h2>
          <h2>I like to develop stuff.</h2>
      </div>
      <div className={styles.skillcardWrapper}>
        <Skillcard style={{minWidth: '40vw', minHeight: '10em', transform: 'translateY(5em)'}}>
          <CIcon />
          <CppIcon />
          <JSIcon />
          <Html5Icon />
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
            <img src={fullBody} alt='avatar-full-body.png' style={{backgroundColor: '#F9E96A'}}/>
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
                  I attended my high school period in a computer science oriented public institute, where I've been taught notions of C, Java, XHTML, CSS, JSP and MySql.
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

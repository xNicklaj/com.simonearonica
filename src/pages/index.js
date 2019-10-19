import React from "react"
import {Helmet} from 'react-helmet'

import Layout from "../components/layout/layout"
import Heading from '../components/heading/heading'

import './global.scss'
import styles from './index.module.scss'
import palettes from './index.palettes.module.scss'
import avatar from '../images/avatar.png'
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
          <img src={avatar} />
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
              <Card background='#f1f1f1' color='#0c0c0c' key={project.key}>
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
    </div>
  </Layout>
)}

export default IndexPage

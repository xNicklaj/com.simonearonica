import React from "react"
import {Helmet} from 'react-helmet'

import Layout from "../components/layout/layout"
import Heading from '../components/heading/heading'

import './global.css'
import styles from './index.module.css'
import avatar from '../images/avatar.png'
import Skillcard from "../components/skillcard/skillcard";

import CIcon from '../icons/c-original'
import CppIcon from '../icons/cpp-original'
import Html5Icon from '../icons/html5-original'
import JSIcon from  '../icons/javascript-original'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Home | Simone Aronica</title>
    </Helmet>
    <Heading>
      <div className={styles.avatarDiv}>
          <img src={avatar} />
      </div>
      <div className={styles.textDiv}>
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
    <div className={styles.wip}>
      <h1>The more you refresh, the more this website is being developed.</h1>
    </div>
  </Layout>
)

export default IndexPage

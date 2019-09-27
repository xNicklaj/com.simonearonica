import React from "react"
import {Helmet} from 'react-helmet'

import Layout from "../components/layout/layout"
import Heading from '../components/heading/heading'

import './global.css'
import styles from './index.module.css'
import avatar from '../images/avatar.png'

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
    </Heading>
    <div className={styles.wip}>
      <h1>The more you refresh, the more this website is being developed.</h1>
    </div>
  </Layout>
)

export default IndexPage

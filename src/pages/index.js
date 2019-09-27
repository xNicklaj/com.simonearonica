import React from "react"
import {Helmet} from 'react-helmet'

import Layout from "../components/layout/layout"

import './global.css'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Home | Simone Aronica</title>
    </Helmet>
    <div className={styles.wip}>
      <h1>The more you refresh, the more this website is being developed.</h1>
    </div>
  </Layout>
)

export default IndexPage

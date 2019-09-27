import React from "react"
import {Helmet} from 'react-helmet'

import Layout from "../components/layout/layout"
import styles from './404.module.css'

import './global.css'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page not found | Simone Aronica</title>
    </Helmet>
    <div className={styles.content}>
      <h1>NOT FOUND</h1>
      <p>Are you sure this page exists? Unfortunately, last time I did it didn't...</p>
    </div>
  </Layout>
)

export default NotFoundPage

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import GitLabOriginal from '../../icons/gitlab-original'
import Sun from '../../icons/sun'
import GitHubOriginal from '../../icons/github-original'
import TwitterOriginal from '../../icons/twitter-original'

import styles from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <div className={styles.yellowBackgroundLayer}>
        <Header>
          <Sun className={styles.icon}/>
          <div className={styles.actionButtonsDiv}>
            <GitHubOriginal className={styles.icon} />
            <GitLabOriginal className={styles.icon}/>
            <TwitterOriginal className={styles.icon}/>
          </div>
        </Header>
      </div>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

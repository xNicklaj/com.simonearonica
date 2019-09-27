import React from 'react'

import styles from './heading.module.css'

import Header from "../header/header"
import GitLabOriginal from '../../icons/gitlab-original'
import Sun from '../../icons/sun'
import GitHubOriginal from '../../icons/github-original'
import TwitterOriginal from '../../icons/twitter-original'

const Heading = ({children}) => {
    return (
      <div className={styles.yellowBackgroundLayer}>
        <Header>
          <Sun className={styles.icon}/>
          <div className={styles.actionButtonsDiv}>
            <GitHubOriginal className={styles.icon} />
            <GitLabOriginal className={styles.icon}/>
            <TwitterOriginal className={styles.icon}/>
          </div>
        </Header>
        {children}
      </div>
    )
}
export default Heading
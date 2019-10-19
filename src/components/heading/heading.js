import React, {Component} from 'react'

import styles from './heading.module.scss'

import Header from "../header/header"
import GitLabOriginal from '../../icons/gitlab-original'
import Sun from '../../icons/sun'
import Moon from '../../icons/moon'
import GitHubOriginal from '../../icons/github-original'
import TwitterOriginal from '../../icons/twitter-original'

class Heading extends Component {
  constructor (props) {
    super(props)

    this.state = {
      schemeIcon: typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />,
    }

    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').addListener(e => this.setState({schemeIcon: e.matches ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />}))
  }

  render () {
    return (
      <div className={styles.yellowBackgroundLayer}>
        <Header>
          {
            this.state.schemeIcon
          }
          <div className={styles.actionButtonsDiv}>
            <GitHubOriginal className={styles.icon}/>
            <GitLabOriginal className={styles.icon}/>
            <TwitterOriginal className={styles.icon}/>
          </div>
        </Header>
        {this.props.children}
      </div>
    )
}
}
export default Heading
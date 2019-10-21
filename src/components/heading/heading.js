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
      schemeIcon: ''
    }
  }

  componentDidMount () {
    this.setState({schemeIcon: window.matchMedia('(prefers-color-scheme: dark)').matches ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />})
    window.matchMedia('(prefers-color-scheme: dark)').addListener(e => this.setState({schemeIcon: e.matches ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />}))
  }

  render () {
    return (
      <div className={styles.yellowBackgroundLayer}>
        <Header>
          {
            this.state.schemeIcon
          }
          <div className={styles.actionButtonsDiv}>
            <GitHubOriginal className={styles.icon} onClick={() => window.open('https://www.github.com/xNicklaj')}/>
            <GitLabOriginal className={styles.icon} onClick={() => window.open('https://www.gitlab.com/xNicklaj')}/>
            <TwitterOriginal className={styles.icon} onClick={() => window.open('https://www.twitter.com/xNicklaj')}/>
          </div>
        </Header>
        {this.props.children}
      </div>
    )
}
}
export default Heading
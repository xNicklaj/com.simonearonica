import React, {Component} from 'react'

import styles from './heading.module.css'

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
      isDarkThemeEnabled: props.useDarkTheme
    }
  }

  render () {
    return (
      <div className={styles.yellowBackgroundLayer}>
        <Header>
          {
            this.state.isDarkThemeEnabled ? <Moon className={styles.icon} onClick={()=> {
                this.setState({isDarkThemeEnabled: !this.state.isDarkThemeEnabled})
                typeof window !== 'undefined' && localStorage.setItem("useDarkTheme", `${!this.state.isDarkThemeEnabled}`);
              }}/> : <Sun className={styles.icon} onClick={() => {
                typeof window !== 'undefined' && localStorage.setItem("useDarkTheme", `${!this.state.isDarkThemeEnabled}`);
                this.setState({isDarkThemeEnabled: !this.state.isDarkThemeEnabled})
              }}/>
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
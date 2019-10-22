import React, {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect } from 'react'

import styles from './skillcard.module.scss'
import palettes from './skillcard.palettes.module.scss'

class SkillCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: props.children
        }
    }

    componentDidMount() {
        this.refs.iconWrapper.scrollLeft = (96*(this.props.children.length - 1) + 80 - this.refs.iconWrapper.clientWidth) / 2
    }

    render() {
        let i = 0;
        return (
            <div className={styles.card + ' ' + (this.props.className ? this.props.className : '') + ' ' + palettes.card} ref='skillcard' style={this.props.style}>
                <div className={styles.iconWrapper} ref='iconWrapper'>
                {
                    this.state.items.map(child => <div key={i++} className={styles.item}>{child}</div>)
                }
                </div>
                
            </div>
        )
    }
}

export default SkillCard
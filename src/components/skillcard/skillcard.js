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

    fetchData = () => {
        let state = {
            items: [...this.state.items, this.props.children]
        }
        this.setState(state)
        console.log('updated')
    }


    render() {
        let i = 0;
        return (
            <div className={styles.card + ' ' + (this.props.className ? this.props.className : '') + ' ' + palettes.card} style={this.props.style}>
                <InfiniteScroll 
                    dataLength={this.state.items.lenght} 
                    className={styles.iconWrapper} 
                    hasMore={true} 
                    next={this.fetchData}
                    loader={<h4>Loading...</h4>}
                    endMessage={<h4>End</h4>}
                    >
                    {
                        this.state.items.map(child => <div key={i++} className={styles.item}>{child}</div>)
                    }
                </InfiniteScroll>
            </div>
        )
    }
}

export default SkillCard
import React, { Component} from 'react'

import styles from './card.module.scss'
import palettes from './card.palettes.module.scss'

class Card extends Component {
    

    render() {
        return (
            <div className={`${styles.card} ${palettes.card} ${this.props.className ? this.props.className : ''}`} >
                {this.props.children}
            </div>
        )
    }
}

export default Card
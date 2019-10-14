import React, { Component} from 'react'

import styles from './card.module.css'

class Card extends Component {
    

    render() {
        return (
            <div className={`${styles.card} ${this.props.className ? this.props.className : ''}`} style={{background: this.props.background || 'green', color: this.props.color || 'white'}}>
                {this.props.children}
            </div>
        )
    }
}

export default Card
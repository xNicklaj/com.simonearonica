import React from 'react'
import { useEffect } from 'react'

import styles from './skillcard.module.css'

const Skillcard = (props) => {
    return (
        <div className={styles.card + (props.className ? props.className : '')} style={props.style}>
            <div className={styles.iconWrapper}>
                {
                    props.children.map(child => <div className={styles.item}>{child}</div>)
                }
            </div>
        </div>
    )
}

export default Skillcard
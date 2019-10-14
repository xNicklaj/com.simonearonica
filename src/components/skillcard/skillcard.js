import React from 'react'
import { useEffect } from 'react'

import styles from './skillcard.module.css'

const Skillcard = (props) => {
    let i = 0;
    return (
        <div className={styles.card + (props.className ? props.className : '')} style={props.style}>
            <div className={styles.iconWrapper}>
                {
                    props.children.map(child => <div key={i++} className={styles.item}>{child}</div>)
                }
            </div>
        </div>
    )
}

export default Skillcard
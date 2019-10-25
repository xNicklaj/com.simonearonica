import React, {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect } from 'react'

import styles from './skillcard.module.scss'
import palettes from './skillcard.palettes.module.scss'

class SkillCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: props.children,
            ogIndexHead: 0,
            ogIndexTrail: props.children.length - 1,
            indexHead: 0,
            indexTrail: props.children.length - 1,
            clientWidth: 96*props.children.length
        }
    }

    prevPosition = 0
    startPosition = -2

    debounce = function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    fetch = e => {
        if(this.refs.iconWrapper.scrollLeft > this.prevPosition && this.refs.iconWrapper.scrollLeft >= (this.state.clientWidth - this.refs.iconWrapper.clientWidth) - 1.5*96)
        {
            if(this.startPosition < -0)
            {
                this.startPosition = this.refs.iconWrapper.scrollLeft
                return
            }
            if(this.startPosition + this.refs.iconWrapper.scrollLeft < 24)
            {
                return
            }

            const indexHead = (this.state.indexHead + 1) % (this.state.ogIndexTrail + 1)
            let items =  [...this.state.items, this.props.children[indexHead]]

            this.startPosition = -2
            this.setState({items, indexHead, clientWidth: 96*items.length})
        }
        else if(this.refs.iconWrapper.scrollLeft < this.prevPosition && this.refs.iconWrapper.scrollLeft <= 1.5*96)
        {
            if(this.startPosition < 0)
            {
                this.startPosition = this.refs.iconWrapper.scrollLeft
                return
            }
            if(this.startPosition - this.refs.iconWrapper.scrollLeft < 24)
            {
                return
            }
    
            const indexTrail = this.state.indexTrail == 0 ? this.state.ogIndexTrail : (this.state.indexTrail - 1)
            let items =  [this.props.children[indexTrail], ...this.state.items]

            this.startPosition = -2
            this.setState({items, indexTrail, clientWidth: 96*items.length})
        }
        else
            this.startPosition = -2
        this.prevPosition = this.refs.iconWrapper.scrollLeft
    } 

    fetchAccessPoint = this.debounce(this.fetch, 2)

    animationID = null

    componentDidMount() {
        this.prevPosition = this.refs.iconWrapper.scrollLeft
        this.refs.iconWrapper.scrollLeft = (this.state.clientWidth - this.refs.iconWrapper.clientWidth) / 2

        this.animationID = setInterval(() => {
            this.refs.iconWrapper.scrollLeft = this.refs.iconWrapper.scrollLeft + this.props.speed
        }, 50)
    }

    componentWillUnmount() {
        clearInterval(this.animationID)
    }

    render() {
        let i = 0;
        return (
            <div className={styles.card + ' ' + (this.props.className ? this.props.className : '') + ' ' + palettes.card} ref='skillcard' style={this.props.style}>
                <div className={styles.iconWrapper} ref='iconWrapper' onScrollCapture={this.fetchAccessPoint}>
                {
                    this.state.items.map(child => <div key={i++} className={styles.item}>{child}</div>)
                }
                </div>
                
            </div>
        )
    }
}

export default SkillCard
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from './header.module.css'

const Header = ({children}) => (
  <header >
    {children}
  </header>
)


export default Header
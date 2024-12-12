import React from 'react'
import PropTypes from 'prop-types'

export default function Header({title}) {
    return <header className="header">{title}</header>;
}

Header.propTypes = {
    title: PropTypes.string
  }
  
  Header.defaultProps = {
    title: 'React App'
  }
  
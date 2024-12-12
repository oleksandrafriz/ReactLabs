import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css'

export default function Header({ title, links }) {
  return (
      <header className={styles.header}>
          <h1>{title}</h1>
          <nav>
              <ul className={styles.navLinks}>
                  {links.map((link, index) => (
                      <li key={index}>
                          <a href={link.href}>{link.label}</a>
                      </li>
                  ))}
              </ul>
          </nav>
      </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
      PropTypes.shape({
          href: PropTypes.string,
          label: PropTypes.string,
      })
  ),
};

Header.defaultProps = {
  title: 'React App',
  links: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
  ],
};

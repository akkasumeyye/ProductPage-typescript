import React from 'react'
import styles from './Navbar.module.css'

const Navbar : React.FC = () => {
  return (
    <nav className = {styles['navbar']}>
        <span>LOGO</span>
        <span>My Cart</span>
    </nav>
  )
}

export default Navbar ;
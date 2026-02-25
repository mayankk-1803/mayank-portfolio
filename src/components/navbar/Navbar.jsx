import React from 'react'
import "./navbar.scss"
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}} >Mayank Mathur</motion.span>
            <div className="social">
                <a href="#"><img src="/github.webp" alt="github" /></a>
                <a href="#"><img src="/linkedin.jpg" alt="linkedin" /></a>
                <a href="#"><img src="/instagram.png" alt="instagram" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
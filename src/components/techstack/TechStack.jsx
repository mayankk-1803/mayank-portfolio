import React, { useRef } from 'react'
import "./techstack.scss"
import { motion, useInView } from 'framer-motion'


const variants = {
    initial:{
        x:-500,
        y:100,
        opacity: 0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const TechStack = () => {

    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div className='techstack' variants={variants} initial="initial" ref={ref} animate={ window.innerWidth<= 738 ? "animate" : isInView && "animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>Tools and technologies I use to build<br /> modern web applications</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/techstack.png" alt="" />
                <h1>My <motion.b whileHover={{color:"purple"}}>Tech-Stack</motion.b></h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"purple"}}>Technologies</motion.b> I Work With</h1>
                <button>My Tech Stack</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>

{/* Desktop Boxes */}

<div className="desktopBoxes">

<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
<h2>Frontend Development</h2>
<ul>
<li>HTML5</li>
<li>CSS</li>
<li>JavaScript</li>
<li>React.js</li>
<li>TailwindCSS</li>
<li>Framer Motion</li>
</ul>
<a href='#Projects'><button>Explore</button></a>
</motion.div>


<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
<h2>Backend Development</h2>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>
<li>Firebase</li>
<li>REST APIs</li>
<li>JWT Auth</li>
</ul>
<a href='#Projects'><button>Explore</button></a>
</motion.div>


<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
<h2>Tools & Technologies</h2>
<ul>
<li>Git & GitHub</li>
<li>Postman</li>
<li>VS Code</li>
<li>Netlify</li>
<li>Vercel</li>
<li>Render</li>
</ul>
<a href='#Projects'><button>Explore</button></a>
</motion.div>


<motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
<h2>Cloud & Other Skills</h2>
<ul>
<li>AWS EC2</li>
<li>AWS S3</li>
<li>API Integration</li>
<li>Responsive Design</li>
</ul>
<a href='#Projects'><button>Explore</button></a>
</motion.div>

</div>


{/* Mobile Single Box */}

<motion.div className="mobileBox">

<h2>My Skills</h2>

<ul>

<li>HTML5</li>
<li>CSS</li>
<li>JavaScript</li>
<li>React.js</li>
<li>TailwindCSS</li>
<li>Framer Motion</li>

<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>
<li>Firebase</li>

<li>Git & GitHub</li>
<li>Postman</li>
<li>Netlify</li>
<li>Vercel</li>
<li>Render</li>

<li>AWS EC2</li>
<li>AWS S3</li>
<li>API Integration</li>
<li>Responsive Design</li>

</ul>

<a href='#Projects'><button>Explore</button></a>

</motion.div>

</motion.div>
    </motion.div>
  )
}

export default TechStack
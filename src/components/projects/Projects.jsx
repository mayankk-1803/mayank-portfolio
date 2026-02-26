import React, { useRef } from 'react'
import "./projects.scss"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id:1,
        title:"AI Content Generation SaaS Platform",
        img:"/quick.png",
        desc:"A full-stack AI SaaS platform that generates high-quality content using AI APIs.Includes secure authentication, subscription-ready architecture, and a modern responsive interface."
    },
    {
        id:2,
        title:"Prime Origin Exports",
        img:"/prime.png",
        desc:"Developed a professional business website for Prime Origin Exports to showcase import and export services, products, and company information. The website features a responsive design, modern UI, and structured product presentation to improve online business visibility."
    },
    {
        id:3,
        title:"Nearby Places Recommender",
        img:"/places.png",
        desc:"Developed a location-based web application that recommends nearby places using React.js and OpenStreetMap APIs. The application detects the user's live location and provides real-time place suggestions along with interactive maps and navigation features."
    },
    {
        id:4,
        title:"Chat Application",
        img:"/chat.png",
        desc:"Developed a real-time chat application using the MERN stack that allows users to communicate instantly through secure messaging. The application includes user authentication, real-time message synchronization, and a responsive user interface."
    },
]

const Single = ({item}) => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:["start start", "end start"] }) 
    const y = useTransform(scrollYProgress, [0,1],["0%","-300%"])
    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:["end end","start start"]})
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })

  return (
    <div className='projects' ref={ref}>
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div style={{scaleX}} className="progressBar">
            </motion.div>
        </div>
        {items.map(item => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Projects
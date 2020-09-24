import React, {useState} from "react"
import {Link, Redirect} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    const [show,setShow] = useState(false)
    const [random,setRandom] = useState(null) 
    const [clicked,setClick] = useState(false)
    function handleClick(e) {
        let max = 3
        let random =  Math.floor(Math.random() * Math.floor(max)) + 1;
        setClick(!clicked)
        setRandom(random)
    }
    function handleShow() {
      setShow(!show)
    }
  
    return (
        <div className ="header">
        <button onClick ={handleShow}><FontAwesomeIcon icon={faHamburger} /></button>
        {show ? 
        <div className = "nav">
        <ul>
            <li> <Link to ="/">Home</Link></li>
            <li><Link to ="/Blog">Blog</Link></li> 
            <li onClick ={handleClick}>Random </li>
        </ul>
    </div>
    : null }
      {clicked ? random == 1 ? <Redirect to = "/"/> : <Redirect to = {`/day/${random}`} /> : null }
    </div>
    )
}
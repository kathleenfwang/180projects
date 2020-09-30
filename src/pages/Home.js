import React, {useRef,useState} from "react"
import Projects from "./Projects"
import Day from "./Day"
import {Link, Redirect} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
export default function Home() {
    const projList = useRef(null)
    const [clicked,setClick] = useState(false)
    const [randomNum,setRandomNum] = useState(null)
    const [recentTitle,setRecentTitle] = useState(null)
    function handleClick(e) {
        let max = (projList.current.children.length)
 
        let randomNum =  Math.floor(Math.random() * Math.floor(max)) + 1;
        console.log(randomNum)
        setClick(!clicked)
        setRandomNum(randomNum)
     
    }
    function days() {
        let daysList = []
        let days = [
            "Text Analyzer","Pixel Art Maker","Plant Library","Picture Canvas","feelings","Animation Practice","Solar System","This Website"]
            for (let i = days.length;i>0;i--)
             daysList.push(<Day i = {i} title = {days[days.length - i]} /> )
        return [days,daysList]
    }
    function handleRecent() {
        let max = (projList.current.children.length)
        setClick(!clicked)
        setRandomNum(max)
    }
     
    return (
        <div className="home">
            <div className="firstPanel">
                <div className="pic">
                </div>
                <div>
                    <div>
                        <h1>Hi, I'm Kathleen Wang!</h1>
                        <div className ="flex"  >
                        <p>Software Engineer</p>
                        <div style ={{fontSize:20}} className ='flex' >
                        <p><FontAwesomeIcon icon ={faGithub}/></p>
                        <p><FontAwesomeIcon icon ={faLinkedin}/></p>
                        </div>
                        </div>
                    </div>
                    <div className="desc">
                        <p>I enjoy working with multiple problems. I love design and want to study the interesection between art and coding! Also a sucker for pixel art apparently.</p>
                    </div>
                    <div>
                    </div>
                    <div className>
                <div>
                    <h1> Projects: <span className ="smallTxt">180 React Projects in 180 Days!</span></h1>
                        <p><i> Inspired by Jennifer Dewalt's <a href="https://jenniferdewalt.com/" target="_blank"> 180 Projects in 180 Days</a></i></p>
                </div>
                <div className="projectList">
                    <button className ="whiteButton" onClick = {handleClick}> Feeling Lucky </button>
                    <button className ="blueButton" onClick = {handleRecent}> Most Recent: <span style ={{color:"moccasin"}}>{days()[0][0]}</span></button>
                    <ul ref = {projList}>
                        {days()[1]}
    
                    </ul>
                </div>
                {clicked ? randomNum == 1 ? <Redirect to = "/"/> : <Redirect to = {`/day/${randomNum}`} /> : null }
            </div>
                </div>

            </div>
            
        </div>

    )
}
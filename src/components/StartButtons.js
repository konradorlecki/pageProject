import React, {Component} from 'react';
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";

class StartButtons extends Component{
    render() {
        return(
            <div className='startButtons'>
                <NavLink
                   exact to="/"
                >Start</NavLink>
                <Link
                    activeClass="active"
                    to="OCB"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                >O co chodzi</Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                >O nas</Link>
                <Link
                    activeClass="active"
                    to="foundation"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                >Fundacja i organizacje</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                >Kontakt</Link>
            </div>
        )
    }
}
export default StartButtons
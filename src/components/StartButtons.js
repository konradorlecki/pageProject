import React, {Component} from 'react';
import {Link} from "react-scroll";

class StartButtons extends Component{
    render() {
        return(
            <div className='startButtons'>
                <p><Link
                    activeClass="active"
                    to="start"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                >Start</Link></p>
                <p><Link
                    activeClass="active"
                    to="OCB"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                >O co chodzi</Link></p>
                <p><Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                >O nas</Link></p>
                <p><Link
                    activeClass="active"
                    to="foundation"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                >Fundacja i organizacje</Link></p>
                <p><Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                >Kontakt</Link></p>
            </div>
        )
    }
}
export default StartButtons
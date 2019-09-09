import React,{Component} from 'react'
import Icon1 from '../assets/Icon-1.svg'
import Icon2 from '../assets/Icon-2.svg'
import Icon3 from '../assets/Icon-3.svg'
import Icon4 from '../assets/Icon-4.svg'
import Decoration from '../assets/Decoration.svg'
import '../scss/SimpleSteps.scss'
import {Link} from "react-router-dom";
class SimpleSteps extends Component{
    render() {
        return(
            <div className='simpleSteps' id='OCB'>
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={Decoration} alt='Decoration'/>
                <div>
                    <div>
                        <div>
                            <img src={Icon1} alt='Icon1'/>
                            <h2>Wybierz rzeczy</h2>
                            <hr/>
                            <p>ubrania, zabawki, sprzęt i inne</p>
                        </div>
                        <div>
                            <img src={Icon2} alt='Icon2'/>
                            <h2>Spakuj je</h2>
                            <hr/>
                            <p>skorzystaj z worków na śmieci</p>
                        </div>
                        <div>
                            <img src={Icon3} alt='Icon3'/>
                            <h2>Zdecyduj komu chcesz pomóc</h2>
                            <hr/>
                            <p>wybierz zaufane miejsce</p>
                        </div>
                        <div>
                            <img src={Icon4} alt='Icon4'/>
                            <h2>Zamów kuriera</h2>
                            <hr/>
                            <p>kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
                <div><p><Link to='/login'>ODDAJ RZECZY</Link></p></div>
            </div>
        )
    }
}
export default SimpleSteps
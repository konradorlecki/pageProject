import React,{Component} from 'react'
import HomeHero from '../assets/Home-Hero-Image.jpg'
import Decoration from '../assets/Decoration.svg'
import "../scss/HomeHeader.scss"
import {Link} from "react-router-dom";
import StartButtons from '../components/StartButtons'
class HomeHeader extends Component{
    render() {
        return(
            <div className='container flex' id='start'>
                <img src={HomeHero} alt='Home'/>
                <div style={{width:'100%'}}>
                    <div className='loginButtons'>
                        <p><Link to='/login'>Zaloguj</Link></p>
                        <p><Link to='/register'>Załóż konto</Link></p>
                    </div>
                    <StartButtons/>
                    <div className='decoration'>
                        <h2>Zacznij Pomagać!</h2>
                        <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <img src={Decoration} alt='Decoration'/>
                        <div className='niceButtons'>
                            <div><p><Link to='/login'>ODDAJ<br/> RZECZY</Link></p></div>
                            <div><p><Link to='/login'>ZORGANIZUJ<br/> ZBIÓRKĘ</Link></p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeHeader;
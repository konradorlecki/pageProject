import React,{Component} from 'react'
import {Link} from "react-router-dom";
import StartButtons from "./StartButtons";
import Decoration from "../assets/Decoration.svg";
import '../scss/components/logout.scss'
class Logout extends Component{
    render() {
        return(
            <>
            <div className='login'>
                <div className='buttons'>
                    <p><Link to='/login'>Zaloguj</Link></p>
                    <p><Link to='/register'>Załóż konto</Link></p>
                </div>
                <div>
                    <StartButtons/>
                </div>
            </div>
                <div className='logout'>
                    <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                    <img src={Decoration} alt='Decoration'/>
                    <p><Link to='/'>Strona Główna</Link></p>
                </div>
            </>
        )
    }
}
export default Logout
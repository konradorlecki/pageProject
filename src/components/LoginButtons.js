import {Link} from "react-router-dom";
import React,{Component} from "react";
class LoginButtons extends Component{
    clear= () =>{
        sessionStorage.clear()
    }
    render() {
        console.log(sessionStorage.getItem('email'))
        if(sessionStorage.getItem('email')===null){
        return(
            <div className='loginButtons'>
                <Link to='/login'>Zaloguj</Link>
                <Link to='/register'>Załóż konto</Link>
            </div>
        )}else {
            return(
                <div className='loginButtons'>
                    <p>{sessionStorage.getItem("email")}</p>
                    <Link to='/logout' onClick={this.clear}>Wyloguj</Link>
                    <Link to='/formularz'>Oddaj Rzeczy</Link>
                </div>
            )

        }
    }
}
export default LoginButtons;

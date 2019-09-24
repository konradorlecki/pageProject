import React,{Component} from 'react'
import {Link,withRouter} from "react-router-dom";
import StartButtons from "./StartButtons";
import Decoration from "../assets/Decoration.svg";
import '../scss/components/register.scss'

import { FirebaseContext, } from './Firebase';
import SignupForm from "./SignupForm";
const SignUpBase = withRouter(SignupForm);
class Register extends Component{

    render() {
        return(
            <div className='login'>
                <div className='buttons'>
                    <p><Link to='/login'>Zaloguj</Link></p>
                    <p><Link to='/register'>Załóż konto</Link></p>
                </div>
                <div>
                    <StartButtons/>
                </div>
                <div>
                    <h2>Załóż konto</h2>
                    <img src={Decoration} alt='Decoration'/>
                </div>
                <div className='register'>
                    <FirebaseContext.Consumer>
                        {firebase => <SignUpBase firebase={firebase} />}
                    </FirebaseContext.Consumer>
                </div>
            </div>
        )
    }
}
export default Register
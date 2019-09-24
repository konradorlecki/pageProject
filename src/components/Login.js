import React,{Component} from 'react'
import '../scss/components/login.scss'
import SignIn from "./SignIn";
import { FirebaseContext } from './Firebase';
import {withRouter} from 'react-router-dom'
const SignInBase = withRouter(SignIn);
class Login extends Component{
    render() {
        return(
            <FirebaseContext.Consumer>
                {firebase => <SignInBase firebase={firebase} />}
            </FirebaseContext.Consumer>
        )
    }
}
export default Login

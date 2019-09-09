import React,{Component} from 'react'
import {Link} from "react-router-dom";
import StartButtons from "./StartButtons";
import '../scss/login.scss'
import Decoration from '../assets/Decoration.svg'
class Login extends Component{
    state={
        email:'',
        password:'',
        emailColor:'transparent',
        passwordColor:'transparent',
        hrEmailColor: '#737373',
        hrPassColor: '#737373'
    }
    validation=(e)=>{
        e.preventDefault();
        if(this.validateEmail()=== false){
            this.setState({emailColor:'red'})
            this.setState({hrEmailColor:'red'})
        }else{
            this.setState({emailColor:'transparent'})
            this.setState({hrEmailColor:'#737373'})
        }
        if(this.validatePassword()===false){
            this.setState({hrPassColor:'red'})
            this.setState({passwordColor:'red'})
        }else{
            this.setState({hrPassColor:'#737373'});
            this.setState({passwordColor:'transparent'})
        }

       this.validateEmail();
       this.validatePassword();
    }
    validatePassword=()=>{
        return this.state.password.length >= 6;
    }
    validateEmail=()=> {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
    }
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
                    <h2>Zaloguj się</h2>
                    <img src={Decoration} alt='Decoration'/>
                <div>
                    <div>
                        <p>Email</p>
                        <input type='email' onChange={(e)=> this.setState({email:e.target.value})}/>
                        <hr style={{background:this.state.hrEmailColor}}/>
                        <p style={{color:this.state.emailColor}}>Podany email jest nieprawidłowy!</p>
                        <p>Hasło</p>
                        <input type='password' onChange={(e)=> this.setState({password:e.target.value})}/>
                        <hr style={{background:this.state.hrPassColor}}/>
                        <p style={{color:this.state.passwordColor}}>Podane hasło jest za krótkie!</p>
                    </div>
                </div>
                </div>
                <div className='lgButton'>
                    <button><Link to='/register'>Załóż konto</Link></button>
                    <button onClick={this.validation}>Zaloguj się</button>
                </div>
            </div>


        )
    }
}
export default Login

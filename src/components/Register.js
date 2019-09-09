import React,{Component} from 'react'
import {Link} from "react-router-dom";
import StartButtons from "./StartButtons";
import Decoration from "../assets/Decoration.svg";
import '../scss/register.scss'
class Register extends Component{
    state={
        email:'',
        password:'',
        password2:'',
        hrEmailColor:'',
        emailColor:'transparent',
        hrPassColor:'',
        passwordColor:'transparent',
        hrPassword2Color:'',
        password2Color:'transparent',
    }
    validation=(e)=>{
        e.preventDefault();
        this.validateEmail();
        this.passwordValidation();
        this.password2Validation();
        if(this.validateEmail()=== false){
            this.setState({emailColor:'red'})
            this.setState({hrEmailColor:'red'})
        }else{
            this.setState({emailColor:'transparent'})
            this.setState({hrEmailColor:'#737373'})
        }
        if(this.passwordValidation()===false){
            this.setState({hrPassColor:'red'})
            this.setState({passwordColor:'red'})
        }else{
            this.setState({hrPassColor:'#737373'});
            this.setState({passwordColor:'transparent'})
        }if(this.password2Validation()===false){
            this.setState({hrPassword2Color:'red'})
            this.setState({password2Color:'red'})
        }else{
            this.setState({hrPassword2Color:'#737373'});
            this.setState({password2Color:'transparent'})
        }
    }
    validateEmail=()=> {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
    }
    passwordValidation=()=>{
        return this.state.password.length >= 6;
    }
    password2Validation=()=>{
        return this.state.password2.length >= 6 && this.state.password === this.state.password2;
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
                    <h2>Załóż konto</h2>
                    <img src={Decoration} alt='Decoration'/>
                </div>
                <div className='register'>
                    <div >
                        <p>Email</p>
                        <input type='email' onChange={(e)=> this.setState({email:e.target.value})}/>
                        <hr style={{background:this.state.hrEmailColor}}/>
                        <p style={{color:this.state.emailColor}}>Podany email jest nieprawidłowy!</p>
                        <p>Hasło</p>
                        <input type='password' onChange={(e)=> this.setState({password:e.target.value})}/>
                        <hr style={{background:this.state.hrPassColor}}/>
                        <p style={{color:this.state.passwordColor}}>Podane hasło jest za krótkie!</p>
                        <p>Powtórz hasło</p>
                        <input type='password' onChange={(e)=> this.setState({password2:e.target.value})}/>
                        <hr style={{background:this.state.hrPassword2Color}}/>
                        <p style={{color:this.state.password2Color}}>Podane hasła nie są identyczne</p>
                    </div>
                </div>
                <div className='lgButton'>
                    <button onClick={this.validation}>Załóż konto</button>
                    <button><Link to='/login'>Zaloguj się</Link></button>
                </div>
            </div>
        )
    }
}
export default Register
import {Link} from "react-router-dom";
import StartButtons from "./StartButtons";
import Decoration from "../assets/Decoration.svg";
import React,{Component} from "react";
class SignIn extends Component{
    state={
        email:'',
        password:'',
        emailColor:'transparent',
        passwordColor:'transparent',
        hrEmailColor: '#737373',
        hrPassColor: '#737373'
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        },()=>{
            this.validation()
        });
    }
    validation=()=>{
        if(this.validateEmail()=== false){
            this.setState({emailColor:'red', hrEmailColor:'red'})
        }else{
            this.setState({emailColor:'transparent', hrEmailColor:'#737373'})
        }
        if(this.validatePassword()===false){
            this.setState({hrPassColor:'red',passwordColor:'red'})
        }else{
            this.setState({hrPassColor:'#737373', passwordColor:'transparent'});
        }
        this.validateEmail();
        this.validatePassword();
    }
    validatePassword=()=>{
        return this.state.password.length >= 6;
    }
    validateEmail=()=> {
        // eslint-disable-next-line no-useless-escape
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
    }
    onSubmit = event => {
        this.validation();
        event.preventDefault();
        if(this.validateEmail()=== true && this.validatePassword()=== true){
            this.props.firebase.doSignInWithEmailAndPassword(this.state.email, this.state.password)
                .then(authUser => {
                    sessionStorage.setItem('email', `${this.state.email}`);
                    console.log(authUser);
                    this.props.history.push('/');
                    this.setState({email:'', password:''});
                })
                .catch(error => {
                    this.setState({ error });
                    console.log('not gicik');
                });
        }}
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
                            <input name='email' type='email' onChange={this.handleChange}/>
                            <hr style={{background:this.state.hrEmailColor}}/>
                            <p style={{color:this.state.emailColor}}>Podany email nieprawidłowy!</p>
                            <p>Hasło</p>
                            <input name='password' type='password' onChange={this.handleChange}/>
                            <hr style={{background:this.state.hrPassColor}}/>
                            <p style={{color:this.state.passwordColor}}>Podane hasło za krótkie!</p>
                        </div>
                    </div>
                </div>
                <div className='lgButton'>
                    <button><Link to='/register'>Załóż konto</Link></button>
                    <button onClick={this.onSubmit}>Zaloguj się</button>
                </div>
            </div>
        )
    }
}
export default SignIn

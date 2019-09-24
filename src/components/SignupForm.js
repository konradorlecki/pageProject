import React,{Component} from "react";
import {Link} from "react-router-dom";
class SignupForm extends Component{
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
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        },()=>this.validation());
    }
    validation=(e)=>{
        this.validateEmail();
        this.passwordValidation();
        this.password2Validation();
        if(this.validateEmail()=== false){
            this.setState({emailColor:'red', hrEmailColor:'red'})
        }else{
            this.setState({emailColor:'transparent', hrEmailColor:'#737373'})
        }
        if(this.passwordValidation()===false){
            this.setState({hrPassColor:'red', passwordColor:'red'})
        }else{
            this.setState({hrPassColor:'#737373', passwordColor:'transparent'});
        }if(this.password2Validation()===false){
            this.setState({hrPassword2Color:'red',password2Color:'red'})
        }else{
            this.setState({hrPassword2Color:'#737373',password2Color:'transparent'});
        }
    }
    validateEmail=()=> {
        // eslint-disable-next-line no-useless-escape
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
    }
    passwordValidation=()=>{
        return this.state.password.length >= 6;
    }
    password2Validation=()=>{
        return this.state.password2.length >= 6 && this.state.password === this.state.password2;
    }
    onSubmit = event => {
        event.preventDefault();
        if(this.validateEmail()=== true && this.passwordValidation()=== true && this.password2Validation()===true){
        this.props.firebase.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(authUser => {
                sessionStorage.setItem('email', `${this.state.email}`);
                this.setState({email:'', password:''});
                console.log('gicik');
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ error });
                console.log('not gicik');
            });
    }}
    render() {
        return(
            <>
            <div>
                <p>Email</p>
                <input name='email' type='email' onChange={this.handleChange}/>
                <hr style={{background:this.state.hrEmailColor}}/>
                <p style={{color:this.state.emailColor}}>Podany email nieprawidłowy!</p>
                <p>Hasło</p>
                <input name='password' type='password' onChange={this.handleChange}/>
                <hr style={{background:this.state.hrPassColor}}/>
                <p style={{color:this.state.passwordColor}}>Podane hasło za krótkie!</p>
                <p>Powtórz hasło</p>
                <input name='password2' type='password' onChange={this.handleChange}/>
                <hr style={{background:this.state.hrPassword2Color}}/>
                <p style={{color:this.state.password2Color}}>Hasła muszą być identyczne</p>
            </div>
                <div className='registerBtn'>
                    <button onClick={this.onSubmit}>Załóż konto</button>
                    <button><Link to='/login'>Zaloguj się</Link></button>
                </div>
            </>
        )
    }
}
export default SignupForm;
import React, {Component} from 'react'
import BackgroundForm from '../assets/Background-Contact-Form.jpg'
import Decoration from '../assets/Decoration.svg'
import '../scss/components/Contact.scss'
class Contact extends Component{
    state={
        name:'',
        nameAccept:0,
        email:'',
        emailAccept:0,
        message:'',
        messageAccept:0,
        nameColor: 'transparent',
        emailColor: 'transparent',
        messageColor: 'transparent',
        nameHrColor:'',
        emailHrColor:'',
        messageHrColor:'',
        informationColor:''
    }
    handleChange = e => {
        this.validation();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validationV2 = (e) =>{
        e.preventDefault();
        this.sendInfo();
        this.posting();
        // this.validateEmail();
    }
    validation = ()=>{
        if(this.state.name.indexOf(' ') === -1 && this.state.name.length > 0){
            this.setState({nameAccept:1})
            this.setState({nameColor:'transparent' , nameHrColor:'#737373'})
        }else{
            this.setState({nameColor:'red' , nameHrColor:'red'})
        }
        if(this.state.email.indexOf('@') !== -1 && this.state.email.length >0){
            this.setState({emailAccept:1})
            this.setState({emailColor:'transparent', emailHrColor:'#737373'})
        }else{
            this.setState({emailColor:'red', emailHrColor:'red'})
        }
        if(this.state.message.length > 120){
            this.setState({messageAccept:1})
            this.setState({messageColor:'transparent', messageHrColor:'#737373'})
        }else{
            this.setState({messageColor:'red', messageHrColor:'red'})
        }
    }
    sendInfo=()=>{
        if(this.state.nameAccept === 1 && this.state.emailAccept === 1 && this.state.messageAccept ===1) {
            this.setState({informationColor: 'green'})
    }}
    validateEmail=()=> {
        // eslint-disable-next-line no-useless-escape
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(String(this.state.email).toLowerCase());
    }
    posting=()=>{
        if(this.state.nameAccept === 1 && this.state.emailAccept === 1 && this.state.messageAccept ===1) {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
                method:"POST",
                headers:{
                    'Content-Type': "application/json"
                },
                body:JSON.stringify({
                    name:this.state.name,
                    email:this.state.email,
                    message:this.state.message,
                })
            }).then(function (response) {
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.text())
            }).catch(function (error) {
                console.log(error);
            })

        }}
    render() {
        return(
            <div className='contact'>
                <img src={BackgroundForm} alt="BackgroundForm"/>
                <div>
                    <h2>Skontaktuj się z nami</h2>
                    <img src={Decoration} alt='Decoration'/>
                    <p style={{color:this.state.informationColor}} >Wiadomość została wysłana! Wkrótce się z tobą skontaktujemy</p>
                    <form>
                        <div>
                            <p>Wpisz swoje imię</p>
                            <input name='name' type='name' placeholder='Krzysztof' value={this.state.name} onChange={this.handleChange}/>
                            <hr style={{background:this.state.nameHrColor}}/>
                            <p style={{color:this.state.nameColor}}>Podane imię nieprawidłowe</p>
                        </div>
                        <div>
                            <p>Wpisz swój email</p>
                            <input name='email' type='email' placeholder='abc@xyz.pl' value={this.state.email} onChange={this.handleChange}/>
                            <hr style={{background:this.state.emailHrColor}}/>
                            <p style={{color:this.state.emailColor}}>Podany email nieprawidłowy</p>
                        </div>
                        <p>Wpisz swoją wiadomość</p>
                        <textarea type='text' name='message' value={this.state.message} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ligula a lacinia pulvinar. Pellentesque quis ultricies sem, nec laoreet nisl.Donec tincidunt ligula a lacinia pulvinar.' onChange={this.handleChange}/>
                        <hr style={{background:this.state.messageHrColor}}/>
                        <p style={{color:this.state.messageColor}}>Wiadomość musi zawierać co najmniej 120 znaków</p>
                        <button onClick={this.validationV2}>Wyślij</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Contact
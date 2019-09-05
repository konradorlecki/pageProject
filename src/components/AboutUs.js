import React,{Component} from 'react';
import People from '../assets/People.jpg'
import Decoration from '../assets/Decoration.svg'
import Signature from '../assets/Signature.svg'
import '../scss/aboutUs.scss'
class AboutUs extends Component{
    render() {
        return(
            <div className='aboutUs' id='about'>
                <div>
                    <p>O nas</p>
                    <img src={Decoration}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et faucibus mauris. Donec rutrum, augue vel bibendum iaculis, nibh velit hendrerit nibh.</p>
                    <img src={Signature}/>
                </div>
                <img src={People}/>

            </div>
        )
    }
}
export default AboutUs
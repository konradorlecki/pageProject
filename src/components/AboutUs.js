import React,{Component} from 'react';
import People from '../assets/People.jpg'
import Decoration from '../assets/Decoration.svg'
import Signature from '../assets/Signature.svg'
import '../scss/components/aboutUs.scss'
class AboutUs extends Component{
    render() {
        return(
            <div className='aboutUs' id='about'>
                <div>
                    <p>O nas</p>
                    <img src={Decoration} alt='Decoration'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et faucibus mauris. Donec rutrum, augue vel bibendum iaculis, nibh velit hendrerit nibh.</p>
                    <img src={Signature} alt='Signature'/>
                </div>
                <img src={People} alt='People'/>

            </div>
        )
    }
}
export default AboutUs
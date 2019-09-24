import React,{Component} from 'react';
import HomeHeader from '../components/HomeHeader';
import '../scss/components/HomeHeader.scss'
import Stats from '../components/Stats'
import SimpleSteps from "./SimpleSteps";
import AboutUs from '../components/AboutUs'
import Foundation from '../components/Foundation'
import Contact from '../components/Contact'
class Home extends Component{
    render() {
        return(
            <>
            <HomeHeader/>
            <Stats/>
            <SimpleSteps/>
            <AboutUs/>
            <Foundation/>
            <Contact/>
            </>
        )
    }
}
export default Home


import React,{Component} from 'react';
import HomeHeader from '../components/HomeHeader';
import '../scss/HomeHeader.scss'
import Stats from '../components/Stats'
import SimpleSteps from "./SimpleSteps";
import AboutUs from '../components/AboutUs'
import Foundation from '../components/Foundation'
class Home extends Component{
    render() {
        return(
            <>
            <HomeHeader/>
            <Stats/>
            <SimpleSteps/>
            <AboutUs/>
            </>
        )
    }
}
export default Home

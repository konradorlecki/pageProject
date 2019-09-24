import React,{Component} from 'react'
import '../scss/components/Stats.scss'
class Stats extends Component{
    render() {
        return(
            <div className='stats'>
                <div className='contain'>
                    <div>
                        <p>10</p>
                        <h2>ODDANYCH WORKÓW</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                    </div>
                    <div>
                        <p>5</p>
                        <h2>WSPARTYCH ORGANIZACJI</h2>
                        <p> Nunc scelerisque dui a est ullamcorper, non mattis sem venenatis. </p>
                    </div>
                    <div>
                        <p>7</p>
                        <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                        <p>In eu sagittis diam, vel vestibulum orci. Nulla accumsan condimentum nisi.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stats
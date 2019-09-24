import React, {Component} from 'react';
import '../scss/components/foundation.scss'
import Decoration from '../assets/Decoration.svg'
import Pick from '../components/Pick'
class Foundation extends Component{
    state={
        number: 1,
    }
    render() {
            return(
            <div className='foundation'>
                <div>
                    <h2>Komu pomagamy?</h2>
                    <img src={Decoration} alt='Decoration'/>
                </div>
                <div>
                    <div onClick={()=>this.setState({number:1})}><p>Fundacjom</p></div>
                    <div onClick={()=>this.setState({number:2})}><p>Organizacjom <br/>pozarządowym</p></div>
                    <div onClick={()=>this.setState({number:3})}><p>Lokalnym<br/> zbiórkom</p></div>
                </div>
                <Pick number={this.state.number}/>
            </div>
        )
    }
}
export default Foundation
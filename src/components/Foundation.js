import React, {Component} from 'react';
import '../scss/foundation.scss'
import Decoration from '../assets/Decoration.svg'
class Foundation extends Component{
    render() {
            return(
            <div>
                <div>
                    <p>Komu pomagamy?</p>
                    <img src={Decoration}/>
                </div>
                <div>
                    <p>Fundacjom</p>
                    <p>Organizacjom pozarządowym</p>
                    <p>Lokalnym zbiórkom</p>
                </div>
            </div>
        )
    }
}
export default Foundation
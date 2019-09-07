import React,{Component} from 'react'
import FoundationInfo from '../components/FoundationInfo'
import OrganisationInfo from '../components/OrganisationInfo'
import LocalInfo from "./LocalInfo";
class Pick extends Component{
    state={
        counter:1,
    }
    render() {
        if(this.props.number === 1){
        return(
            <>
                <p>W naszej bazie zanjdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <FoundationInfo counter={this.state.counter}/>
                <div>
                    <div onClick={()=>this.setState({counter:1})}>1</div>
                    <div onClick={()=>this.setState({counter:2})}>2</div>
                    <div onClick={()=>this.setState({counter:3})}>3</div>
                </div>
            </>
        )}else if (this.props.number === 2){
            return (
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ligula a lacinia pulvinar. Pellentesque quis ultricies sem, nec laoreet nisl.</p>
                    <OrganisationInfo counter={this.state.counter}/>
                    <div>
                        <div onClick={()=>this.setState({counter:1})}>1</div>
                        <div onClick={()=>this.setState({counter:2})}>2</div>
                    </div>
                </>
            )
        }else if(this.props.number === 3){
            return (
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ligula a lacinia pulvinar. Pellentesque quis ultricies sem, nec laoreet nisl.</p>
                    <LocalInfo counter={this.state.counter}/>
                </>
            )
        }
    }
}

export default Pick
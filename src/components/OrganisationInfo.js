import React,{Component} from 'react'

class OrganisationInfo extends Component {
    render() {
        if (this.props.counter === 1) {
            return (
                <div>
                    <div>
                        <h2>Organizacja "Lorem Ipsum 1"</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <p>Curabitur et lorem a lacus sollicitudin varius</p>
                    <hr/>
                    <div>
                        <h2>Organizacja "Lorem Ipsum 2"</h2>
                        <p>Suspendisse pellentesque dignissim efficitur</p>
                    </div>
                    <p>Nunc tristique nulla ac sem imperdiet</p>
                    <hr/>
                    <div>
                        <h2>Organizacja "Lorem Ipsum 3"</h2>
                        <p> Nunc vehicula, nisl a rutrum facilisis, risus ex ultricies tortor</p>
                    </div>
                    <p>eu convallis lacus lectus ac ante</p>
                </div>
            )
        } else if (this.props.counter === 2) {
            return (
                <div>
                    <div>
                        <h2>Organizacja "Lorem Ipsum 1"</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <p>Donec tincidunt ligula a lacinia pulvinar</p>
                    <hr/>
                    <div>
                        <h2>Organizacja "Lorem Ipsum 2"</h2>
                        <p>Pellentesque quis ultricies sem, nec laoreet nisl</p>
                    </div>
                    <p>Nam sit amet sem facilisis, auctor orci et</p>
                    <hr/>
                    <div>
                        <h2>Organizacja "Lorem Ipsum 3"</h2>
                        <p>Donec eget quam eget nulla laoreet varius</p>
                    </div>
                    <p>Integer eget diam nec sem aliquet posuere</p>
                </div>
            )
        }
    }
}
export default OrganisationInfo
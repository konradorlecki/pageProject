import React,{Component} from 'react'

class FoundationInfo extends Component{
    render() {
        if(this.props.counter === 1) {
            return (
                <div>
                    <div>
                        <h2>Fundacja "Dbam o Zdrowie"</h2>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                    </div>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    <hr/>
                    <div>
                        <h2>Fundacja "Dla dzieci"</h2>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin</p>
                    </div>
                    <p>ubrania, meble, zabawki</p>
                    <hr/>
                    <div>
                        <h2>Fundacja "Bez domu"</h2>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>
                    </div>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </div>
            )
        }else if(this.props.counter === 2){
            return (
                <div>
                    <div>
                        <h2>Fundacja "Lorem Ipsum 1"</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <p>Donec tincidunt ligula a lacinia pulvinar</p>
                    <hr/>
                    <div>
                        <h2>Fundacja "Lorem Ipsum 2"</h2>
                        <p>Pellentesque quis ultricies sem, nec laoreet nisl</p>
                    </div>
                    <p>Nam sit amet sem facilisis, auctor orci et</p>
                    <hr/>
                    <div>
                        <h2>Fundacja "Lorem Ipsum 3"</h2>
                        <p>Donec eget quam eget nulla laoreet varius</p>
                    </div>
                    <p>Integer eget diam nec sem aliquet posuere</p>
                </div>
            )
        }else if(this.props.counter === 3){
            return(
                <div>
                    <div>
                        <h2>Fundacja "Lorem Ipsum 1"</h2>
                        <p>Maecenas venenatis nibh quis enim volutpat rhoncus</p>
                    </div>
                    <p>Aliquam at congue tellus</p>
                    <hr/>
                    <div>
                        <h2>Fundacja "Lorem Ipsum 2"</h2>
                        <p>Nullam in sapien sit amet nulla suscipit malesuada a ut arcu</p>
                    </div>
                    <p>Cras in ultrices arcu</p>
                    <hr/>
                    <div>
                        <h2>Fundacja "Lorem Ipsum 3"</h2>
                        <p>Nunc quis felis in arcu ornare pulvinar ac at nisi</p>
                    </div>
                    <p>Aliquam lobortis non dolor non posuere</p>
                </div>
            )
        }
    }
}
export default FoundationInfo
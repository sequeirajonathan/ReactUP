import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner/Banner';
import Container from './components/Container/Container'
import Nav from './components/Nav/Nav';

class App extends React.Component {

    state = {
        active: 'active'
    }

    render() {
        return (
            <Banner>
                <Container>
                    <Nav active={this.setActive} />
                </Container>
            </Banner>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

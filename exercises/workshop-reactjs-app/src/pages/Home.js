import React from 'react';
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import Countries from '../components/Countries';
import '../App.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Logo/>
                <Countries/>
                <h1 className='App'>Home</h1>
                maison
                <Navigation/>
            </div>
        )
    }
}

export default Home;
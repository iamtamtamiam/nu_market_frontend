import React, {Component} from 'react';
import AllListings from './AllListings';

import {Jumbotron} from 'react-bootstrap'

class Home extends Component {
    
    render(){
        //console.log(this.props)
        return (
            <div>
                

                <Jumbotron 
                    
                    style={ {width: '100%', objectFit: 'cover', textAlign: 'center', backgroundColor: '#5982ab'} }>
                        <img src="https://i.ibb.co/5W97v0s/output-onlinepngtools.png" alt="nu_logo"
                            style={ {width: '20%', height: '20%'}}
                        ></img>
                        <h1>HOME</h1>
                </Jumbotron>

                    <AllListings {...this.props}/>

                <p>end of Home</p>
            </div>

        )

    }



}

export default (Home)
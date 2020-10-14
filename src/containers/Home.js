import React, {Component} from 'react';
import AllListings from './AllListings';

import {Jumbotron} from 'react-bootstrap'

class Home extends Component {
    //all listings need to be refined into listing cards info


    render(){
        console.log(this.props)
        return (
            <div>
                

                <Jumbotron 
                    style={ {width: '100%', objectFit: 'cover', textAlign: 'center', backgroundColor: '#rgb(194 196 197)'} }>
                        <h1>HOME</h1>
                </Jumbotron>

                    <AllListings {...this.props}/>

                <p>end of Home</p>
            </div>

        )

    }



}

export default (Home)
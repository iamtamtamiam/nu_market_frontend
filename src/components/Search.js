import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {createRequest} from '../actions/listingsActions'

import Button from 'react-bootstrap/Button'
import ListingCard from './ListingCard';
import { Container, CardColumns, Jumbotron } from 'react-bootstrap'

 
class Search extends React.Component {

  


state = {
    //item: this.props.listingToEdit ? this.props.listingToEdit.attributes.item : "",
    searchTerm: "",
    //itemsToRender: this.props.allListings
    itemsToRender: ""
  }
 
 
// baseState = this.state

//seller_id: this.props.userID,
  
 
handleInputChange = event => {
    //const {name, value} = event.target
    // const loginFormInfo = {
    //     ...props.loginForm,
    //     [name]: value
    // }
   

    const refinedItems = this.props.allListings.filter(listing => listing.attributes.item.includes(event.target.value.toLowerCase()))
    //props.fillLoginForm(loginFormInfo)
    //console.log(this.state)
    console.log(refinedItems)

    // this.setState({
    //     ...this.state,
    //     [name]: value
    // })

    this.setState({
        searchTerm: event.target.value,
        itemsToRender: refinedItems
    })

}



 handleSubmit = event => {
     event.preventDefault() 
 }


renderingItems = () => {
  if (this.state.itemsToRender === ""){
    return (
      this.props.allListings.map(listing => {
        console.log(listing)
        return(
            <ListingCard
                currentUser={this.props.currentUser}
                key={listing.id}
                listing={listing}
                history={this.props.history}
            />
        )
      })
    )
  } else {
    return(
      this.state.itemsToRender.map(listing => {
        return(
            <ListingCard
                currentUser={this.props.currentUser}
                key={listing.id}
                listing={listing}
                history={this.props.history}
            />
        )
      })
    )
  }

}



 
  render() {

    
    
    
   

    return (
        <div>
        
        <Jumbotron 
                    style={ {width: '100%', objectFit: 'cover', textAlign: 'center', backgroundColor: '#5982ab'} }>
                        <img src="https://i.ibb.co/5W97v0s/output-onlinepngtools.png"
                            style={ {width: '20%', height: '20%'}}
                        ></img>
                        
                        <h1>Search</h1>
                </Jumbotron>

    
      <form onSubmit={this.handleSubmit}
         style={ {textAlign: 'center'} }
      >

          

        <label>Enter Search Term:</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.searchTerm} name="searchTerm"/>
        
            <Button variant="info" type="submit">Search </Button> 
      </form>


      <Container>
          <CardColumns>
           {this.renderingItems()}
          </CardColumns>
        </Container>  
      

      {console.log(this.state)}
      

      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        allListings: state.listings,
        currentUser: state.currentUser
    }

}



 
export default connect(mapStateToProps, )(Search);
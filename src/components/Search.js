import React from 'react';
import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button'
import ListingCard from './ListingCard';
import { Container, CardColumns, Jumbotron } from 'react-bootstrap'

 
class Search extends React.Component {

  


state = {
    searchTerm: "",
    itemsToRender: ""
  }
 
 

  
 
handleInputChange = event => {
    
    const refinedItems = this.props.allListings.filter(listing => listing.attributes.item.includes(event.target.value.toLowerCase()))
    
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
                        <img src="https://i.ibb.co/5W97v0s/output-onlinepngtools.png" alt ="nu_logo"
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
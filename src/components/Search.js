import React from 'react';
import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button'
import ListingCard from './ListingCard';
import { Container, CardColumns, Jumbotron } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
 
class Search extends React.Component {

  


state = {
    searchTerm: "",
    itemsToRender: "",
    formChecked: false,
    zipcode: "",
    radius: ""
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



renderZipForm = () => {
  if (this.state.formChecked === true){
    return(
     //either move form at bottom or take away form here
      <form onSubmit={event => this.handleButtonSubmit(event)}>
        <label>Enter ZipCode: </label>
          <input type="text"   name="zipcode" placeholder="function not complete"
          onChange={event => this.handleInputZip(event)} value={this.state.zipcode}
          />
        &nbsp;&nbsp;
        <label>Radius: </label>
          <input type="text"   name="radius" placeholder="function not complete"
          onChange={event => this.handleInputZip(event)} value={this.state.radius}
          />
          <Button variant="info" type="submit">Refine Search </Button> 
      </form>
     
    )
  }
}

handleButtonChange = event => {
  console.log("in handle change for switch")
  //console.log(event.target.checked)
    this.setState({
      ...this.state,
      formChecked: event.target.checked
    })
  
}


handleInputZip = event => {
  
  const {name, value} = event.target 
  
  this.setState({
    ...this.state,
    [name]: value
    
  })
  

}



handleButtonSubmit = event => {
  event.preventDefault()
  //send zip to back and get array of close zips
  console.log("in zipcode submit")
  //console.log(event)
  //let zipdata = {zipcode: this.state.zipcode, radius: this.state.radius}
  return fetch(`http://localhost:3001/zipcodes/${this.state.zipcode}/${this.state.radius}`, {
            credentials: "include",
            method: "GET",
            headers: {
                
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            
        })
        .then(resp => resp.json())
        .then(zipJson => {
            console.log(zipJson)
            //results array, get city name and distance
            if (zipJson.results.error){
                alert("something wrong in zipcode")
            }
        })
        .catch(console.log())

  
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

          <Form >
              <Form.Check 
                type="switch"
                id="custom-switch"
                label="Check this switch"
                onChange={this.handleButtonChange}
              />

              {this.renderZipForm()}
              {console.log(this.state)}
          </Form>
    
      <form onSubmit={this.handleSubmit}
         style={ {textAlign: 'left'} }
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
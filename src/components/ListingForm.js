import React from 'react';
import {connect} from 'react-redux';
import {createListing} from '../actions/listingsActions'

import Button from 'react-bootstrap/Button'
 
class ListingForm extends React.Component {

  componentDidMount(){
    if (this.props.editMode){
        this.setState({
            ...this.state,
            ...this.props.listingToEdit.attributes
        })
    }

  }  


state = {
    item: "",
    price: "",
    description:"",
    condition: "",
    contact:"",
    zipcode:"",
  }
 
 
  
 
  handleInputChange = event => {
    const {name, value} = event.target
    
    this.setState({
        ...this.state,
        [name]: value
    })
    
    }



    valueType = () => {
        if (this.props.editMode){
            return this.props.listingToEdit.attributes
        }
        else{ return this.state}
    }


 
  render() {

    

    return (
        <div>
        This is the Listing form!

        
        
      <form onSubmit={event => {
          event.preventDefault()
          this.props.handleSubmit(this.state, this.props.userID)
      }}>

          {console.log(this.valueType())}

        <label>Item</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().item} name="item"/>
        <label>Price</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().price} name="price" />
        <label>Description</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().description} name="description"/>
        <label>Condition - may want to change!!</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().condition} name="condition"/>
        <label>Contact - may want to remove!!</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().contact} name="contact"/> 
        <label>Zipcode - may want to remove!!</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().zipcode} name="zipcode"/>

      

        
        <Button variant="info" type="submit">{this.props.editMode ? "Update This Listing" : "Create New Listing!"} </Button> 
      </form>

 
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        userID: state.currentUser.id
    }

}



 
export default connect(mapStateToProps, {createListing})(ListingForm);
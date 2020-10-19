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
    //item: this.props.listingToEdit ? this.props.listingToEdit.attributes.item : "",
    item: "",
    price: "",
    description:"",
    condition: "",
    contact:"",
    zipcode:"",
  }
 
 
baseState = this.state

//seller_id: this.props.userID,
  
 
  handleInputChange = event => {
    const {name, value} = event.target
    // const loginFormInfo = {
    //     ...props.loginForm,
    //     [name]: value
    // }
    this.setState({
        ...this.state,
        [name]: value
    })
    //props.fillLoginForm(loginFormInfo)
    //console.log(this.state)
    }


    // handleSubmit = event => {
    //     event.preventDefault()
    //     console.log("made it to handle submit!")
    //     this.props.createListing({...this.state, seller_id: this.props.userID,}, this.props.history)
    //     this.setState(this.initialState)
    // }

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

        {console.log(this.props)}
        
    
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

      {console.log(this.state)}
      
    
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
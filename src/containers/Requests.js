import React, { Component } from 'react' 
import { connect } from 'react-redux'


import { Container, CardColumns } from 'react-bootstrap'

import RequestCard from '../components/RequestCard'

class Requests extends Component {
    
    

  render() {

    const listingRequests = this.props.listingForRequests.attributes.requests

    

    return (
      <div>
         <h2>Requests for: {this.props.listingForRequests.attributes.item}</h2> 
       
        <Container>
          <CardColumns>
          {listingRequests.map(req =>

                <RequestCard
                     key={req.id}
                     request={req}
                />
                )}

          </CardColumns>
        </Container>  
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    listings: state.listings,
    currentUser: state.currentUser
  }
} 




export default connect(mapStateToProps,)(Requests)
import React from 'react';



class LikeForm extends React.Component {
    
    state = {
        likeCount: 0
    }


    handleClick = event => {
        event.preventDefault()
        console.log("made it to likecount handle")
        const newCount = this.state.likeCount + 1
        this.setState({
            likeCount: newCount
        })
        console.log(this.state.likeCount)

    }

    render() {
    return (
        <div>

        {this.state.likeCount}
        <button onClick={this.handleClick}>Like This Listing</button>

      

      </div>
    )
  }



}



export default (LikeForm);
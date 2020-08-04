import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';
import LoginForm from './components/LoginForm'
import {connect} from 'react-redux';
import {getCurrentUser} from "./actions/userActions"


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  componentDidMount(){
    this.props.getCurrentUser()
  }
  render(){
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              inside scr/app.js
            </p>
            <LoginForm/>
        </div>
      );


  }

}


//export default App;
export default connect(null, {getCurrentUser})(App)

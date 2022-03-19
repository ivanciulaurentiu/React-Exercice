import React from 'react';
import './App.css';
import UserList from './components/UserList';

class App extends React.Component{
  constructor(){
    super(); // spune sa aduca ce trebuie din react.component
    this.state = {
      background:'pink',
      user:[
        {
          name:"Laurentiu",
          email:"ivan.laur@yahoo.com",
          isGoldClient:true
        },
        {
          name:"Ion",
          email:"ivan.ion@yahoo.com",
          isGoldClient:false
        }
      ]
    };// initializam starea
  }

  componentDidMount () {
    console.log("App.js was mounted")
  }

  handleBackgroundChange(event){
    console.log(event.target.value);
    const userBackground = event.target.value;
    
    this.setState({background:userBackground});
  }

  render(){  //metoda render de a se afisa pe ecran
    console.log(this.state);
    return (
     <div className="App" style={{background: this.state.background}}> 
       <h1>Lista utilizator</h1>
      {
        this.state.background !== 'f00000' ? <UserList users = {this.state.user}/> : null
      }
      {/* <UserList users = {this.state.user}/> */}

       <input type="color" onChange={(event)=>this.handleBackgroundChange(event)}/>
     </div>
  );
  }
}


export default App;

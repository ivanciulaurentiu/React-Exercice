import React from 'react';
import './App.css';
import UserList from './components/UserList';

class App extends React.Component{
  constructor(){
    super(); // spune sa aduca ce trebuie din react.component
    this.state = {
      background:'pink',
      user:[]
    };// initializam starea
  }

  componentDidMount () {
    console.log("App.js was mounted")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
       return  response.json();
      })
      .then((json) => {
        console.log(json);
        const firstTreeUsers = json.filter( user => user.id <= 3)
        console.log(firstTreeUsers);
        firstTreeUsers.forEach((user)=>{
          user.isGoldClient = true;
        })
        //adaugati fiecarui use o proprietate numita isGoldClient
        // cu valoare true
        this.setState({user: firstTreeUsers})

      })
       
  }
  componentDidUpdate(){
    console.log('App.js was updated')
  }
  handleBackgroundChange(event){
    console.log(event.target.value);
    const userBackground = event.target.value;
    
    this.setState({background:userBackground});
  }

  render(){  //metoda render de a se afisa pe ecran
   
    return (
     <div className="App" style={{background: this.state.background}}> 
       <h1>Lista utilizator</h1>
      {
        this.state.background !== '#000000' ? <UserList users = {this.state.user}/> : null
      }
      {/* <UserList users = {this.state.user}/> */}

       <input type="color" onChange={(event)=>this.handleBackgroundChange(event)}/>
     </div>
  );
  }
}


export default App;

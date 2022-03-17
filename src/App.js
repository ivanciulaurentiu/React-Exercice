import React from 'react';
import './App.css';
import UserItem from './components/UserItem';

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

        <UserItem 
          name={this.state.user[0].name} 
          email={this.state.user[0].email}
          isGoldClient={this.state.user[0].isGoldClient}
        />

        <UserItem
          name={this.state.user[1].name} 
          email={this.state.user[1].email}
          isGoldClient={this.state.user[1].isGoldClient}
        />

       <input type="color" onChange={(event)=>this.handleBackgroundChange(event)}/>
     </div>
  );
  }
}


export default App;

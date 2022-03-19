import React from "react";
import UserItem from "./UserItem";

class UserList extends React.Component{
    constructor(props) {
        console.log('UserList constructor ha been called')
        super(props);
        this.state={};
    }
componentDidMount(){
    console.log('UserList was mounted');
}
componentWillUnmount(){
    console.log('UserList will be unmounted');
}
    render(){
        return(
            <div>
                {
                    this.props.users.map((user, index) => {
                        return  <UserItem
                            name={user.name}
                            email={user.email}
                            isGoldClient={user.isGoldClient}
                            key={index}
                        />
                    } )
    
                }
            </div>
        );
        
    }
}

export default UserList;
import React from "react";
import UserItem from "./UserItem";

class UserList extends React.Component{
    constructor(props) {
        super(props);
        this.state={};
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
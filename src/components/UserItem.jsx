import React from "react";

function UserItem(props){
    console.log(props);
    const {name, email, isGoldClient} = props;
    return(
        <div>
            <h2> { name } </h2>
            <p> { email } </p>
            {
                isGoldClient
                     ? <p>Client Gold</p>
                     :  null
            }
        </div>
    );
}
export  default UserItem;
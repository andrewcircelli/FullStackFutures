import React from "react";

function userProfile(props) {
    console.log(props);
    return(
        <div>
            <h1>
            Welcome thanks for joining! {props.username}
            </h1>
        </div>
    )
}
export default userProfile;
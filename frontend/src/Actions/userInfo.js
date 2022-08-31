import React, {useState} from "react";
function UserInfo() {

    const [userInfo, setUserInfo] = useState (null)
    setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null);
  return (
    <div>UserInfo</div>
  )
}

export default UserInfo
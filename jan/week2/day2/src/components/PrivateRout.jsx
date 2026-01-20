import React, { Children } from 'react';
import { Navigate } from 'react-router';

function PrivateRout({ children }) {
    let isLogin = localStorage.getItem("isLogin");
    // console.log(isLogin);
  return isLogin ? children : <Navigate to="/login" />
   
  
}

export default PrivateRout;

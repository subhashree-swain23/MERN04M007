import React from 'react';
import {Link,NavLink} from 'react-router'

function Nav() {
  return (
    <div>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/about'>Login</NavLink>
      <NavLink to='/about'>Service</NavLink>
    </div>
  );
}

export default Nav;

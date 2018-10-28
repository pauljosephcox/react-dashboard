import React from 'react';
import { Link } from 'react-router-dom'

import config from  '../config/config'

export default function Navigation() {
  return (
    <div className="navigation">

      <div className="logo">
        <Link to='/'><img src={config.theme.logo} alt="logo" /></Link>
      </div>

      <div className="links">

        <Link to='/account'><span className="icon icon-user"></span></Link>

      </div>

    </div>
  )
}

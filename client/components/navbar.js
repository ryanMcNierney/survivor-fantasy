import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>drop your buffs</h1>
    <nav>
      <div>
        <Link to="/seasons">seasons</Link>
        <Link to="/castaways">castaways</Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar

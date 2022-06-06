import React from 'react';
import{
  NavLink,
  Link, 
  withRouter
  } from 'react-router-dom';

// const Navbar = (props) => {
    export const Navbar = () => {
    //console.log(props)

    // setTimeout(()=>{
    //     props.history.push('/contact')
    //   },3000)
  return <nav className='ui raised padded segment'>
      <NavLink className='ui teal inverted segment' to='/'>sk33022</NavLink>
      <div className='ui right floated header'>
      <Link to='/'><button className='ui button'>Home</button></Link>
      <NavLink to="/about"><button className='ui button'>About</button></NavLink>
      <NavLink to='/contact'><button className='ui button'>Contact</button></NavLink>

      </div>

  </nav>
};
// export default withRouter(Navbar);


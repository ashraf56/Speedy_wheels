import React from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../assets/wheel.png'
const Header = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-uppercase'>
          <img src={logo} style={{width:'50px'}}  />
         <span className='ps-2'> Speedy Wheels</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" > 

          <Nav className='m-auto align-items-center fw-semibold '>
  <li className="nav-item">
    <Link className="nav-link " to='/' >HOME</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link "  to='/blog' >BLOG</Link>  </li>
 



          </Nav>
        
          <Nav>
          <li className="nav-item">
    <Link className="nav-link " to='/' >HOME</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link "  to='/blog' >BLOG</Link>  </li>
  
  <li className="nav-item">
  <Link className="nav-link "  to='/login' >Login</Link>  </li>

  {/* <li className="nav-item">
  <div className="nav-link"  >
    {user?<>
     { user.photoURL ?
      <img src={user.photoURL} data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} style={{width:'50px' ,borderRadius:'50px'}} />:
      <FaUserCircle className='fs-2'/>
     }<Tooltip id="my-tooltip" />
     <span className='btn'  onClick={signOut}>Logout</span>
      </> : 
     <NavLink to='/login' activeClassName="active" className='nav-link text-decoration-none text-uppercase text-dark'>LOgin</NavLink>
  }
    </div>  </li> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;
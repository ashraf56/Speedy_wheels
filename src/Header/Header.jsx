import React, { useContext } from 'react';
import { NavLink, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../assets/wheel.png'
import { ContextAuth } from '../Routes/AuthenticationCenter';
const Header = () => {
  let {user}=useContext(ContextAuth);
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
        
          <Nav className=' me-auto  align-items-center '>
            




 <li className="nav-item">

  <div className="nav-link"  >
    {user?<>
     { user.photoURL ?
      <img src={user.photoURL} data-tooltip-id="profile" data-tooltip-content={user.displayName} style={{width:'50px' ,borderRadius:'50px'}} />:
<span>{user.email}</span>
      

 }<Tooltip id="profile" />
     <span className='btn' >Logout</span>
      </> : 
   <Link className="nav-link "  to='/login' >Login</Link> 
  }
    </div>  </li> 

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;
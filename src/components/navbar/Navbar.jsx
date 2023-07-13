


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import './NavBar.css'

function MnavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="m-custum">
      <Container fluid>
        <Navbar.Brand href="#home">  <Link to="/">
            <img
                          src="/assrets/images/Asset-39@4x-e1686526474861.png"
             alt=""
             />           </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#features">         <div className='search-etc d-flex'>
                
            <img
            
              src="/assrets/images/Vector1.png"
              alt=""
               className='srch-img '
            />
            <input type='search' placeholder='search..'/></div>
      
            

          </Nav.Link>
            
          </Nav>
          <Nav className='d-flex align-items-center custm-nav'>
            <Nav.Link href="#deets">Location</Nav.Link>
            <Nav.Link href="#deets">Services</Nav.Link>
            <Nav.Link href="#deets">My Booking</Nav.Link>
            <Nav.Link href="#deets"><Button className='btn-lgout'>Register/Logout</Button></Nav.Link>
            <Nav.Link href="#deets"><Button variant='outline-light' className='join-now'>join Now</Button></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MnavBar;




























































// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// import './NavBar.css'

// function MnavBar() {
//   return (
//     <div className='main-first'>
//     <Container fluid className='main-c'>
//     <Navbar expand="lg" className='mt-3'>
//       <Container fluid className='inner' >
//         {/* <Navbar.Brand href="asserts/images/Asset-31@4x-e1686576126889.png">Navbar scroll</Navbar.Brand> */}
//         <div className='hdr-logo'>
//           <Link to="/">
//             <img
            
//               src="/assrets/images/Asset-39@4x-e1686526474861.png"
//               alt=""
//             />
//           </Link>
         
          
//         </div>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0 cstm-nav"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <div className='search-etc d-flex'>
                
//             <img
            
//               src="/assrets/images/Vector1.png"
//               alt=""
//               className='srch-img '
//             />
//             <input type='search' placeholder='search..'/></div>
      
            

//           </Nav>
//           <div className='left-side'> 
//           <NavLink href="#action1">Location</NavLink>
//           <NavLink href="#action1">Services</NavLink>
//             <NavLink href="#action2">My booking</NavLink>
         
        
            
//             <Button className='btn-lgout'>Logout/Register</Button>
//             <Button className='btn-join' variant="outline-light">join Now</Button>
//             </div>
         
         
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </Container>
//     </div>
//   );
// }

// export default MnavBar;
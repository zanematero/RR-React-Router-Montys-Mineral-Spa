import Container from "react-bootstrap/Container";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import { Link  } from "react-router-dom";

export default function Navbar(){
    return(
       <Container>
            <BootstrapNavbar expand="lg" variant="light" bg="light">
                <Container>
                    <BootstrapNavbar.Brand href="#">Monty's Mineral SPA</BootstrapNavbar.Brand>
                    <Nav defaultActiveKey="/home" as="ul"></Nav>
                        <Nav.Item as="li" class="list-unstyled">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li" class="list-unstyled">
                            <Link to="/about" className="nav-link">
                                About Us
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li" class="list-unstyled">
                            <Link to="/packages" className="nav-link">
                                Our Packages
                            </Link>
                        </Nav.Item>
                </Container>
            </BootstrapNavbar>
       </Container> 
    );
}
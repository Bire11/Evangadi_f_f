import React, { useContext, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../images/logo0.png";
import { UserContext } from "../Dataprovide/DataProvider";
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Header() {
  const [user, setUser] = useContext(UserContext);
  const [bar, setBar] = useState(true);

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }
  const Token = localStorage.getItem("token");

  return (
    <section className="header_section ">
      <Navbar expand="lg" className="bg-body-tertiary p-4">
        <Container>
          <Navbar.Brand>
            <Link to={Token ? "/" : ""}>
              <img src={logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="ms-auto header_navlist">
              {/* <Nav.Link> Home</Nav.Link> */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as = {Link} to ="/how-it-works">How it Works</Nav.Link>

              <Nav.Link>
                <Link to="/login" onClick={logout} className="header_btn_blue">
                  {user?.data ? `Log Out` : `Sign In`}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;











// Let's go through the code line by line to understand its functionality:

// <Navbar expand="lg" className="bg-body-tertiary p-4">: This line renders a Navbar component from the react-bootstrap library. It sets the Navbar to expand at the "lg" breakpoint and applies the CSS classes bg-body-tertiary and p-4 for background color and padding, respectively.

// <Container>: The Container component from react-bootstrap is used to wrap the contents of the Navbar and provide a responsive layout.

// <Navbar.Brand>: This component represents the brand/logo section within the Navbar.

// <Link to={Token ? "/" : ""}>: This line renders a Link component from React Router. It sets the link to the home page ("/") if the Token variable is truthy (i.e., has a value) or an empty string if Token is falsy.

// <img src={logo} alt="Logo" />: This line renders an image element with the src attribute set to the logo variable. The logo variable is expected to contain the path or URL of the logo image.

// <Navbar.Toggle aria-controls="basic-navbar-nav" />: This line renders a button that controls the collapse/expand behavior of the Navbar on smaller screens. The aria-controls attribute specifies the ID of the Navbar.Collapse component it controls.

// <Navbar.Collapse id="basic-navbar-nav" className="">: This component represents the collapsible content of the Navbar. The id attribute sets a unique ID for the Navbar.Collapse component, and the className attribute can be used to provide additional CSS classes for styling.

// <Nav className="ms-auto header_navlist">: The Nav component represents a container for navigation links. The className attribute applies the CSS classes ms-auto and header_navlist. ms-auto aligns the navigation links to the right side of the Navbar, and header_navlist provides additional styling for the navigation links.

// <Nav.Link>Home</Nav.Link>: This line renders a Nav.Link component representing a navigation link with the text "Home".

// <Nav.Link>How it Works</Nav.Link>: This line renders another Nav.Link component representing a navigation link with the text "How it Works".

// <Nav.Link>: This line renders a Nav.Link component for the "Log Out"/"Sign In" link.

// <Link to="/login" onClick={logout} className="header_btn_blue">: This line renders a Link component from React Router. The to attribute specifies the link destination ("/login"), and the onClick attribute attaches the logout function as a click event handler. The className attribute applies the CSS class header_btn_blue for styling.

// {user?.data ? Log Out:Sign In}: This line conditionally renders the text content of the Link component based on the presence of user.data. If user.data exists, it displays "Log Out"; otherwise, it displays "Sign In".

// Overall, this code renders a responsive Navbar component with a brand/logo section, navigation links, and a "Log Out"/"Sign In" link. The appearance and behavior of the Navbar are controlled by the applied CSS classes and any event handlers defined for the navigation links and the "Log Out"/"Sign In" link.
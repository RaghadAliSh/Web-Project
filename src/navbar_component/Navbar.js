//imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdChat } from "react-icons/md";
import "./Navbar.css";

//functions
const NavigationBar = () => {
  return (
    <Navbar className="navbar-body">
      <Container className="col d-flex justify-content-center align-items-center custom-container">
        <Navbar.Brand href="#" className="logo">
          <img
            src="https://social.webestica.com/assets/images/logo.svg"
            alt="#"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#" className="search">
          <Form>
            <Form.Control
              type="text"
              placeholder="Search..."
              className="Search-form"
              disabled
            />
          </Form>
        </Navbar.Brand>
        {/* <Navbar.Brand className="space-1"/> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Demo" id="first-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Home default
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Home post</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                App download
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Buy Social!
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="secound-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pages</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Albums</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Messaging</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Dropdown levels
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="third-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Create a page
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Notifications
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Help center
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Help details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Privacy & terms
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand>
              <Nav.Link href="#link" className="text-link">
                MyNetwork
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <button className="button">
                <MdChat size="1.7rem" color="gray" className="icon" />{" "}
              </button>
            </Navbar.Brand>
            <Navbar.Brand>
              <button className="button">
                <IoIosSettings size="1.7rem" color="gray" className="icon" />{" "}
              </button>
            </Navbar.Brand>
            <Navbar.Brand>
              <button className="button">
                <IoIosNotifications
                  size="1.7rem"
                  color="gray"
                  className="icon"
                />{" "}
              </button>
            </Navbar.Brand>
            <Navbar.Brand href="#">
              <img
                src="https://social.webestica.com/assets/images/avatar/07.jpg"
                alt="#"
                className="profile-photo"
              />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
//export
export default NavigationBar;

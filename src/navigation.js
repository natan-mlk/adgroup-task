import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'

const Navigation = () => {

    return (
        <Navbar inverse collapseOnSelect>

            <Navbar.Header>
                <p>ADGROUP recruitment taks</p>
                <p>- gallery of photos -</p>
                <Navbar.Brand className="mobile">ADGROUP gallery
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
                <Nav>
                    <IndexLinkContainer to="/">
                        <NavItem eventKey={1}>
                            Gallery 1
                        </NavItem>
                    </IndexLinkContainer>

                    <LinkContainer to="/gallery2">
                        <NavItem eventKey={2}>
                            Gallery 2
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/gallery3">
                        <NavItem eventKey={3}>
                            Gallery 3
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation
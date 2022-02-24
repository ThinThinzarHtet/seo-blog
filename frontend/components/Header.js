import { useState } from "react";
import { APP_NAME } from "../config";
import Link from "next/link";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light>
                <Link href="/">
                    <NavLink style={{ color: '#000' }} className="font-weight-bold">
                        {APP_NAME}
                    </NavLink>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar style={{ marginLeft: 'auto' }}
                    >
                        <NavItem>
                            <Link href="/signin">
                                <NavLink>
                                    Signin
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/signup">
                                <NavLink>
                                    Signup
                                </NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
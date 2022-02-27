import { useState } from 'react';
import { APP_NAME } from '../config';
import Router from 'next/router';
import Link from 'next/link';
import { signout, isAuth } from '../actions/auth';
import NProgress from 'nprogress';
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
  DropdownItem,
} from 'reactstrap';

// import '../node_modules/nprogress/nprogress.css';
// for progress bar
Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const capitalizeLetter = {
    textTransform: 'capitalize',
  };

  const pointer = {
    cursor: 'pointer',
  };

  return (
    <div>
      <Navbar color='light' expand='md' light>
        <Link href='/'>
          <NavLink style={{ color: '#000' }} className='font-weight-bold'>
            {APP_NAME}
          </NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            {!isAuth() && (
              <>
                <NavItem>
                  <Link href='/signin'>
                    <NavLink>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/signup'>
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </>
            )}

            {isAuth() && isAuth().role === 0 && (
              <>
                <NavItem>
                  <Link href='/user'>
                    <NavLink style={capitalizeLetter}>{`${
                      isAuth().name
                    }'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              </>
            )}

            {isAuth() && isAuth().role === 1 && (
              <>
                <NavItem>
                  <Link href='/admin'>
                    <NavLink style={capitalizeLetter}>{`${
                      isAuth().name
                    }'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              </>
            )}

            {isAuth() && (
              <>
                <NavItem>
                  <NavLink
                    style={pointer}
                    onClick={() => signout(() => Router.replace('/signin'))}
                  >
                    Signout
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

import { memo, useState } from 'react';
import type { FC } from 'react';
import resets from '../_resets.module.css';
import { Button_StateNormalTypeSmall } from './Button_StateNormalTypeSmall/Button_StateNormalTypeSmall';
import classes from './Header.module.css';
import { OriginalLogo_TypeMain } from './OriginalLogo_TypeMain/OriginalLogo_TypeMain';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}

export const Header: FC<Props> = memo(function Header(props = {}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar expand="lg" className={`${resets.storybrainResets} ${classes.root}`}>
      <Navbar.Brand href='/' className={classes.logo}>
        <OriginalLogo_TypeMain />
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleMenu} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <div className={classes.button2}>
          <Button_StateNormalTypeSmall
            className={classes.button}
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
          />
         
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
});

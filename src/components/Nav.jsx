import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo-bg.png';
import classes from '../styles/Nav.module.css';
import Account from './Account';

function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={Logo} alt="Learn with Sumit Logo" />
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}

export default Nav;

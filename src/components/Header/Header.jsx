import { NavLink } from 'react-router-dom';
import Wrapper from './Header.styled';

const Header = () => {
  return (
    <Wrapper>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <button>Home</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies">
                <button>Movies</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  );
};

export default Header;

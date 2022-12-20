import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllDogs } from '../../redux/action.js';

function Navbar() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getAllDogs());
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/dogs"
              activeClassName="selected"
              onClick={handleClick}
            >
              Principal
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">Formulario</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

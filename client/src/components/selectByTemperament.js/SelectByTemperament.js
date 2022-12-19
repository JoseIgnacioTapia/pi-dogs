import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  filterDogsByTemperament,
  getTemperaments,
} from '../../redux/action.js';

function SelectByTemperament() {
  const temperaments = useSelector(state => state.temperaments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleSelect = e => {
    e.preventDefault();

    dispatch(filterDogsByTemperament(e.target.value));
  };

  return (
    <div>
      <select defaultValue="default" onChange={handleSelect}>
        <option value="default">Elija un temperamento</option>
        {temperaments?.map(t => (
          <option value={t.name} key={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectByTemperament;

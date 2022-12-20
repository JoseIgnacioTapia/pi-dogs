import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDogs, filterDogsByDogs } from '../../redux/action';

function SelectByDog() {
  const dogs = useSelector(state => state.allDogs);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllDogs());
  }, [dispatch]);

  const handleSelect = e => {
    e.preventDefault(e);
    console.log(e.target.value);
    dispatch(filterDogsByDogs(e.target.value));
  };

  return (
    <div>
      <select defaultValue="default" onChange={handleSelect}>
        <option value="default">Elija una raza</option>
        {dogs?.map(d => (
          <option value={d.name} key={d.id}>
            {d.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectByDog;

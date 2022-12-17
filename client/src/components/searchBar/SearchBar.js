import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchDog } from '../../redux/action';

function SearchBar() {
  const [dogInput, setDogInput] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    setDogInput(e.target.value);
    console.log(dogInput);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!dogInput) {
      setMessage('Debe ingresar el nombre de la raza');
    }

    dispatch(getSearchDog(dogInput));
    setDogInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="dog"
          value={dogInput}
          placeholder="Raza"
          onChange={e => handleInputChange(e)}
        />
        {message && <p>{message}</p>}
        <input type="submit" value="BUSCAR" />
      </form>
    </div>
  );
}

export default SearchBar;

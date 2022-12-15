import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTemperaments } from '../redux/action';
import { useForm } from './hooks/useForm';
import Navbar from '../components/Navbar/Navbar';

const initialForm = {
  name: '',
  image: '',
  minWeight: '',
  maxWeight: '',
  minHeight: '',
  maxHeight: '',
  lifeSpan: '',
  temperaments: [],
};

const validationsForm = form => {
  console.log('hola');
};

function CreatePage() {
  const temperaments = useSelector(state => state.temperaments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const { form, errors, loading, response, handleChange, handleSubmit } =
    useForm(initialForm, validationsForm);

  return (
    <div>
      <Navbar />
      <h2>Crear Raza de Perro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image">Url Imagen:</label>
          <input type="text" name="image" onChange={handleChange} />
        </div>
        <div>
          <label>Peso</label>
          <div>
            <label htmlFor="minWeight">Min:</label>
            <input type="number" name="minWeight" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="maxWeight">Max:</label>
            <input type="number" name="maxWeight" onChange={handleChange} />
          </div>
        </div>
        <div>
          <label>Altura</label>
          <div>
            <label htmlFor="minHeight">Min:</label>
            <input type="number" name="minHeight" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="maxHeight">Max:</label>
            <input type="number" name="maxHeight" onChange={handleChange} />
          </div>
        </div>
        <div>
          <label>Tiempo de vida</label>
          <label htmlFor="lifeSpan">Aproximadamente:</label>
          <input type="number" name="lifeSpan" onChange={handleChange} />
        </div>
        <div>
          <div>
            <label htmlFor="temperaments">Temperamentos:</label>
            <select
              name="temperaments"
              defaultValue="default"
              onChange={handleChange}
            >
              <option value="default">Elegir temperamento</option>
              {temperaments?.map(t => (
                <option value={t.name} key={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <input type="submit" value="CREAR" />
      </form>
    </div>
  );
}

export default CreatePage;

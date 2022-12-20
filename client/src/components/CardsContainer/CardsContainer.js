import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllDogs } from '../../redux/action';
import Card from '../card/Card';
import { Link } from 'react-router-dom';
import Paginated from '../paginated/Paginated';

function CardsContainer() {
  const dogs = useSelector(state => state.dogs);
  const error = useSelector(state => state.error); // COMO MANEJAR LOS ERRORES???
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dogs.length) {
      dispatch(getAllDogs());
    }
  }, [dispatch]);

  // Paginated
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOFLastDog = currentPage * dogsPerPage - 1; // (3*8)-1=23
  const indexOfFirstDog = indexOFLastDog - (dogsPerPage - 1); // 23-7=16
  const currentDogs = dogs.slice(indexOfFirstDog, indexOFLastDog + 1); // (0, 7)(8, 15)(16, 23)

  const paginated = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Paginated
        dogsPerPage={dogsPerPage}
        totalDogs={dogs.length}
        paginated={paginated}
      />
      {currentDogs.length ? (
        currentDogs.map(d => {
          return (
            <Link to={`/dogs/${d.id}`} key={d.id}>
              <Card
                image={d.image}
                name={d.name}
                temperament={d.temperament}
                weight={d.weight}
              />
            </Link>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CardsContainer;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import { getDogDetail, clearDogDetail, setLoading } from '../redux/action.js';

function Details() {
  const { id } = useParams();

  const dogDetail = useSelector(state => state.dogDetail);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogDetail(id));

    return () => {
      dispatch(clearDogDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
      <Navbar />
      {Object.keys(dogDetail).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogDetail.image} alt={dogDetail.name} />
          <h2>{dogDetail.name}</h2>
          <h3>{dogDetail.height}</h3>
          <h3>{dogDetail.weight}</h3>
          <h3>{dogDetail.lifeSpan}</h3>
          <p>{dogDetail.temperament}</p>
        </div>
      )}
    </div>
  );
}

export default Details;

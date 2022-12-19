import {
  GET_ALL_DOGS,
  GET_DOG_DETAIL,
  CLEAR_DOG_DETAIL,
  GET_TEMPERAMENTS,
  GET_SEARCH_DOG,
  FILTER_BY_TEMPERAMENT,
  ERROR,
} from './action';

const initialState = {
  dogs: [],
  allDogs: [],
  dogDetail: {},
  temperaments: [],
  error: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case CLEAR_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case GET_SEARCH_DOG:
      return {
        ...state,
        dogs: action.payload,
      };

    case FILTER_BY_TEMPERAMENT:
      const allDogs = state.allDogs;

      const temperamentsFiltered =
        action.payload === 'default'
          ? allDogs
          : allDogs.filter(d =>
              d.temperament
                ?.toLowerCase()
                .includes(action.payload.toLowerCase())
            );

      return {
        ...state,
        dogs: temperamentsFiltered,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;

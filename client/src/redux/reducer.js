import {
  GET_ALL_DOGS,
  GET_DOG_DETAIL,
  CLEAR_DOG_DETAIL,
  GET_TEMPERAMENTS,
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

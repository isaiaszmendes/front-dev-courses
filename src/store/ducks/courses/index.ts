import { Reducer } from 'redux';
import { CoursesState, CoursesTypes } from './types';

const INITIAL_STATE: CoursesState = {
  data: [],
  loading: false,
  error: null,
};

const reducer: Reducer<CoursesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CoursesTypes.LOAD_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    }
    case CoursesTypes.LOAD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
        data: [],
      };
    }
    case CoursesTypes.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data,
      };
    }
    default: return state;
  }
};

export default reducer;

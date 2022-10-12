import { FETCH_TODO_SUCCESS,FETCH_TODO_FAILED, LOADING } from "../actionTypes";


const initialState = {
  errors: "",
  loading: false,
  data: [],
};

const fetchTodoReducer = (state = initialState, action) => {
  // const { type, payload } = action; if you want to destructure
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        errors: "",
      };
    case FETCH_TODO_FAILED:
      return {
        ...state,
        errors: action.errors,
        data: [],
        loading: false,
      };
    default:
      return state;
  }
}

export default fetchTodoReducer;
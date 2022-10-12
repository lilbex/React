import { FETCH_TODO_SUCCESS,FETCH_TODO_FAILED, LOADING } from "../actionTypes";
import axios from "axios";
import {toast} from 'react-toastify'

export const fetchTodo = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ 
      type: FETCH_TODO_SUCCESS, 
      payload: res.data,
    });
  } catch (error) {
    dispatch({ 
      type: FETCH_TODO_FAILED, 
      payload: [],
      error: error
    });
    toast.error(error.message)
  }
 
}

export default fetchTodo;
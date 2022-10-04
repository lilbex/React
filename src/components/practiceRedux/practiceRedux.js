import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import fetchTodo from "../../redux/actions/fetchTodo";

const PracticeRedux = () => {
  const todo  = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div>
      <h1>Practice Redux</h1>
      {todo && todo.length > 0 ? todo?.map((item, i) => (
        <div key={i}>{item.title}</div>
      )): <p>No data to display</p>}
    </div>
  );
}

export default PracticeRedux;
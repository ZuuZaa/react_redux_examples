import "./App.css";
import { useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByNumber} from './actions';


function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>+1</button> 
      <button onClick={() => dispatch(decrement())}>-1</button> <br/><br/>
      <button onClick={() => dispatch(incrementByNumber(5))}>+5</button>
      {isLogged ? <h3>Valuable Information I souldn't see</h3> : " "}
    </div>
  );
}

export default App;

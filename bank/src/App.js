import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(5)}>deposit 5$</button>
      <button onClick={() => withdrawMoney(5)}>withdraw 5$</button>
    </div>
  );
}

export default App;

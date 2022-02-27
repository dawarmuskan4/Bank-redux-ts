import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {

  const dispatch = useDispatch()

  const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch)

  const amount = useSelector((state: State) => state.bank )
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
      <button onClick={() => dispatch(withdrawMoney(500))}>Withdraw</button>
      <button onClick={() => dispatch(bankrupt)}>Bankrupt</button>
    </div>
  );
}

export default App;

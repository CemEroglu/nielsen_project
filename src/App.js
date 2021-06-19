import './App.css';
import { useState, useEffect } from 'react'
import * as StoryAPI from './services/StoryAPI'

const App = () => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(10);
  const whenAmountChange = (event) => {
    setAmount(event.target.value)
    StoryAPI.getSomeElements(event.target.value).then(data => setData(data))
  }
  useEffect(() => {
    StoryAPI.getSomeElements(10).then(data => setData(data))
  }, [])

  return (
    <div>
      Hello World!
      {data.map(item => {
        return (<div key={item}>{item}</div>)
      })}
      <select value={amount} onChange={whenAmountChange.bind()}>
        <option>10</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
        <option>50</option>
      </select>
    </div>
  );
}

export default App;

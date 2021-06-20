import './App.css';
import { useState, useEffect } from 'react'
import * as Services from './services/HackernewsAPIs'
import LineChart from './components/LineChart';
import {PulseLoader} from "react-spinners";

const App = () => {
  const [amount, setAmount] = useState(10);
  const [descendants, setDescendants] = useState([]);
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Services.getSomeElements(amount).then(data => {
      setDetails(data)
    })
  }, [])

  const setDetails = (data) => {
    setIsLoading(true)
    let descendantsArray = [];
    let scoresArray = [];
    data.map((item, index) => {
      Services.getElementsDetails(item).then(res => {
        descendantsArray.push(res.descendants)
        scoresArray.push(res.score)
        if (index == data.length - 1) {
          setDescendants(descendantsArray)
          setScores(scoresArray)
          setIsLoading(false)
        }
      })
    })
  }

  const whenAmountChange = (event) => {
    setAmount(event.target.value)
    Services.getSomeElements(event.target.value).then(data => setDetails(data))
  }

  return (
    <div className="App">
      <select className="Select" value={amount} onChange={whenAmountChange.bind()}>
        <option>10</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
        <option>50</option>
      </select>
      {isLoading ? (<PulseLoader size={40} color="turquoise" loading/>) 
      : (scores.length > 0 ? (<LineChart title="Score Of Descendants" descendants={descendants} scores={scores}></LineChart>) 
        : "")}

      
    </div>
  );
}

export default App;

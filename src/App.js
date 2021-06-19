import './App.css';
import { useState, useEffect } from 'react'
import * as StoryAPI from './services/StoryAPI'
import LineChart from './components/LineChart';

const App = () => {
  const [amount, setAmount] = useState(10);


  const [descendants, setDescendants] = useState([]);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    StoryAPI.getSomeElements(10).then(data => {
      setDetails(data)

    })
  }, [])

  const setDetails = (data) => {
    let descendantsArray = [];
    let scoresArray = [];
    data.map((item, index) => {
      StoryAPI.getElementsDetails(item).then(res => {
        descendantsArray.push(res.descendants)
        scoresArray.push(res.score)
        if (index == data.length - 1) {
          setDescendants(descendantsArray)
          console.log(descendantsArray)
          console.log(scoresArray)
          setScores(scoresArray)
          
        }
      })
    })



  }
  const whenAmountChange = (event) => {
    setAmount(event.target.value)
    StoryAPI.getSomeElements(event.target.value).then(data => setDetails(data))
  }

  return (
    <div>
      <select value={amount} onChange={whenAmountChange.bind()}>
        <option>10</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
        <option>50</option>
      </select>
      {scores.length > 0 ? (<LineChart descendants={descendants} scores={scores}></LineChart>) : ""}
    </div>
  );
}

export default App;

import './styles/App.css';
import { useState, useEffect } from 'react'
import * as StoryService from './services/StoryService'
import LineChart from './components/LineChart';
import { PulseLoader } from "react-spinners";

const App = () => {
  const [amount, setAmount] = useState(10);
  const [descendants, setDescendants] = useState([]);
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    StoryService.getStoryIDs(amount).then(IDs => {
      setDetails(IDs)
    })
  }, [])

  const whenAmountChange = (event) => {
    setIsLoading(true)
    setAmount(event.target.value)
    StoryService.getStoryIDs(event.target.value).then(IDs => setDetails(IDs))
  }

  const setDetails = (IDs) => {
    let combinedData = [];
    IDs.map((item, index) => {
      StoryService.getStoryDetails(item).then(res => {
        if (res.descendants !== undefined && res.score !== undefined) {
          combinedData.push(
            {
              "ID": item,
              "descendant": res.descendants,
              "score": res.score
            }
          )
        }
        if (index == IDs.length - 1) {
          sortAndSetAxis(combinedData)
        }
      })
    })
  }

  const sortAndSetAxis = (combinedData) => {
    let descendantsArray = [];
    let scoresArray = [];
    combinedData.sort(function (first, second) {
      return first.descendant - second.descendant;
    });
    combinedData.map(item => {
      descendantsArray.push(item.descendant)
      scoresArray.push(item.score)
    })
    setDescendants(descendantsArray)
    setScores(scoresArray)
    setIsLoading(false)
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
      {isLoading ? (<PulseLoader size={40} color="turquoise" loading />)
        : (<LineChart title="Score Descendant Relation" label="Score of Spesific Descendant" descendants={descendants} scores={scores}></LineChart>)
      }
    </div>
  );
}

export default App;
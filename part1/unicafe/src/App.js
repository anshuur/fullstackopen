import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad - 1);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad - 1)}>Bad</button>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    
    </div>
  )
}
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + (bad * -1);
  const average = (good + neutral + bad) / 3;
  const positive = good / all;
  if (all === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  
  return (
  <div>
    <h1>Statistics</h1>
    <table>
      <tr>
        <td>Good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>All</td>
        <td>{all}</td>
      </tr>
      <tr>
        <td>Average</td>
        <td>{average}</td>
      </tr>
      <tr>
        <td>Positive</td>
        <td>{positive}%</td>
      </tr>
    </table>
  </div>
  )
}
export default App
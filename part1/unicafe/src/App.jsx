import { useState } from 'react'

const StatisticLine = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = ({good, setGood,neutral,setNeutral,bad,setBad}) => {
    const handleClickGood = () => {
      setGood(good+1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral+1)
  }
  const handleClickBad = () => {
      setBad (bad+1)
    } 

  const calculateTotalNumberFeedback = () => {
    if (good === 0 && bad === 0 && neutral === 0){
      return <p>No feedback given</p>
    } else{

    }
    return (good + neutral + bad)
  }
  const calculateTotalScore = () => {
    return (good - bad)
  }
  const calculateAverageScore = () => {
    const totalScore = calculateTotalScore()
    const totalNumberFeedback = calculateTotalNumberFeedback()
    return totalScore > 0 ?(totalScore/totalNumberFeedback):0; 
  };
  const PositiveFeedback = () => {
    const numberOfFeedback = [good, neutral, bad];
    const positiveValueFeedback = numberOfFeedback.filter(value => value === good)
    return positiveValueFeedback.reduce((sum, value) => sum + value, 0);
    
    };

  const PercentageOfPositiveFeedback = () => {
    const totalSum = calculateTotalNumberFeedback();
    const positiveSum = PositiveFeedback ();
    return totalSum > 0 ? (positiveSum/totalSum) * 100 : 0;
  }
  if (good === 0 && bad === 0 && neutral === 0){
    return (
      <div>
      <h3>give feedback</h3>
      <StatisticLine text="good" handleClick={handleClickGood}  />
      <StatisticLine text= "neutral" handleClick={handleClickNeutral}  />
      <StatisticLine text= "bad" handleClick={handleClickBad} />
      <h3>statistics</h3>
      <p>No feedback given</p>
    </div>
     ) 
    
  } else{
  return(
    <div>
      <h3>give feedback</h3>
      <StatisticLine handleClick={handleClickGood} text='good' />
      <StatisticLine handleClick={handleClickNeutral} text='neutral' />
      <StatisticLine handleClick={handleClickBad} text='bad' />
      <h3>statistics</h3>
      <div>
      <table>
        <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{calculateTotalNumberFeedback()}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{calculateAverageScore()}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{PercentageOfPositiveFeedback()}%</td>
        </tr>

        </tbody>
        
      </table>

      </div>
      
    </div> 
  )
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
     
      <Statistics good={good} setGood={setGood} 
      neutral={neutral} setNeutral={setNeutral}
      bad={bad} setBad={setBad}
      />
    </div>
  )
}

export default App;
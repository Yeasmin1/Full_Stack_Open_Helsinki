import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(anecdotes[0])
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  // Function to display a random anecdote
  const displayRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random()* anecdotes.length);
    setSelected(anecdotes[randomIndex])
  }

  // Function to vote for the current anecdote
  const voteForAnecdote = () => {
    const currrentIndex = anecdotes.indexOf(selected)
    const newVotes = [...votes]
    newVotes[currrentIndex]+= 1
    setVotes(newVotes)
  }

  // Function to get the most voted anecdote
  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...votes);
    const maxIndex = votes.indexOf(maxVotes);
    return anecdotes[maxIndex];
  };

 // Calculate the current votes for the displayed anecdote
 const currentVotes = votes[anecdotes.indexOf(selected)];
 // Get the most voted anecdote and its votes
 const mostVotedAnecdote = getMostVotedAnecdote();
 const mostVotes = Math.max(...votes);


  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{selected}</p>
      <p>has {currentVotes} votes</p>
      <button onClick={voteForAnecdote}>Vote</button>
      <button onClick={displayRandomAnecdote}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>
        {mostVotes > 0 ? (
          <div>
            <p>{mostVotedAnecdote}</p>
            <p>has {mostVotes} votes</p>
          </div>
        ) : (
          <p>No votes yet</p>
        )}
      
    </div>
  )
}

export default App
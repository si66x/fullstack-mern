import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));
  const nextAnecdoteHandler = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const voteHandler = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  const mostVotedIndex = findBiggestIndex(vote);
  const mostVotedContainer = findBiggestContainer(vote);

  return (
    <div>
      <h1>Anecdote of the dat</h1>
      {anecdotes[selected]}
      <Button name={"next anecdote"} handler={nextAnecdoteHandler} />
      <p>has {vote[selected]} votes</p>
      <Button name={"vote"} handler={voteHandler} />
      <h1>Most voted</h1>
      <p>{anecdotes[mostVotedIndex]}</p>
      <p>has {mostVotedContainer}</p>
    </div>
  );
};

const Button = ({ name, handler }) => {
  return (
    <div>
      <button onClick={handler}>{name}</button>
    </div>
  );
};

function quickSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let smaller = [];
    let bigger = [];
    const pivot = array[0];
    for (let index = 0; index < array.length; index++) {
      if (array[index] < pivot) {
        smaller.push(array[index]);
      }
      if (array[index] > pivot) {
        bigger.push(array[index]);
      }
    }
    return quickSort(smaller).concat([pivot], quickSort(bigger));
  }
}

const findBiggestIndex = (array) => {
  let assumeBiggest = array[0];
  let indexBiggest = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > assumeBiggest) {
      indexBiggest = index;
    }
  }
  return indexBiggest;
};

const findBiggestContainer = (array) => {
  let assumeBiggest = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > assumeBiggest) {
      assumeBiggest = array[index];
    }
  }
  return assumeBiggest;
};

export default App;

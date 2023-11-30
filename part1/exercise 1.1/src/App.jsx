import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const goodButtonHandler = () => {
    setGood(good + 1);
  };
  const badButtonHandler = () => {
    setBad(bad + 1);
  };
  const neutralButtonHandler = () => {
    setNeutral(neutral + 1);
  };

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all;
  return (
    <div>
      <Judul />
      <Button name="good" buttonHandler={goodButtonHandler} />
      <Button name="neutral" buttonHandler={neutralButtonHandler} />
      <Button name="bad" buttonHandler={badButtonHandler} />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

const Judul = () => {
  return (
    <div>
      <h1>
        <b>give feedback</b>
      </h1>
    </div>
  );
};

const Button = ({ name, buttonHandler }) => {
  return (
    <div>
      <button onClick={buttonHandler}>{name}</button>
    </div>
  );
};

const Statistic = ({ good, bad, neutral, all, average, positive }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>
              <h3>Statistic</h3>
            </th>
          </tr>
          <tr>
            <td>
              <p>good {good}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>neutral {neutral}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>bad {bad}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>all {all}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>average {average}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>positive {positive}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;

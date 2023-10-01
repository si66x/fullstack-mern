const App = () => {
  const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  const objCourse = {
    part1: "Fundamentals of React",
    exercises1: 10,
    part2: "Using props to pass data",
    exercises2: 7,
    part3: "State of a component",
    exercises3: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content data={objCourse} />

      <Total
        exercise1={objCourse.exercises1}
        exercise2={objCourse.exercises2}
        exercise3={objCourse.exercises3}
      />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises :
        {props.exercise1 + props.exercise2 + props.exercise3}
      </p>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  );
};

const Content = ({ data }) => {
  return (
    <div>
      <Part part={data.part1} exercise={data.exercise1} />
      <Part part={data.part2} exercise={data.exercise2} />
      <Part part={data.part3} exercise={data.exercise3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

export default App;

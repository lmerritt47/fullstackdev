import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>This course is: {props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>This part of the course is: {props.parts}, and
    it has {props.Exercises} exercises.</p>

  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.Part1} Exercises={props.Exercises1} />
      <Part parts={props.Part2} Exercises={props.Exercises2} />
      <Part parts={props.Part3} Exercises={props.Exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>The total number of exercises is {props.exercise}.</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />

      <Content Part1={part1.name} Exercises1={part1['exercises']}
      Part2={part2.name} Exercises2={part2['exercises']}
      Part3={part3.name} Exercises3={part3['exercises']} />

      <Total exercise={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

//@lmerritt47
//07/03/2021 10:51 PM


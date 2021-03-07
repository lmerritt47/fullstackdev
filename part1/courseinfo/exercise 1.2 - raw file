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
    it has {props.exercises} exercises.</p>

  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.part1} exercises={props.exercises1} />
      <Part parts={props.part2} exercises={props.exercises2} />
      <Part parts={props.part3} exercises={props.exercises3} />
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10 
  const part2 = 'Using props to pass data'
  const exercises2 = 7 
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>

      <Content part1={part1} exercises1={exercises1} part2={part2}
      exercises2={exercises2} part3={part3} exercises3={exercises3}/>
          
      <Total exercise={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

//@lmerritt47 
//06.03.2021: 11:53 PM

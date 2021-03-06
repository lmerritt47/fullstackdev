import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>This course is: {props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>The course content has three parts: {props.part} and 
      includes {props.exercises} exercises in the respective courses.</p>
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

      <Content part={[part1, ", ", part2, ", and ", part3]} 
          exercises={[exercises1, ", ", exercises2, ", and ", exercises3]}/>
          
      <Total exercise={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

//@lmerritt47

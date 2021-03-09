import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return (
    <div>
      <h1>This course is: {course}</h1>
    </div>
  )
}


const Part = ({part}) => {
  return <p> This part of the course is: {part.name},
  and it has {part.exercises} exercises.</p>;
}


const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <p>The total number of exercises is {parts[0].exercises + 
      parts[1].exercises + parts[2].exercises}.</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))

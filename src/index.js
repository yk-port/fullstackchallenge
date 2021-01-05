import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Content = ({ parts }) => (
  <>
    <h2>Content</h2>
    <div>
      {parts[0].name} {parts[0].exercises}
    </div>
    <div>
      {parts[1].name} {parts[1].exercises}
    </div>
    <div>
      {parts[2].name} {parts[2].exercises}
    </div>
  </>
)

const Total = ({ parts }) => {
  let total = 0
  for (const part of parts) {
    total += part.exercises
  }
  return (
    <>
      <h2>Total</h2>
      <p>{total}</p>
    </>
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

import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => (
  <h1>{course.name}</h1>
)

const Content = ({ course }) => (
  <>
    <h2>Content</h2>
    {
      course.parts.map((part, i) => (
        <div key={i}>
          {part.name} {part.exercises}
        </div>
      ))
    }
  </>
)

const Total = ({ course }) => {
  let total = 0

  for (const part of course.parts) {
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => (
  <h1>{props.course}</h1>
)

const Content = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
)

const Total = (props) => (
  <p>
    {props.total}
  </p>
)

const App = () => {
  return (
    <div>
      <Header course={'Half Stack application development'} />
      <Content part={'Fundamentals of React'} exercises={10} />
      <Content part={'Using props to pass data'} exercises={7} />
      <Content part={'State of a component'} exercises={14} />
      <Total total={31} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

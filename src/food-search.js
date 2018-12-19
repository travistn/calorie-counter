import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map((item, index) => (
    <li key={index}>
      {item.food_name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions

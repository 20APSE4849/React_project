import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
    const topic = "my favaourite food is kottu "
    const item = "and rice"
  return (
   
    <div>
        <div className='topicBox'>
            <span className='text'>{topic}{item}
            my favourite food is {props.food} and the price is {props.price}<br/></span>
            {props.children}
        </div>
    </div>
  )
}

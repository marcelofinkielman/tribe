import React from 'react'
import './EventStructure.scss'
import Cooking from "../../assets/images/cooking.jpg"

function EventStructure({event, date, organizer, tags, description}) {
  return (
    <div>
      <div className="myPage__pictures">
      <img className="myPage__picture" src={Cooking} alt="book"></img>
          </div>
          <div className="myPage__description">
            <h4>Event: {event}</h4>
            <h4>Date and time: {date}</h4>
            <h4>Created by: {organizer}</h4>
            <h4>Tags: {tags}</h4>
            <h4>Description: {description}</h4>  
            <button className="myPage__button">Attend</button>
          </div>
    </div>
  )
}

export default EventStructure
import React from 'react'
import './EventStructure.scss'
import Cooking from "../../assets/images/cooking.jpg"

function EventStructure({ event, date, organizer, tags, description, button, attendButtonClick, zoom }) {
  /* console.log(date)
  const eventDate = new Date(date.timestamp) */
  return (
    <div className="event">
      <div className="event__pictures">
        <img className="event__picture" src={Cooking} alt="book"></img>
      </div>
      <div className="event__description">
        <h4>Event: <span className="event__element">{event}</span></h4>
        <h4>Date and time: <span className="event__element">{date/* {eventDate.toLocaleDateString()} */}</span></h4>
        <h4>Created by: <span className="event__element">{organizer}</span></h4>
        <h4>Tags: <span className="event__element">{tags}</span></h4>
        <h4>Description: <span className="event__elementD">{description}</span></h4>
        <h4>Zoom Channel: <span className="event__elementZ">{zoom}</span></h4>
        <button className="event__button" onClick={attendButtonClick}>Attend{button}</button>
      </div>
    </div>
  )
}

export default EventStructure
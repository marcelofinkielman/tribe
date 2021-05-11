import React from 'react'
import './EventStructure.scss'


function EventStructure({ event, date, organizer, tags, description, attendButtonClick, zoom, img, notAttendButtonClick }) {
  const eventDate = new Date(date)
  return (
    <div className="event">
      <div className="event__pictures">
        <img className="event__picture" src={img} alt="book"></img>
      </div>
      <div className="event__description">
        <h4 className="event__name">Event: <span className="event__element event__name--title">{event}</span></h4>
        <h4>Date and time: <span className="event__element"> {eventDate.toLocaleDateString()} {eventDate.toLocaleTimeString()} </span></h4>
        <h4>Created by: <span className="event__element">{organizer}</span></h4>
        <h4>Tags: <span className="event__element">{tags}</span></h4>
        <h4>Description: <span className="event__elementD">{description}</span></h4>
        <div className="event__zoom">
          <h4>Zoom Channel: <span className="event__elementZ">{zoom}</span></h4>
        </div>
        <div className="event__buttons">
          <div className="event__button-container">
            <button className="event__button" onClick={attendButtonClick}>Attend</button>
          </div>
          <div className="event__button-container">
            <button className="event__button" onClick={notAttendButtonClick}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventStructure
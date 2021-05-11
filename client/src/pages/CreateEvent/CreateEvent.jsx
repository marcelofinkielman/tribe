import React from 'react'
import "./CreateEvent.scss"
import axios from "axios"

const APIURL = "http://localhost:8080/create"


class CreateEvent extends React.Component {

  state = {
    id: "",
    event: "",
    date: "",
    img: "",
    organizer: "",
    description: "",
    zoom: "",
    tags: [],

  }
  //event for the cancel button
  cancelOnClick = (e) => {
    e.preventDefault();
    this.props.history.push('/profile')
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post(`${APIURL}`, {
      event: e.target.event.value,
      date: e.target.date.value,
      organizer: e.target.organizer.value,
      zoom: e.target.zoom.value,
      tags: e.target.tags.value,
      description: e.target.description.value,

    })
      .then(res => {
        this.props.history.push('/profile')
        alert('Event Created!')
      })
      .catch(err => {
        console.error(err)
      })
  };
  render() {




    return (
      <>
        <div className="heading">
          <h2>CREATE AN EVENT</h2>
        </div>
        <div className="heading__divisor-parent">
          <div className="heading__divisor"></div>
        </div>
        <div className="create">
          <form className="create__form"
            onSubmit={(e) => {
              this.handleOnSubmit(e)
            }}
          >
            <div className="create__event-inputs">
              <label className="create__label">Event name</label>
              <input className="create__event"
                name="event"
                type="text"
                placeholder="Event name"
                autoComplete="off"
                value={this.state.event} onChange={(e) => {
                  this.setState({ event: e.target.value })
                  e.preventDefault()
                }} />
              <label className="create__label">Date</label>
              <input className="create__date"
                name="date"
                type="datetime-local"
                placeholder="date"
                autoComplete="off"
                value={this.state.date} onChange={(e) => {
                  this.setState({ date: e.target.value })
                  e.preventDefault()
                }} />
              <label className="create__label">Organizer</label>
              <input className="create__event"
                name="organizer"
                type="text"
                placeholder="Your name"
                autoComplete="off"
                value={this.state.organizer} onChange={(e) => {
                  this.setState({ organizer: e.target.value })
                  e.preventDefault()
                }} />
              <label className="create__label">Tags</label>
              <input className="create__event"
                name="tags"
                type="links"
                placeholder="Interests"
                autoComplete="off"
                value={this.state.tags} onChange={(e) => {
                  this.setState({ tags: e.target.value })
                  e.preventDefault()
                }} />
              <label className="create__label">Zoom Channel</label>
              <input className="create__event"
                name="zoom"
                type="text"
                placeholder="Place your zoom channel here"
                value={this.state.zoom} onChange={(e) => {
                  this.setState({ zoom: e.target.value })
                  e.preventDefault()
                }} />
              <label className='create__label'> Add a description for your event</label>
              <textarea className='create__description'
                name='description'
                rows='15'
                placeholder='Add the description of your event'
                autoComplete="off"
                value={this.state.description}
                onChange={(e) => {
                  this.setState({ description: e.target.value })
                  e.preventDefault()
                }} />
            </div>
            <div className="create__buttons">
              <button type="submit" className="create__publish-event">Create</button>
              <button type="button"
                onClick={(e) => { this.cancelOnClick(e) }} className="create__cancel-button">Cancel</button>
            </div>
          </form>
        </div>
      </>
    )
  }

}

export default CreateEvent

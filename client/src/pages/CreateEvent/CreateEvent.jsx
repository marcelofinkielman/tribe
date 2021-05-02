import React from 'react'
import "./CreateEvent.scss"
import CreateInput from '../../components/CreateInput/CreateInput'
import { Link } from 'react-router-dom'
import CancelButton from '../../components/CancelButton/CancelButton'
import SubmitButton from '../../components/SubmitButton/SubmitButton'

class CreateEvent extends React.Component {

  state = {
    id: "",
    event: "",
    date: "",
    img: "",
    organizer: "",
    description: "",
    tags: [],

  }

  handleChange = (event) => {
    event.preventDefault();

  };



  render() {
    //event for the cancel button
    const cancelOnClick = (e) => {
      e.preventDefault();
      this.props.history.push('/')
    };

    return (
      <>
        <div className="heading">
          <h2>CREATE AN EVENT</h2>
        </div>
        <div className="create">
          <form className="create__form">
            <div className="create__event-inputs">
              <label className="create__label">Event name</label>
              <input className="create__event"
                name="title"
                type="text"
                placeholder="Event name"
                value={this.state.event} onChange={(e) => {
                  this.setState({ event: e.target.value })
                  e.preventDefault()
                }} />
              <label className="create__label">Date</label>
              <input className="create__date"
                name="date"
                type="date"
                placeholder="date"
                value={this.state.date} onChange={(e) => {
                  this.setState({ date: e.target.value })
                  e.preventDefault()
                }} />
              <label className="create__label">Organizer</label>
              <input className="create__event"
                name="organizer"
                type="text"
                placeholder="Your name"
                value={this.state.organizer} onChange={(e) => {
                  this.setState({ organizer: e.target.value })
                  e.preventDefault()
                }} />
              <label className='create__label'> Add a description for your event</label>
              <textarea name='description'
                className='create__description'
                rows='15'
                placeholder='Add the description of your event'
                value={this.state.description}
                onChange={(e) => {
                  this.setState({ description: e.target.value })
                  e.preventDefault()
                }} />
            </div>
            <div className="create__buttons">
            <button type="submit" className="create__publish-event">Create</button>
            <button type="button"
              onClick={(e) => { cancelOnClick(e) }} className="create__cancel-button">Cancel</button>
              </div>
          </form>
        </div>
      </>
    )
  }

}

export default CreateEvent

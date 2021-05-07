import React from 'react'
import "./MyInterests.scss"

class MyInterests extends React.Component {
  state = {
    search: ''
  }

updateSearch(event) {
  this.setState({search: event.target.value.substr(0,20)})
}

render () {
  
  return (
    <>
    <div className="interests">
      <h1 className ="interests__title">Chose 5 activities that most describe you:</h1>
      <p>1 - <input
        className="create__event"
        name="interest"
        type="text" />
      </p>
      <p>2 - <input
        className="create__event"
        name="interest"
        type="text" />
      </p>
      <p>3 - <input
        className="create__event"
        name="interest"
        type="text" />
      </p>
      <p>4 - <input
        className="create__event"
        name="interest"
        type="text" />
      </p>
      <p>5 - <input
        className="create__event"
        name="interest"
        type="text" />
      </p>

      <button type="submit" className="create__publish-event">Create</button>
    </div>
    </>
  )
}
}

export default MyInterests

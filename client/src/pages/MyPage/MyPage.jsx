import React from 'react';
import axios from "axios"
import "./MyPage.scss"
import EventStructure from "../../components/EventStructure/EventStructure"


const APIURL = "http://localhost:8080/events"
class MyPage extends React.Component {

  state = {
    eventList: [],
    suggestedEvent: [],
    attending: [],
    notAttending: [],
    currentEvent: {}
  }


  componentDidMount() {

    axios.get(APIURL)
      .then(res => {
        let attending = []
        let notAttending = []
        res.data.forEach((event) => {
          if (event.attend) {
            attending.push(event)
          } else {
            notAttending.push(event)
          }
        })
        this.setState({ attending, notAttending })
      })

      .catch(err => {
        console.error(err)
      })

  }
  componentDidUpdate = () => {

  }

  handleAttend = (e, event) => {
    e.preventDefault();
    let newNotAttendingList = this.state.notAttending.filter((notAttendingEvent) => {
      return notAttendingEvent.id !== event.id
    })
    let newAttendingList = [...this.state.attending]
    newAttendingList.push(event)
    this.setState({
      notAttending: newNotAttendingList,
      attending: newAttendingList,
    })
  }

  render() {

    return (
      <div className="myPage">
        <div className="myPage__heading">
          <h2>EVENTS TO ATTEND</h2>
        </div>
        <div className="myPage__events">
          {
            this.state.attending
              .filter(event => event.id !== this.state.suggestedEvent.id)
              .map((event) =>
                <EventStructure
                  key={event.id}
                  event={event.event}
                  img={event.img}
                  date={event.date}
                  organizer={event.organizer}
                  tags={event.tags}
                  description={event.description}
                  button={event.attend}
                  zoom={event.zoom}
                  attendButtonClick={(e) => this.handleNotAttend(e, event)}

                />
              )
          }
        </div>
        <div className="myPage__heading">
          <h2>SUGGESTIONS</h2>
        </div>
        <div className="myPage__suggestions">
          {
            this.state.notAttending
              .filter(event => event.id !== this.state.suggestedEvent.id)
              .map((event) =>
                <EventStructure
                  key={event.id}
                  img={event.img}
                  event={event.event}
                  date={event.date}
                  organizer={event.organizer}
                  tags={event.tags}
                  description={event.description}
                  zoom={event.zoom}
                  button={event.attend}
                  attendButtonClick={(e) => this.handleAttend(e, event)}

                />
              )
          }
        </div>
      </div>
    )
  }

}

export default MyPage

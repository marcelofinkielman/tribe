import React from 'react';
import axios from "axios"
import "./MyPage.scss"
import Book from "../../assets/images/book.jpg"
import Cooking from "../../assets/images/cooking.jpg"
import EventStructure from "../../components/EventStructure/EventStructure"
import { Link } from "react-router-dom"


const APIURL = "http://localhost:8080/events"

class MyPage extends React.Component {

  state ={
    event: {},
    sugestedEvent: []

  }

  componentDidMount() {

    axios.get(APIURL)
      .then(res => {
        console.log(res.data);
        this.setState({ sugestedEvent: res.data })
      })
      .then(res => {
        const tag = this.props.tag ? this.props.tag : this.state.sugestedEvent[0].tag
        axios.get(APIURL + "/" + tag)
          .then(res => {
            this.setState({ event: res.data })
          })

      })
      .catch(err => {
        console.error(err)
      })
  }
  componentDidUpdate = () => {
    window.scrollTo(0, 0)
    if (this.props.tag !== undefined && this.state.event.tag !== this.props.tag) {
      console.log(this.props.tag)
      console.log(this.state.event.tag !== this.props.tag)
      axios.get(APIURL + "/" + this.props.tag)
        .then((res => {
          this.setState({ event: res.data })
        }))
    } if (this.props.tag === undefined && this.state.event.tag !== this.state.sugestedEvent[0].tag) {
      axios.get(APIURL + "/" + this.state.sugestedEvent[0].tag)
        .then((res => {
          this.setState({ event: res.data })
        }),

        )
        .catch(err => {
          console.error(err)
        })
    }
  }
  render() {
    return (
      <div className="myPage">
        <div className="myPage__heading">
          <h2>EVENTS TO ATTEND</h2>
        </div>
        <div className="myPage__events">
          <div className="myPage__pictures">
            <img className="myPage__picture" src={Book} alt="book"></img>
          </div>
          <div className="myPage__description">
            <h4>Event:</h4>
            <h4>Created by:</h4>
            <h4>Description:</h4>
            <h4>Date and time:</h4>
          </div>
        </div>
        <div className="myPage__heading">
          <h2>SUGESTIONS</h2>
        </div>
        <div className="myPage__sugestions">
        {
         this.state.sugestedEvent
         .filter(event => event.id !== this.state.sugestedEvent.id)
         .map((event) =>
          <EventStructure 
          event={event.event}
          date={event.date}
          organizer={event.organizer}
          tags={event.tags}
          description={event.description}
          />
          )
        }
        </div>
      </div>
    )
  }

}

export default MyPage

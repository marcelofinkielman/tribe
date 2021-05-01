import React from 'react';
import "./MyPage.scss"
import Book from "../../assets/images/book.jpg"
import Cooking from "../../assets/images/cooking.jpg"

const hobbies = "http://localhost:8080/profile";

class MyPage extends React.Component {
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
          <div className="myPage__pictures">
            <img className="myPage__picture" src={Cooking} alt="book"></img>
          </div>
          <div className="myPage__description">
            <h4>Event:</h4>
            <h4>Created by:</h4>
            <h4>Description:</h4>
            <h4>Date and time:</h4>
            <button className="myPage__button">Attend</button>
          </div>
        </div>
      </div>
    )
  }

}

export default MyPage

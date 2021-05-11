import axios from 'axios'
import React from 'react'
import "./MyInterests.scss"

const APIURL = "http://localhost:8080/interests"

class MyInterests extends React.Component {
  state = {
    id: "",
    name: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    currentInterests: []
  }

  componentDidMount() {
    axios.get(`${APIURL}`)
      .then(res => {
        this.setState({
          interest1: res.data[0],
          interest2: res.data[1],
          interest3: res.data[2],
          interest4: res.data[3],
          interest5: res.data[4],
        })
      })
  }

  handleInterests = (e) => {
    e.preventDefault();
    const { interest1, interest2, interest3, interest4, interest5 } = this.state;
    axios.post(`${APIURL}`, {
      name: "Marcelo", //change it later
      interests: [
        interest1,
        interest2,
        interest3,
        interest4,
        interest5
      ]

    })
      .then(res => {
        this.props.history.push('/profile')
        alert('thank you!')
      })
      .catch(err => {
        console.error(err)
      })

    
  }

  handleActivitiesUpdate = (e) => {
    const inputControl = {
      'interest1': () => this.setState({ interest1: e.target.value }),
      'interest2': () => this.setState({ interest2: e.target.value }),
      'interest3': () => this.setState({ interest3: e.target.value }),
      'interest4': () => this.setState({ interest4: e.target.value }),
      'interest5': () => this.setState({ interest5: e.target.value }),
    };
    inputControl[e.target.name]()
  }



  render() { 
    return (
      <>
        <div className="interests">
          <form className="interests__form"
            onSubmit={(e) => {
              this.handleInterests(e)
            }}>
            <h1 className="interests__title">Chose 5 activities that describes you the most:</h1>
            <p>1 - <input
              className="create__event"
              name="interest1"
              type="text"
              placeholder="What are you looking for?"
              value={this.state.interest1}
              autoComplete="off"
              onChange={
                (e) => this.handleActivitiesUpdate(e)
              }
            />
            </p>
            <p>2 - <input
              className="create__event"
              name="interest2"
              type="text"
              placeholder="What are you looking for?"
              value={this.state.interest2}
              autoComplete="off"
              onChange={
                (e) => this.handleActivitiesUpdate(e)
              }
            />
            </p>
            <p>3 - <input
              className="create__event"
              name="interest3"
              type="text"
              placeholder="What are you looking for?"
              value={this.state.interest3}
              autoComplete="off"
              onChange={
                (e) => this.handleActivitiesUpdate(e)
              }
            />
            </p>
            <p>4 - <input
              className="create__event"
              name="interest4"
              type="text"
              placeholder="What are you looking for?"
              value={this.state.interest4}
              autoComplete="off"
              onChange={
                (e) => this.handleActivitiesUpdate(e)
              }
            />
            </p>
            <p>5 - <input
              className="create__event"
              name="interest5"
              type="text"
              placeholder="What are you looking for?"
              value={this.state.interest5}
              autoComplete="off"
              onChange={
                (e) => this.handleActivitiesUpdate(e)
              }
            />
            </p>
            <button 
            className="interests__button"
            type="submit"
              >Create
              </button>
          </form>
        </div>
      </>
    )
  }
}

export default MyInterests

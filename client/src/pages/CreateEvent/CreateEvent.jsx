import React from 'react'
import "./CreateEvent.scss"
import CreateInput from '../../components/CreateInput/CreateInput'
import { Link } from 'react-router-dom'
import CancelButton from '../../components/CancelButton/CancelButton'
import SubmitButton from '../../components/SubmitButton/SubmitButton'

class CreateEvent extends React.Component {

  state = {
    event: "",
    img: "",
    city: "",
    tags: [],

  }

  handleChange = (event) => {
    event.preventDefault();
    
  };
    
  render() {
    return (
      <>
      <div className="heading">
            <h2>CREATE AN EVENT</h2>
          </div>
        <div className="create">
          
          <form>
           
          </form>
        </div>
      </>
    )
  }

}

export default CreateEvent

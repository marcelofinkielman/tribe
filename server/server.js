const express = require("express")
const app = express();
const cors = require("cors");
const fs = require('fs');
const uuid = require('uuid');
app.use(cors());
app.use(express.json());

const filePath = './data/events.json'

const port = 8080;
function getEvents() {
  const data = fs.readFileSync(filePath)
  return JSON.parse(data)
}

function saveEvents(events) {
  let json = JSON.stringify(events, null, '\t')
  fs.writeFileSync(filePath, json)
}

//get all events
app.get('/events', (req, res) => {
  res.status(200).send(getEvents())
})

//get alls events for an specific tag
app.get('/events/:tag', (req, res) => {
  let tag = req.params.tag
  let events = getEvents().filter((event) => {
    return event.tags.includes(tag)
  })
  res.status(200).send(events)
})

//list all tags created so far
app.get('/tags', (req, res) => {
  let tags = {}
  getEvents().forEach((event) => {
    event.tags.forEach((tag) => {
      if (tags[tag]) {
        tags[tag] += 1
      } else {
        tags[tag] = 1
      }
    })
  })
  res.status(200).send(tags)
})

app.post("/create", function (req, res) {
  let { event, date, description, organizer, tags } = req.body

  //get all events
  let events = getEvents()

  //append the new event
  let newEvent = {
    id: uuid.v4(),
    event,
    date,
    description,
    organizer,
    tags
  }
  //validate the request object
  if (!req.body.event ||
    !req.body.date ||
    !req.body.description ||
    !req.body.organizer ||
    !req.body.tags) {
    return res.status(400).send({ error: 'Missing data' })
  } else {
    //load all events into a variable
    events.push(newEvent)

  //save (save on disk/file) the list of events including the new one
  saveEvents(events)
  res.status(200).send(newEvent)
   
  }
 
})


app.listen(port, () => console.log(`Express listening on port ${port}`));
const express = require("express")
const app = express();
const cors = require("cors");
const fs = require('fs');
const uuid = require('uuid');
app.use(cors());
app.use(express.json());

const filePath = './data/events.json'
const userFilePath = './data/users.json'

const port = 8080;
function getEvents() {
  const data = fs.readFileSync(filePath)
  return JSON.parse(data)
}

function getUser() {
  const data = fs.readFileSync(userFilePath)
  return JSON.parse(data)
}

function saveEvents(events) {
  let json = JSON.stringify(events, null, '\t')
  fs.writeFileSync(filePath, json)
}

/* function saveUser(events) {
  let json = JSON.stringify(events, null, '\t')
  fs.writeFileSync(filePath, json)
} */

//get all events
app.get('/events', (req, res) => {
let userActivities = getUser()[0].activities
let allEvents = getEvents()
let filteredEvents = allEvents.filter(event => event.tags.some(tag => userActivities.includes(tag)))
console.log(filteredEvents)
 
console.log(userActivities)
  res.status(200).send(filteredEvents)
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
  let { event, date, description, organizer, tags, zoom } = req.body

  //get all events
  let events = getEvents()

  //append the new event
  let newEvent = {
    id: uuid.v4(),
    event,
    date,
    description,
    zoom,
    organizer,
    tags: tags.replace(/\s/g, '').split(","),
    attend: false,
    img: "https://firebasestorage.googleapis.com/v0/b/tribe-7761c.appspot.com/o/fitness.jpg?alt=media&token=c00624d6-8c3e-420a-81a0-7ca632af9b32"
  }
  console.log(tags)
  console.log(tags.replace(/\s/g, '').split(","))
  //validate the request object
  if (!req.body.event ||
    !req.body.date ||
    !req.body.description ||
    !req.body.organizer ||
    !req.body.zoom ||
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
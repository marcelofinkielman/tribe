let express = require("express");
let app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const port = 8080;

app.use(express.json());
app.use(cors());
app.use("/profile", require("./routes/MyPage"));
app.use("/createEvent", require("./routes/CreateEvent"));
app.listen(port, () => console.log(`Express listening on port ${port}`));
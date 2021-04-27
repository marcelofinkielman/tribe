let express = require("express");
let app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const port = 8080;

app.use(express.json());
app.use(cors());
app.use("/myPage", require("./routes/warehouses"));
app.use("/createEvent", require("./routes/inventory"));
app.listen(port, () => console.log(`Express listening on port ${port}`));
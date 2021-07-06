const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes");

const PORT = process.env.PORT || 4001;

const app = express();
app.use(cors())
app.use("/api", indexRouter);

// Error handler
app.use((err, req, res, next) => {
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
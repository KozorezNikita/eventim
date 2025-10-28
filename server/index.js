const express = require("express");
const cors = require("cors");
const path = require("path");

const countryRouter = require("./routes/country.route");
const segmentRouter = require("./routes/segment.route");
const brandRouter = require("./routes/brand.route");
const productRouter = require("./routes/product.route");
const concertRouter = require("./routes/concert.route");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

// API маршрути
app.use("/api", countryRouter);
app.use("/api", segmentRouter);
app.use("/api", brandRouter);
app.use("/api", productRouter);
app.use("/api", concertRouter);

// --------- Додано для React статики ---------
const clientBuildPath = path.join(__dirname, "../client/build");

// Роздача статики з React build
app.use(express.static(clientBuildPath));

// Всі інші маршрути віддають index.html (щоб працював React Router)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});
// --------------------------------------------

app.listen(PORT, () => console.log(`server started on port ${PORT}`));


/*const express = require("express")
const cors = require("cors");


const countryRouter = require("./routes/country.route")
const segmentRouter = require("./routes/segment.route")
const brandRouter = require("./routes/brand.route")
const productRouter = require("./routes/product.route")

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api", countryRouter);
app.use("/api", segmentRouter);
app.use("/api", brandRouter)
app.use("/api", productRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}` ))

*/
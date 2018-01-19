const express = require("express"),
			exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("home", { title: "Test title", name: "Eugene", dataArray: ["olena", "michael", "george"] }));


app.listen(3000, () => console.log("Server has started!!!"));
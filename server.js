const express = require("express"),
			exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("home"));


app.listen(3000, () => console.log("Server has started!!!"));
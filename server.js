//dependencies
const express = require('express');
const path = require('path');
const app = express();

let PORT = process.env.PORT || 3000;

//Sets up parsing in express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

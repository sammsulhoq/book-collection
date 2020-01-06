const express = require("express");
const graphQLHttp = require("express-graphql");
const cors = require("cors");

const schemas = require("./graphql/schema");

const app = express();

app.use(cors());
require("./db/connection")();
app.use("/graphql", graphQLHttp({
    schema: schemas,
    graphiql: true
}));


app.listen(3000, () => {
    console.log("Now listening for requests on port 3000...");
});
const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql")
const { buildschema } = require("graphql")

const app = express();

app.use(bodyParser.json());

app.use("/ graphql", graphqlHttp())

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var expressGraphQL = require("express-graphql");
var schema_1 = require("./schema/schema");
var app = express();
app.use('/graphql', expressGraphQL({
    schema: schema_1.default,
    graphiql: true,
}));
var port = 4000;
app.listen(port, function () {
    console.log('Listening the server ' + port);
});

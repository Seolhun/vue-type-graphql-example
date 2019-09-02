import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import cors from "cors";
import express from "express";
import graphqlHTTP from "express-graphql";
import session from "express-session";
import helmet from "helmet";

import { passport } from "./config/auth/passport";
import { schema } from "./app/routes/graphql/schema";
import { Config } from "./config/environments";

import { auth_router, user_router } from "./app/routes/auth";

const env = Config.setConfiguration();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.disable("x-powered-by");

// Session
const expiryDate = new Date(Date.now() + 1000 * 60 * 30); // 30 min
app.use(
  cookieSession({
    name: "cookie-session-id",
    maxAge: env.COOKIE_SESSION_MAX_AGE,
    keys: env.COOKIE_SESSION_KEYS,
  }),
);
app.use(
  session({
    name: "session-id",
    secret: "hunseol_typescript_graphql",
    resave: false,
    saveUninitialized: true,
    maxAge: env.SESSION_MAX_AGE,
    keys: env.SESSION_KEYS,
    cookie: {
      secure: true,
      httpOnly: true,
      expires: expiryDate,
    },
  }),
);
app.set("trust proxy", 1);

// PasportJS
app.use(passport.initialize());
app.use(passport.session());

// GraphQL
app.use(
  "/graphql",
  graphqlHTTP(async request => {
    const startTime = Date.now();
    return {
      schema,
      graphiql: process.env.NODE_ENV !== "production",
      extensions({ document, variables, operationName, result }) {
        return {
          result: bodyParser.json(result),
          variables,
          operationName,
          runTime: Date.now() - startTime,
        };
      },
    };
  }),
);

// Express Router
app.get("/", (req, res) => {
  res.send("Hello World!!, BookManagement System by Seolhun");
});

// Sub Routes
app.use("/auth", auth_router);
app.use("/user", user_router);

// Run Server
app
  .listen(env.EXPRESS_PORT, () => {
    console.log("=========================app.ts===========================");
    console.log(`Listening the server ${env.EXPRESS_PORT}`);
    console.log("====================================================");
  })
  .on("error", err => {
    console.error(err);
  });

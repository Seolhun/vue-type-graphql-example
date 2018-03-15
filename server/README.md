# Book Management System.
- Author : [Seolhun](https://github.com/Seolhun)
- Date : 2017.10.19

## Used Stacks
1. `TypeScript`
2. `NodeJS`, `Express`
3. `Vue-Cli`
4. `GraphQL`
6. `Apollo Client`
7. `Sequelize`

## How to run
- `Server`
  - `npm install -g ts-node vue-cli typescript`
  1. `npm run dev`
  2. [http://localhost:4000/graphql](http://localhost:4000/graphql)

- `DB`
  1. Create Default database using Raw SQL.
    - `/server/db/default.sql`
  2. Set Database configuration.
    - `/server/src/repository/database.ts`
  3. Set `Sync` Database config
    - `sequelize.sync()` - create & update
    - `sequelize.sync({force: true})` - create & drop

## Reference
- `Server`
  - [NodeJS - Express](http://expressjs.com/)
  - [Express Session](https://github.com/expressjs/session#options)
  - [GraphQL](http://graphql.org/learn/)
  - [Express GraphQL](https://github.com/graphql/express-graphql)
  - [Sequelize](http://docs.sequelizejs.com/)

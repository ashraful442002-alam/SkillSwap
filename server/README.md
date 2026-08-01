# SkillSwap Server

REST API backend for the SkillSwap platform — a skill-sharing application where users can add, browse, view, update, and delete skills. Built with Node.js, Express, and MongoDB (MongoDB Atlas).

## Tech Stack

- [Node.js](https://nodejs.org/) — JavaScript runtime
- [Express](https://expressjs.com/) — Web framework
- [MongoDB](https://www.mongodb.com/) — NoSQL database (Atlas)
- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/) — Official MongoDB driver
- [dotenv](https://github.com/motdotla/dotenv) — Environment variable management
- [cors](https://github.com/expressjs/cors) — Cross-origin resource sharing

## Project Structure

```
server/
├── index.js          # App entry point, middleware, server setup
├── db.js             # MongoDB client & database connection
├── routes/
│   ├── skills.js     # Skill CRUD API routes
│   └── users.js      # User routes
├── .env              # Environment variables (not committed)
└── package.json
```


## API Reference

Base URL: `http://localhost:5000`

### Skills

| Method | Endpoint         | Description                                  |
| ------ | ---------------- | -------------------------------------------- |
| GET    | `/skills`        | Get all skills                               |
| GET    | `/skills/:id`    | Get a single skill by MongoDB ObjectId        |
| POST   | `/skills`        | Create a new skill                           |
| PUT    | `/skills/:id`    | Update an existing skill                     |
| DELETE | `/skills/:id`    | Delete a skill                               |


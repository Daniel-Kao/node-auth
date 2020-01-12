import express from "express";
import Redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'

const RedisStore = connectRedis(session)

const client = new Redis({
  port
  host
})

const app = express();

app.use(
  session({
    store: new RedisStore({ client }),
    secret: 'keyboard cat',
    resave: false,
  })
)



app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

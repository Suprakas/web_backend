
require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Suprakash');
})

app.get('/login', (req, res) => { 
    res.send("<h1>Please login to my application !!</h1>");
})

app.get('/Youtube', (req, res) => {
    res.send("<h2>Chai aur code</h2>");
})

const githubdata = {
    "login": "Suprakas",
    "id": 49510847,
    "node_id": "MDQ6VXNlcjQ5NTEwODQ3",
    "avatar_url": "https://avatars.githubusercontent.com/u/49510847?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Suprakas",
    "html_url": "https://github.com/Suprakas",
    "followers_url": "https://api.github.com/users/Suprakas/followers",
    "following_url": "https://api.github.com/users/Suprakas/following{/other_user}",
    "gists_url": "https://api.github.com/users/Suprakas/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Suprakas/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Suprakas/subscriptions",
    "organizations_url": "https://api.github.com/users/Suprakas/orgs",
    "repos_url": "https://api.github.com/users/Suprakas/repos",
    "events_url": "https://api.github.com/users/Suprakas/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Suprakas/received_events",
    "type": "User",
    "site_admin": false,
    "name": "SUPRAKASH BALLAV",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": "Working as Infra cloud Support Analyst in Accenture.",
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2019-04-11T06:30:30Z",
    "updated_at": "2024-08-24T09:29:16Z"
};

app.get("/github", (req, res) => {
    res.json(githubdata);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
// @ts-check

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 4000;

app.use('/', async (req, res, next) => {
  const requestAt = new Date();
  // @ts-ignore
  req.reqestedAt = requestAt;
  const file = fs.promises.readFile('.gitignore');
  // @ts-ignore
  req.gitignore = file;
  next();
});

app.use((req, res) => {
  // @ts-ignore
  const request = req.reqestedAt;
  // @ts-ignore
  const gitfile = req.gitignore;
  console.log(request, gitfile);
  res.send('Hello express');
});
app.listen(PORT, () => {
  console.log('SERVER', PORT);
});

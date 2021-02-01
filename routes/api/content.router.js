const express = require('express');
const router = express.Router();
require('isomorphic-fetch');

const EmailContent = require('../../models/emailContent');

router.get('/', (req, res) => {
  EmailContent.find().then((content) => res.json(content));
});

router.get('/goodtime', (req, res) => {
  EmailContent.find({
    subjectLine: 'Is now still a good time?',
  }).then((goodtime) => res.json(goodtime));
});

router.get('/amc', async (req, res) => {
  try {
    await fetch(
      'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=amc&interval=5min&apikey=07LIJ4I4DJCFIKUR'
    )
      .then((res) => res.json(res))
      .then((json) => res.json(json));
  } catch (error) {
    console.log(error);
    return res.statusCode(400);
  }
});

router.get('/gme', async (req, res) => {
  try {
    await fetch(
      'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=gme&interval=5min&apikey=07LIJ4I4DJCFIKUR'
    )
      .then((res) => res.json(res))
      .then((json) => res.json(json));
  } catch (error) {
    console.log(error);
    return res.statusCode(400);
  }
});

router.get('/tsla', async (req, res) => {
  try {
    await fetch(
      'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=tsla&interval=5min&apikey=07LIJ4I4DJCFIKUR'
    )
      .then((res) => res.json(res))
      .then((json) => res.json(json));
  } catch (error) {
    console.log(error);
    return res.statusCode(400);
  }
});

router.get('/amzn', async (req, res) => {
  try {
    await fetch(
      'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=amzn&interval=5min&apikey=07LIJ4I4DJCFIKUR'
    )
      .then((res) => res.json(res))
      .then((json) => res.json(json));
  } catch (error) {
    console.log(error);
    return res.statusCode(400);
  }
});

router.post('/', (req, res) => {
  const newEmailContent = new EmailContent({
    subjectLine: req.body.subjectLine,
    emailContent: req.body.emailContent,
    linkToInformation: req.body.linkToInformation,
    version: req.body.version,
  });

  newEmailContent.save().then((content) => res.json(content));
});

router.delete('/:id', (req, res) => {
  EmailContent.findById(req.params.id)
    .then((content) => content.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;

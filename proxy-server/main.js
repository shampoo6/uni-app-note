const express = require('express');
const cors = require('cors')
const axios = require('axios');
const qs = require('qs');
const app = express();

const request = axios.create({ baseURL: 'https://movie.douban.com' });

app.use(cors())

app.get('/test', (req, res) => {
    axios
        .get('http://www.bilibili.com')
        .then((r) => {
            res.send(r.data);
        })
        .catch((reason) => {
            console.error(reason);
            res.send(reason);
        });
});

app.get('/j/search_tags', (req, res) => {
    console.log('/j/search_tags');
    request
        .get(`/j/search_tags?${qs.stringify(req.query)}`)
        .then((r) => {
            res.json(r.data);
        })
        .catch((reason) => {
            res.json({ reason });
        });
});

app.get('/j/search_subjects', (req, res) => {
    console.log('/j/search_subjects');
    request
        .get(`/j/search_subjects?${qs.stringify(req.query)}`)
        // .get(
        //     `https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0`
        // )
        .then((r) => {
            res.json(r.data);
        })
        .catch((reason) => {
            res.json({ reason });
        });
});

app.get('/j/subject_abstract', (req, res) => {
    console.log('/j/subject_abstract');
    request
        .get(`/j/subject_abstract?${qs.stringify(req.query)}`)
        .then((r) => {
            res.json(r.data);
        })
        .catch((reason) => {
            res.json({ reason });
        });
});

app.listen(1024, () => {
    console.log('server start on: http://127.0.0.1:1024');
});

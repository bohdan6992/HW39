const express = require('express');
const router = express.Router();
const axios = require('axios');
const URL = 'https://dog.ceo/api/breeds/list/all';
const optionsList = [];

const generateSelectHTML = (res, img) => {
  axios
  .get(URL)
  .then((r) => {
    const breed = r.data.message;
    for (item in breed){
      if (breed[item].length) {
        breed[item].forEach(element => {
          optionsList.push(`<option value="${item}&q2=${element}"> ${element} ${item} </option>\n`);
        });
      } else {
        optionsList.push(`<option value="${item}"> ${item} </option>\n`);
      }
    }
    res.render('cabinet', {optionsList: optionsList, img: img});
  })  
}

router.get('/', (req, res) => { 
  if (req.query.q1) {
    axios
      .get(`https://dog.ceo/api/breed/${req.query.q1}/images/random`)
      .then((r) => {
        let str = `<img src="${r.data.message}">`
        generateSelectHTML(res, str);
      })
  } else if (req.query.q2)  { 
    axios
      .get(`https://dog.ceo/api/breed/${req.query.q1}/${req.query.q2}/images/random`)
      .then((r) => {
        let str = `<img src="${r.data.message}">`
        generateSelectHTML(res, str);
      })    
  } else {
    generateSelectHTML(res); 
  }
});

module.exports = router;
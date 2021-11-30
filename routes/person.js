const express = require('express');
const router = express.Router();
const axios = require('axios');

const getInfo = async(url, ress) => {
  const resultPerson = await axios.get(url);
  const name = resultPerson.data.name;
  const filmsArr = resultPerson.data.films;
  
  filmsList = ''

  for await (let film of filmsArr) {
    const resultFilm = await axios.get(film);
    const filmTitle = resultFilm.data.title;
    filmsList = `${filmsList}<div class="film">${filmTitle}</div>`
    console.log(filmsList)
  }

  ress.render('person', {name:name, filmsList:filmsList});
  console.log(filmsList);
}

router.get('/:personNum', (req, res) => { 
  const URL = `https://swapi.dev/api/people/${req.params.personNum}`; 
  getInfo(URL, res)
});

module.exports = router;
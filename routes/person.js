const express = require('express');
const router = express.Router();
const axios = require('axios');
const filmsList =[]
const speciesList =[]

const getInfo = async(url, ress) => {
  const resultPerson = await axios.get(url);
  const name = resultPerson.data.name;
  const filmsArr = resultPerson.data.films;
  
  filmsArr.forEach(async(element) => {
    const resultFilm = await axios.get(element);
    const filmTitle = resultFilm.data.title;
    filmsList.push(`<div class="film">${filmTitle}</div>`)
    const speciesArr = resultFilm.data.species;

    speciesArr.forEach(async(el) => {
      const resultSpecies = await axios.get(el);
      const species = resultSpecies.data.name;
      speciesList.push(`<li>${species}</li>`)
    });
  });

  ress.render('person', {name:name, filmsList:filmsList, speciesList:speciesList});
  console.log(filmsList);
}

router.get('/:personNum', (req, res) => { 
  const URL = `https://swapi.dev/api/people/${req.params.personNum}`;
  getInfo(URL, res)
});

module.exports = router;
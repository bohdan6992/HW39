const express = require('express');
const router = express.Router();
const axios = require('axios');
// const URL = 'https://swapi.dev/api/people/1';
const optionsList = [];

const getCaracter = async(url) => {
  const result = await axios.get(url);
  const name = result.data.name;
  const films = result.data.films;
  console.log(name)
  console.log(films)
  // res.render('cabinet', name);
  // res.render('cabinet', films);
}

URL = 'https://swapi.dev/api/people/1';

getCaracter(URL)
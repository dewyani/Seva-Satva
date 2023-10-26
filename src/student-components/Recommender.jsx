import React from 'react'
import axios from 'axios';

const Recommender = () => {
  return (
    <div>Recommender</div>
  )
}

export default Recommender



const options = {
  method: 'GET',
  url: 'https://book-finder1.p.rapidapi.com/api/search',
  params: {
    series: 'Wings of fire',
    book_type: 'Fiction',
    lexile_min: '600',
    lexile_max: '800',
    results_per_page: '25',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': '8e97c57af5mshe6a22df3322de34p115d0fjsn9b8bff00b5b9',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
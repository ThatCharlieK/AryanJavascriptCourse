//import {default as axios} from 'axios';


const axios = require('axios').default;

let prompt = require ("prompt-sync")();

let category = prompt("Do you want to get Planets, Spaceships, Vehicles, People, Films or Species? ");
let id = prompt("What is the id for that category (1-100)");

async function getLuke(){
  console.log('https://swapi.dev/api/' + category  + "/" + id + "/")
  let luke = await axios.get('https://swapi.dev/api/' + category  + "/" + id + "/")
  return(luke.data)
}
async function main() {
  console.log(await getLuke()) 
}


main()

// imports stuff for reading file
const { count } = require('console');
const fs = require('fs')


//function for reading file
function readInput(fileName){
    //tries to read file
    let data;
    try {
        //puts the items from the file into an array called 'data'
        data = fs.readFileSync(fileName, 'utf8');
    } catch (err) {
        console.error(err);
    }
    //splits the data and puts it into a new variable
    finishedData = data.split("\n")
    return finishedData
}
//sets PCData to the file output
let PCData = 0; 
PCData = readInput("PC3input.txt")


let gamOneCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let gamZeroCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
let timesLooped = 0;
// loops for each string int he PCData array 

function loopCounts (fileName){
    // you need to pass in "PCData"
    for (i = 0; i < fileName.length; i++) {
    
        //loops 1000 times
        for(z = 0; z < 13; z++ ){
            timesLooped++;
            if (PCData[i].substring(z, z+1) == 1){
                gamOneCount[z]+=1; 
            }
            else{ 
                gamZeroCount[z]+=1; 
            }
        }
    };
    return(gamOneCount, gamZeroCount)
}

loopCounts(PCData)

//function for calculating gamma based on the zeros and ones count
function findGama (ones, zeros){
    let gamma = "0"
    let epsilon = "0"
    for (f = 0; f<13; f++){
        if(ones[f] > zeros[f]){
            gamma += "1";
            epsilon += "0";
        }
        else{
            gamma+= "0";
            epsilon += "1";
        }
    }
    epsilonAndgamma = [epsilon, gamma]
    //return(epsilon)
    return(epsilonAndgamma)
}

let results = findGama(gamOneCount, gamZeroCount);
//console.log(results)

digitEpsilon = parseInt(results[0], 2);
digitGamma = parseInt(results[1], 2);

let powerConsumption = digitEpsilon*digitGamma;

console.log("The Epsilon is: " + digitEpsilon);
console.log("The gamma is: " + digitGamma);

console.log('The powerConsumption is: ' + powerConsumption);

//I got the code for reading the file from 
// https://nodejs.dev/learn/reading-files-with-nodejs

const fs = require('fs')
let data;
let timesIncreased = 0;
let largestIncrease = 0;

/**
 * Reads a file into an array 
 * @param {string} fileName 
 * @returns {string}
 */
function readInput(fileName){
    //tries to read file
    try {
        //puts the items from the file into an array called 'data'
        data = fs.readFileSync(fileName, 'utf8');
    } catch (err) {
        console.error(err);
    }
    //splits the data and puts it into a new variable
    finishedData = data.split("\n")

    return finishedData;
}


/**
 * counts how many times the numbers increased
 * @param {*} inputSplitData 
 * @returns 
 */
function countTimesIncreased (inputSplitData){

    // i could have also done this: 
    // for(let element of inputSplitData) {
    //     if (parseInt(element) < parseInt(element)) {
    //         timesIncreased++;
    //     }
    // }
    //loops for each item in the array
    for (i = 0; i < inputSplitData.length; i++){
        //if the last number is lower than the first number,
        if (parseInt(inputSplitData[i]) < parseInt(inputSplitData[i+1])){
            //then add one to the 'timesIncreased' function
            //console.log(inputSplitData[i]);
            timesIncreased++;
        } 
    }
    return timesIncreased; 
}



//counts the highest increase between 2 numbers
function countHighestIncrease (input2SplitData){
    // parse int turns string into a string into a number
    // checks if the increase between 2 numbers is bigger than the highest recorded increase
    for (i = 0; i < input2SplitData.length; i++){
        if ( (parseInt(input2SplitData[i+1]) - parseInt(input2SplitData[i])) > largestIncrease ){
            // then adds the increase to a variable
            largestIncrease = parseInt(input2SplitData[i+1])-parseInt(input2SplitData[i]);
        }
    }   
    return largestIncrease;
}


// run function to read inputted file 
//readInput('PC1input.txt')
splitData = readInput('PC1input.txt')
console.log("it increased this many times: " + countTimesIncreased(splitData))
console.log("the highest it increased by was: " + countHighestIncrease(splitData))
// run function to count the times the numbers increased

//I am solving this:
//https://projecteuler.net/problem=7


let primes = [2]; 
let checkNum = 3; 

let nthPrime = 1001

// loops 1000 times to find the 1000th prime number
while(primes.length < nthPrime){
    let isPrime = true; 
    for(i = 2; i < checkNum-1; i ++){
        
        if(checkNum % i == 0){
            //if the number is not prime:
            isPrime = false;
            break;
        }
    }
    if(isPrime == true){
        primes.push(checkNum)
    }
    checkNum++
}
console.log("the 1001'th prime number is", primes[nthPrime-1])

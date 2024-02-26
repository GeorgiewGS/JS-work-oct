function  Repainting(input){

let nylon = Number (input[0])
let pait = Number (input[1])
let thinner = Number (input[2])
let worHours = Number (input[3])

let nulonPrice = (nylon + 2 ) * 1.50
let addedPait = pait * 0.10
let painPrice = (pait + addedPait) *  14.50
let thinnerPrice = thinner * 5.00
let currentPrice = nulonPrice + painPrice + thinnerPrice + 0.40
let wokersHoursPrice = currentPrice * 0.30
let totalWorkerPrice = wokersHoursPrice * worHours

let totalSum = currentPrice + totalWorkerPrice


console.log(totalSum)
}


Repainting(["10 ",

"11 ",

"4 ",

"8 "])
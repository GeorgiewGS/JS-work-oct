function SuppliesforSchool (input){

let penCount = Number(input[0])
let markersCount = Number (input[1])
let littersDetergent = Number(input[2])
let diskount = Number (input[3]) / 100


let penPrice = penCount * 5.80; 
let markersPrice = markersCount * 7.20; 
let tergentPrice = littersDetergent * 1.20

let currentPrice = penPrice + markersPrice + tergentPrice
let finalSum = currentPrice - currentPrice * diskount
console.log (finalSum)




}
SuppliesforSchool(["4 ",

"2 ",

"5 ",

"13 "]
)
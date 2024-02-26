function FishTank(input){
let lenght = Number (input[0])
let width = Number (input[1])
let height = Number (input[2])
let precentage = Number (input[3]) / 100
let volume = lenght * width * height

let volumeinLiters = volume * 0.001
let neededLiters = volumeinLiters * (1 - precentage)

console.log(neededLiters)



}
FishTank(["85 ",

"75 ",

"47 ",

"17 "])
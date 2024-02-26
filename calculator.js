function calculator(input){
let depositSum = Number(input[0])
let tern = Number(input[1])
let annualIntrestRate = Number (input[2]) / 100
let sum = depositSum + tern * ((depositSum * annualIntrestRate) / 12)

console.log(sum)
}
calculator(["200","3", "5.7"])

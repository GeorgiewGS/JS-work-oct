function FoodDelivery(input){

let chikenMenu = Number (input[0])
let fishMenu = Number (input[1])
let vegeterianMenu = Number (input[2])

let chikenPr = chikenMenu * 10.35
let fishPr = fishMenu * 12.40
let vegeterianPr = vegeterianMenu * 8.15

let currentPr = chikenPr + fishPr + vegeterianPr
let desertPr = currentPr * 0.20

let totalSum = currentPr + desertPr + 2.50


console.log(totalSum) 

}

FoodDelivery(["2 ",

"4 ",

"3 "])
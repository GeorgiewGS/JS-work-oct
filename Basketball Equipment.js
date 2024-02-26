function BasketballEquipment(input){

let tax = Number (input[0])

let sneakersPrice = tax -(tax * 0.40);

let eqipmentPrice = sneakersPrice - (sneakersPrice* 0.20)

let basketballPrice = eqipmentPrice / 4

let accesories = basketballPrice / 5

let finalSum = sneakersPrice + eqipmentPrice + basketballPrice + accesories + tax

console.log(finalSum)


}
BasketballEquipment(["365 "])
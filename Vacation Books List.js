function VacationBooksList(input){
let pageCount = Number(input[0])
let pagePerHour = Number(input[1])
let neededDAys = Number(input[2])

let neededTime = pageCount / pagePerHour;



let hoursPerDAy = neededTime / neededDAys


console.log(hoursPerDAy)
}


VacationBooksList(["432 ",

"15 ",

"4 "])
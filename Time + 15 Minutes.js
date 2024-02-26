function TimeMinutes (input){
let horse = Number (input[0])
let minutes = Number (input[1])
let minutesPlus15 = minutes + 15

if (minutesPlus15 >=60){
    horse = horse + 1
    minutesPlus15 = minutesPlus15 - 60
}
if ( horse == 24){
horse = 0
}

if(minutesPlus15 < 10){
    console.log (`${horse}:0${minutesPlus15}`) 
}else{
    console.log (`${horse}:${minutesPlus15}`) 
}

}
TimeMinutes (["23", "59"])

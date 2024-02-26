function BonusScore (input){
let score = Number(input[0])
let bonus = 0
if(score <= 100){
    bonus = 5
}else if(score <= 1000){
bonus = score * 0.20 
}else{
bonus = score * 0.10 
}

if(score % 2===0){
    bonus = bonus + 1
}else if (score % 10 === 5){
bonus = bonus + 2
}
let totalScore = score + bonus
console.log(bonus)
console.log(totalScore)

}
BonusScore(["175"])

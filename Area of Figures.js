function AreaofFigures (input){
let tape = input [0]
let area = 0 
if(tape === "square"){
    let side = Number (input[1])
     area = side * side
    
}else if (tape ==="rectangle"){
    let sideA = Number (input[1])
    let sideB = Number (input[2])
     area = sideA * sideB
    
}else if (tape === "circle"){
    let r = Number (input[1])
     area = Math.PI * Math.pow(r , 2)
    
}else{
    let side = Number (input[1])
    let h = Number (input [2])
     area = side * h / 2
    
}
console.log(area.toFixed(3))
    

}
AreaofFigures (["triangle",

"4.5",

"20"])

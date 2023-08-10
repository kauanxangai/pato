function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("withe");
  fill("black") ;
       textSize(64);
  textAlign(CENTER, CENTER);
  
  let maximo = width;
  let minimo = 0
  // mousex, 0, width ==> 0, palavra.length
  let palavra = "caminhante";
  let quantidade = map(mouseX, 0, width, 1, palavra.lenght);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
  //  if(mouseX < 50) {
  //  let palavra = "C";
  //  text(pavra, 200, 200);
  //} else if(mouseX < 100) {
  //  let palavra = "Ca";
  //  text(palavra, 200, 200);
  //} else {
  //  let palavra = "caminhante";
  //  text(palavra,200 200);
  //} 
  
  }
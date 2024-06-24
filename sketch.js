//tudo que quiser fazer só uma vez
function setup() {
    createCanvas(1000, 800);
    background("purple");
  }
  
  //desenhar
  function draw() {
    fill("pink"); //cor do retangulo
    stroke("red"); //cor da linha
  
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 60); //retangulo
    }
  }
  

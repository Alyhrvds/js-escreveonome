//tudo que quiser fazer só uma vez
function setup() {
    createCanvas(1280, 720);
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
  

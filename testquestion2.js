let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    background("blue")
    fill("pink");
    // Task: Align the text to the center using textAlign
    // Task: set font size to 20 using textSize
    yPos = 100;
    textSize(20)
    textAlign(CENTER,CENTER)
    for(let count = 0; count < 5; count++){
        text(pokemons[count],width/2,yPos)
        yPos=yPos+30
    }
}

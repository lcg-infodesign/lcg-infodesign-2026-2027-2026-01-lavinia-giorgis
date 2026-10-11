function preload() {
  // put preload code here
}

let xMax = 600;
let yMax = 600;
let s=0; //per spostare fiori


function setup() 
{
  createCanvas(xMax, yMax);
  angleMode(DEGREES); 
}

function draw() {
  background(110, 180, 80); // colore sfondo

  // aggiungo il cielo sopra come rettangolo
  fill(135, 206, 235);
  stroke(40);
  strokeWeight(0);
  rectMode(CORNER); 
  rect(0, 0, 600, 300); 

  s = (s + 1) % (xMax + 100);
  
  for (let i = 0; i < 5; i++) 
  {
    let xBase = 100 + (i * 100) + s; 
    let x = xBase % (xMax + 100); // Questa X ora contiene lo spostamento
    let y = 250;
    
    
    

    //stelo del fiore
    fill(29, 65, 51);
    rectMode(CORNER);
    rect(x , y , 8, 150); // x e y cordinate del fiore che si sposta

    if (i % 2 == 0) 
    {
      // petali bianchi
      fill(255);
      let numPetali = 10; 

      for (let j = 0; j < numPetali; j++) 
      {
        push(); 
        translate(x, y); // traslo
        let angolo = (360 / numPetali) * j; //calcolo ogni quanto vanno
        rotate(angolo); 
        ellipse(0, 40, 20, 40); 
        pop(); 
      }
      
      // centro fiore
      fill(255, 204, 0);
      ellipse(x, y, 50, 50); // Uso la x dinamica calcolata sopra!

    } else
      {
       // petali rosa
      fill(255, 105, 180);
let numPetali = 10; 
        for (let j = 0; j < numPetali; j++) 
        {
        push(); 
        translate(x, y); 
        let angolo = (360 / numPetali) * j; 
        rotate(angolo); 
        ellipse(0, 40, 20, 40); 
        pop();
         }
       // centro fiore
      fill(255, 204, 0);
      ellipse(x, y, 50, 50);
    }
     
  }
}


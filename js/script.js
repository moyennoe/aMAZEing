// var caseTaille = 50;
// var offset = 40;
// var bob = new Peon();
// var step = 2;

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// var labyrintheSortieX = getRandomInt(13);
// var labyrintheSortieY = getRandomInt(13);

// var labyrinthe = [
//   ["k", "f", "f", "b", "b", "o", "k", "o", "n", "k", "f", "f", "b", "o"],
//   ["e", "f", "o", "g", "j", "b", "d", "o", "g", "g", "m", "h", "g", "n"],
//   ["l", "k", "f", "a", "o", "g", "k", "f", "c", "j", "o", "g", "j", "c"],
//   ["n", "e", "o", "g", "n", "l", "g", "n", "g", "k", "f", "a", "o", "g"],
//   ["j", "c", "k", "d", "a", "f", "i", "g", "g", "l", "n", "e", "f", "c"],
//   ["k", "i", "g", "n", "j", "b", "f", "i", "e", "f", "a", "a", "o", "g"],
//   ["g", "n", "l", "e", "o", "g", "m", "b", "i", "n", "g", "g", "m", "i"],
//   ["g", "j", "f", "a", "o", "e", "o", "j", "h", "g", "g", "e", "f", "o"],
//   ["j", "o", "n", "g", "m", "d", "f", "o", "g", "g", "l", "e", "o", "n"],
//   ["m", "b", "d", "a", "h", "n", "m", "f", "i", "e", "f", "c", "m", "c"],
//   ["n", "l", "n", "g", "g", "e", "f", "b", "f", "c", "n", "e", "h", "g"],
//   ["e", "f", "i", "g", "l", "g", "m", "i", "n", "g", "j", "i", "e", "c"],
//   ["g", "m", "f", "a", "f", "d", "b", "f", "i", "e", "o", "m", "i", "g"],
//   ["j", "f", "f", "i", "m", "f", "i", "m", "f", "d", "f", "o", "m", "i"]
 
// ];
// var correspondance = {
//   a: [0, 0, 0, 0], //partout 
//   b: [1, 0, 0, 0], //haut
//   c: [0, 1, 0, 0], //droite
//   d: [0, 0, 1, 0], //bas 
//   e: [0, 0, 0, 1], //gauche

//   f: [1, 0, 1, 0], //haut bas
//   g: [0, 1, 0, 1], //droite gauche
//   h: [1, 1, 0, 0], //haut droite
//   i: [0, 1, 1, 0], //droite bas
//   j: [0, 0, 1, 1], //bas gauche
//   k: [1, 0, 0, 1], //haut gauche
//   l: [0, 1, 1, 1], //droite bas gauche
//   m: [1, 0, 1, 1], //haut bas gauche
//   n: [1, 1, 0, 1], //haut droite gauche
//   o: [1, 1, 1, 0] //haut droite bas
  
// };

// function setup() {
//   createCanvas(800, 800);
// }

// function draw() {
//   textFont("Open Sans");
//   background(60);
//   // labyrinthe et peon a afficher
//   if (bob.etat == "static") {
//     bob.detection();
//   }
//   translate(offset, offset);

//   labyrintheDisplay();

//   for (var p = 0; p < particules.length; p++) {
//     particules[p].update();
//     particules[p].display();
//     if (particules[p].size < 0.25) {
//       particules.splice(particules[p], 1);
//     }
//   }
//   for (var i = 0; i < points.length; i ++) {
//     points[i].update();
//     points[i].display();
//     if (points[i].life <= 0) {
//       points.splice(points[i], 1);
//     }
//   }
//   bob.update();
//   bob.display();
// }

// function labyrintheDisplay() {
//   for (var y = 0; y < labyrinthe.length; y++) {
//     for (var x = 0; x < labyrinthe[y].length; x++) {
//       stroke(255);
//       noFill();
//       drawLineNew(labyrinthe[y][x], x, y);
//       if (y == labyrintheSortieY && x == labyrintheSortieX) {
//         fill(255, 255, 255);
//         rectMode(CORNER);
//         rect(
//           caseTaille * x + 10,
//           caseTaille * y + 10,
//           caseTaille - 20,
//           caseTaille - 20
//         );
//       }
//     }
//   }
// }

// function drawLineNew(type, x, y) {
//   strokeWeight(1);
//   stroke(255, 255, 255, 20);
//   // haut
//   if (
//     type == "b" ||
//     type == "f" ||
//     type == "h" ||
//     type == "k" ||
//     type == "m" ||
//     type == "n" ||
//     type == "o"
//   ) {
//     strokeWeight(2);
//     stroke(255, 255, 255, 255);
//   }
//   line(
//     x * caseTaille,
//     y * caseTaille,
//     x * caseTaille + caseTaille,
//     y * caseTaille
//   );
//   strokeWeight(1);
//   stroke(255, 255, 255, 20);

//   // droite
//   if (
//     type == "c" ||
//     type == "g" ||
//     type == "h" ||
//     type == "i" ||
//     type == "l" ||
//     type == "n" ||
//     type == "o"
//   ) {
//     strokeWeight(2);
//     stroke(255, 255, 255, 255);
//   }
//   line(
//     x * caseTaille + caseTaille,
//     y * caseTaille,
//     x * caseTaille + caseTaille,
//     y * caseTaille + caseTaille
//   );

//   strokeWeight(1);
//   stroke(255, 255, 255, 20);

//   // bas
//   if (
//     type == "d" ||
//     type == "f" ||
//     type == "i" ||
//     type == "j" ||
//     type == "l" ||
//     type == "m" ||
//     type == "o"
//   ) {
//     strokeWeight(2);
//     stroke(255, 255, 255, 255);
//   }
//   line(
//     x * caseTaille + caseTaille,
//     y * caseTaille + caseTaille,
//     x * caseTaille,
//     y * caseTaille + caseTaille
//   );

//   strokeWeight(1);
//   stroke(255, 255, 255, 20);

//   // gauche
//   if (
//     type == "e" ||
//     type == "g" ||
//     type == "j" ||
//     type == "k" ||
//     type == "l" ||
//     type == "m" ||
//     type == "n"
//   ) {
//     strokeWeight(2);
//     stroke(255, 255, 255, 255);
//   }
//   line(
//     x * caseTaille,
//     y * caseTaille,
//     x * caseTaille,
//     y * caseTaille + caseTaille
//   );

//   strokeWeight(1);
//   stroke(255, 255, 255, 20);
// }

// function Peon() {
//   this.x = 0;
//   this.y = 0;
//   this.nextX = 0;
//   this.nextY = 0;
//   this.caseX = 0;
//   this.caseY = 0;
//   this.direction = 1;
//   this.w = 20;
//   this.vel = 2;
//   this.etat = "static";
//   this.pixelParcouru = 0;

//   this.update = function() {
//     if (this.etat == "move") {
//       this.pixelParcouru += this.vel;
//       if (this.y > this.nextY) {
//         if (random(0, 5) > 2.5) this.createParticules(0);
//         this.y = this.y - this.vel;
//       } else if (this.x < this.nextX) {
//         if (random(0, 5) > 2.5) this.createParticules(1);
//         this.x = this.x + this.vel;
//       } else if (this.y < this.nextY) {
//         if (random(0, 5) > 2.5) this.createParticules(2);
//         this.y = this.y + this.vel;
//       } else if (this.x > this.nextX) {
//         if (random(0, 5) > 2.5) this.createParticules(3);
//         this.x = this.x - this.vel;
//       } else {
//         this.etat = "static";
//       }
//     }
//   };

//   this.display = function() {
//     noStroke();
//     fill(0, 196, 255);
//     push();
//     rectMode(CENTER);
//     rect(this.x + caseTaille / 2, this.y + caseTaille / 2, this.w, this.w);
//     rectMode(CORNER);
//     pop();
//     addPoint(this.x + caseTaille / 2, this.y + caseTaille / 2);
//   };

//   this.detection = function() {
//     var infiniti = 800;
//     // haut
//     if (
//       mouseX > this.x + offset &&
//       mouseX < this.x + caseTaille + offset &&
//       mouseY < this.y + offset &&
//       mouseY > this.y - infiniti + offset
//     )
//  {
//       this.move(0);
//     }
//     // droite
//     if (
//       mouseX > this.x + caseTaille + offset &&
//       mouseX < this.x + caseTaille + infiniti + offset &&
//       mouseY > this.y + offset &&
//       mouseY < this.y + caseTaille + offset
//     ) {
//       this.move(1);
//     }
//     // bas
//     if (
//       mouseX > this.x + offset &&
//       mouseX < this.x + caseTaille + offset &&
//       mouseY > this.y + caseTaille + offset &&
//       mouseY < this.y + caseTaille + infiniti + offset
//     ) {
//       this.move(2);
//     }
//     // gauche
//     if (
//       mouseX < this.x + offset &&
//       mouseX > this.x - infiniti + offset &&
//       mouseY > this.y + offset &&
//       mouseY < this.y + caseTaille + offset
//     ) {
//       this.move(3);
//     }
//   };

//   this.move = function(direction) {
//     this.direction = direction;
//     if (this.detectWall(this.direction) === 0) {
//       this.etat = "move";
//       switch (this.direction) {
//         case 0:
//           this.caseY--;
//           this.nextY -= caseTaille;
//           break;
//         case 1:
//           this.caseX++;
//           this.nextX += caseTaille;
//           break;
//         case 2:
//           this.caseY++;
//           this.nextY += caseTaille;
//           break;
//         case 3:
//           this.caseX--;
//           this.nextX -= caseTaille;
//           break;
//       }
//     }
//     if (this.caseX == labyrintheSortieX && this.caseY == labyrintheSortieY) {
//       this.grandSucces();
//     }
//   };

//   this.detectWall = function() {
//     var destination = labyrinthe[this.caseY][this.caseX];
//     switch (this.direction) {
//       case 0:
//         if (typeof labyrinthe[this.caseY - 1] === "undefined") return false;
//         break;
//       case 1:
//         if (typeof labyrinthe[this.caseY][this.caseX + 1] === "undefined")
//           return false;
//         break;
//       case 2:
//         if (typeof labyrinthe[this.caseY + 1] === "undefined") return false;
//         break;
//       case 3:
//         if (typeof labyrinthe[this.caseY][this.caseX - 1] === "undefined")
//           return false;
//         break;
//     }
//     return correspondance[destination][this.direction];
//   };

//   this.createParticules = function() {
//     var particuleX = this.x + caseTaille / 2 + random(-10, 10);
//     var particuleY = this.y + caseTaille / 2 + random(-10, 10);
//     particules.push(new Particule(particuleX, particuleY, this.direction));
//   };


//   var counter = 3000;
//   setInterval(timer,10);
//   function timer(){
//     counter--;
//     document.getElementById("timerel").innerHTML = counter;
//     if(counter == 0) {
//       stopTimer();
//       console.log("stopTimer execut??");
//       }
//     }
//     function updater() {
//       document.open();
//        document.write(counter);
//        document.close();
//    }
//    function stopTimer(){
  
//     clearInterval();
//     window.location.reload();
//     window.alert("Compteur arriver a 0, vous avez perdu :D");
//   };

//   var score = 0;
//   this.grandSucces = function() {
    
//     score += 10;
//     counter += 500;
//     labyrintheSortieX = getRandomInt(14);
//     labyrintheSortieY = getRandomInt(13);
//     document.getElementById("score").innerHTML = score;
//   };
// }





// var particules = [];

// function Particule(x, y, direction) {
//   this.x = x;
//   this.y = y;
//   this.vel = 0.1;
//   this.life = random(0.1, 0.05); // si grand alors vie moins longtemps
//   this.size = random(5, 10);

//   this.display = function() {
//     fill(255, 255, 255, 100);
//     noStroke();
//     rectMode(CENTER);
//     //rect(this.x,this.y,this.size,this.size);
//     ellipse(this.x, this.y, this.size);
//   };

//   this.update = function() {
//     this.size -= this.life;

//     switch (direction) {
//       case 0:
//         this.y += this.vel;
//         break;
//       case 1:
//         this.x -= this.vel;
//         break;
//       case 2:
//         this.y -= this.vel;
//         break;
//       case 3:
//         this.x += this.vel;
//         break;
//     }
//   };

//   this.delete = function() {};
// }




// var points = [];

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
//   this.life = 100;

//   this.display = function() {
//     noFill();
//     stroke(30, 196, 255,this.life);
//     strokeWeight(10);
//     point(this.x,this.y);
//   };
//   this.update = function() {
//     this.life = this.life - 1;
//   };
// }

// function addPoint(x,y) {
//   var point = new Point(x,y);
//   points.push(point);
// }

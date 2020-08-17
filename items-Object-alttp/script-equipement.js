'use strict'

let equipment = document.createElement('div');
equipment.style.backgroundColor='black';
equipment.style.width='590px';
equipment.style.height='480px';
equipment.style.borderRadius='8px';
equipment.style.position='absolute';
equipment.style.top="10px";
equipment.style.left="960px";
equipment.style.border='5px orange solid';
equipment.textContent='Equipements';
equipment.style.color="white";
equipment.style.padding="15px";
equipment.style.fontSize="20px";
equipment.style.fontFamily="PressStart2PRegular";
equipment.style.zIndex="1";

document.body.append(equipment);

let botte = document.createElement('img');
botte.src="img-src/botte.png";
botte.style.width="80px";
botte.style.height="80px";
botte.style.position="absolute";
botte.style.zIndex="2";
botte.style.left="1000px";
botte.style.top="80px";

let palme = document.createElement('img');
palme.src="img-src/fins.png";
palme.style.width="80px";
palme.style.height="80px";
palme.style.position="absolute";
palme.style.zIndex="2";
palme.style.left="1140px";
palme.style.top="80px";

let gant = document.createElement('img');
gant.src="img-src/glove.png";
gant.style.width="80px";
gant.style.height="80px";
gant.style.position="absolute";
gant.style.zIndex="2";
gant.style.left="1290px";
gant.style.top="80px";

let boule = document.createElement('img');
boule.src="img-src/boule.png";
boule.style.width="80px";
boule.style.height="80px";
boule.style.position="absolute";
boule.style.zIndex="2";
boule.style.left="1440px";
boule.style.top="80px";

let sword = document.createElement('img');
sword.src="img-src/sword.png";
sword.style.width="80px";
sword.style.height="80px";
sword.style.position="absolute";
sword.style.zIndex="2";
sword.style.left="1000px";
sword.style.top="210px";

let bouclier = document.createElement('img');
bouclier.src="img-src/bouclier.png";
bouclier.style.width="80px";
bouclier.style.height="80px";
bouclier.style.position="absolute";
bouclier.style.zIndex="2";
bouclier.style.left="1140px";
bouclier.style.top="210px";

let tshirt = document.createElement('img');
tshirt.src="img-src/green-tshirt.png";
tshirt.style.width="80px";
tshirt.style.height="80px";
tshirt.style.position="absolute";
tshirt.style.zIndex="2";
tshirt.style.left="1290px";
tshirt.style.top="210px";

let champi = document.createElement('img');
champi.src="img-src/champi.png";
champi.style.width="80px";
champi.style.height="80px";
champi.style.position="absolute";
champi.style.zIndex="2";
champi.style.left="1440px";
champi.style.top="210px";

document.body.append(botte, palme, gant, boule, 
    sword, bouclier, tshirt, champi);
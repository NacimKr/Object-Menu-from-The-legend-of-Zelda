'use script'

//Create div for pendentifs
let pendentifs = document.createElement('div');
pendentifs.style.backgroundColor='black';
pendentifs.style.width='880px';
pendentifs.style.height='160px';
pendentifs.style.borderRadius='8px';
pendentifs.style.position='absolute';
pendentifs.style.top="550px";
pendentifs.style.left="10px";
pendentifs.style.border='5px red solid';
pendentifs.textContent='Pendentifs';
pendentifs.style.color="white";
pendentifs.style.padding="15px";
pendentifs.style.fontSize="20px";
pendentifs.style.fontFamily="PressStart2PRegular";
pendentifs.style.zIndex='1';

let green = document.createElement('img');
green.src="img-src/pendent_green.png";
green.style.width="80px";
green.style.height="80px";
green.style.position="absolute";
green.style.zIndex="2";
green.style.left="80px";
green.style.top="620px";

let red = document.createElement('img');
red.src="img-src/pendent_red.png";
red.style.width="80px";
red.style.height="80px";
red.style.position="absolute";
red.style.zIndex="2";
red.style.left="220px";
red.style.top="625px";

let blue = document.createElement('img');
blue.src="img-src/pendent_blue.png";
blue.style.width="80px";
blue.style.height="80px";
blue.style.position="absolute";
blue.style.zIndex="2";
blue.style.left="370px";
blue.style.top="621px";

document.body.append(pendentifs, green, red, blue);
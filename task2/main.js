/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image1Count = document.getElementById('image1_count');
const image2Count = document.getElementById('image2_count');

image1.src = 'https://i.pinimg.com/736x/e0/90/b0/e090b04d03481e475eac8c29541f100b.jpg';
image2.src = 'https://www.memecreator.org/cdn-cgi/mirage/8e57639841ef0997ef46aae927a678bf362a38e847cd8c7ba8a472cda59c0278/1280/static/images/memes/5435678.jpg';

let image1ClickCount = 0;
let image2ClickCount = 0;

image1.addEventListener('click', () => {
  image1ClickCount++;
  image1Count.innerHTML = image1ClickCount;
});

image2.addEventListener('click', () => {
  image2ClickCount++;
  image2Count.innerHTML = image2ClickCount;
});

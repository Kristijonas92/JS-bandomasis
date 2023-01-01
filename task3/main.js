/*
  Parašyti JS kodą, kuris vartotojui paspaudus ant mygtuko "Rodyti Vartotoją" užkrautų vartotoją iš API į ekraną. (Mygtukas neberodomas ekrane po jo paspaudimo. Nebūtina ekrane rodyti visos informacijos apie vartotoją.)
  API nuoroda: https://randomuser.me/api/
*/


const button = document.getElementById('show-user-button');
button.addEventListener('click', () => {
  // Perform the existing actions
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = [data.results.name[0].first.last, data.results[0].email];;
      const name = `${user.first} ${user.last}`;
      const email = user.email;
      document.getElementById('name').innerHTML = name;
      document.getElementById('email').innerHTML = email;
    });
  button.remove();

  // Perform additional actions
  console.log('Button was clicked!');
  alert('Button was clicked!');
});
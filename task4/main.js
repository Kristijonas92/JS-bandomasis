/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai+pavardės).
*/

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let [title, actors] = [data.movies[0].title, data.movies[0].castAndCrew.actors[0].name];

    let movies = document.querySelector("#movies");

    data.movies.forEach((element, ind) => {

        let div = document.createElement('div');
        div.classList.add("card");

        let h = document.createElement("h3");
        let title = document.createTextNode(ind+1 + " - " + element.title);
        h.append(title);
        let p = document.createElement("img");
        p.setAttribute("src", element.photos.poster[0]);
        p.classList.add("poster");
        let actors = document.createElement("div");

        div.append(h, p, actors);
        movies.append(div);

        element.castAndCrew.actors.forEach(element => {
          let span = document.createElement("span");
          let title = document.createTextNode(element.name + ", ");
          span.append(title);
          actors.append(span);
        })
    });
  })

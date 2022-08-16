import responsive from "./responsive.js";
responsive();

const getPhotos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  return await res.json();
};

const getComments = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  return await res.json();
};

const photoData = await getPhotos();
const commentsData = await getComments();

console.log(commentsData.slice(0, 6));
console.log(photoData.slice(0, 6));

const container = document.querySelector(".reseñas__container");

commentsData.slice(0, 9).forEach((element, index) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.innerHTML = `
    <div class="tarjeta__header">
        <img class="tarjeta__header__img" src="./assets/fondo--reseña.jpg" alt="tarjeta__image"
            class="tarjeta__image">
    </div>
    <div class="tarjeta__body">
        <h4 class="tarjeta__body__h4">${element.name.slice(0,10)}</h4>
        <p> ${element.body.slice(0,100)} 
        </p>
    </div>
    <div class="tarjeta__footer">
        <div class="usuario">
            <img src="${photoData[index].url}" alt="usuario__image" class="usuario__image">
            <div class="usuario__descripcion">
                <h5>${element.email}</h5>
                <small>hace ${Math.floor((Math.random() * (100-1)) + 1)}d</small>
            </div>
        </div>
    </div>
    `;

  container.appendChild(tarjeta);
});

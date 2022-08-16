import data from "../data/usuarios.json" assert { type: "json" };

const submit = document.querySelector("#loginButtonSubmit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailRegister = document.querySelector("#correoRegister");
const nombreRegister = document.querySelector("#nombreRegister");
const passwordRegister = document.querySelector("#passwordRegister");
const registerSubmit = document.querySelector("#registerSubmit");

const userLoged = JSON.parse(localStorage.getItem("user"));
const ul = document.querySelector("ul");
const logout = document.createElement("li");

if (userLoged) {
  const loginButton = document.querySelector("#loginButton");
  const signup = document.querySelector("#signUpButton");
  logout.classList.add("nav__list");
  logout.innerHTML = `<a id="logout" class="nav__link" href="#">Salir</a>`;
  ul.appendChild(logout);

  signup.style.display = "none";
  loginButton.textContent = `Hola ${userLoged.nombre}`;
  loginButton.href = "index.html";
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    Toastify({
      text: "Proximamente Pantalla de Perfil :)",
      style: {
        background: "linear-gradient(to top, #fcd5ce, #fb4424)",
      },
      offset: {
        x: 700, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
    }).showToast();
  });
  document.querySelector("#logout").addEventListener("click", () => {
    4;
    swal({
      title: "Esta seguro que desea salir?",
      text: "Recuerde que no se guardara los cambios que haya realizado anteriormente",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("user");
        window.location.pathname = "index.html";
        window.location.reload();
      }
    });
  });
} else {
  // localStorage.setItem("data", JSON.stringify(data));
  Toastify({
    text: "Tenemos excelentes promociones! conocelos en la seccion Servicios",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    gravity: "bottom",
    duration: 10000,
  }).showToast();
}

registerSubmit?.addEventListener("click", () => {
  if (
    emailRegister.value !== "" &&
    passwordRegister.value !== "" &&
    nombreRegister !== ""
  ) {
    const userNew = {
      nombre: nombreRegister.value,
      correo: emailRegister.value,
      password: passwordRegister.value,
    };
    data.push(userNew);
    swal({
      title: "Genial!",
      text: "Usuario creado correctamente...",
      icon: "success",
      button: "Ok",
    }).then(() => {
      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = "login.html";
    });
  } else {
    swal({
      title: "Complete todos los datos!",
      icon: "warning",
      dangerMode: true,
    });
  }
});

submit?.addEventListener("click", () => {
  if (email.value !== "" && password.value !== "") {
    const data = JSON.parse(localStorage.getItem("data"));
    const response = data.filter(
      (e) => email.value === e.correo && password.value === e.password
    );
    if (response.length !== 0) {
      localStorage.setItem("user", JSON.stringify(response[0]));

      window.location.pathname = "index.html";
    } else {
      swal({
        title: "Usuario y/o contraseña incorrectas",
        icon: "warning",
        dangerMode: true,
      });
    }
  } else {
    swal({
      title: "Ingrese algun valor",
      icon: "warning",
      dangerMode: true,
    });
  }
});

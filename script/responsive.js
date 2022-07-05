const responsive = () => {
    const menu = document.querySelector(".nav");
    const buguerButton = document.querySelector("#burger-menu");
    const ipad = window.matchMedia("screen and (max-width:768px)");
    ipad.addListener(validation);
    function validation(event) {
        if (event.matches) {
            buguerButton.addEventListener("click", hideShow);
        } else {
            buguerButton.removeEventListener("click", hideShow);
        }
    }
    validation(ipad);

    function hideShow() {
        if (menu.classList.contains("activo")) {
            menu.classList.remove("activo");
        } else {
            menu.classList.add("activo");
        }
    }
}

export default responsive;
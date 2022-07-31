
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');


function cambiaTema(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'light');

    } else {
        document.documentElement.setAttribute('tema', 'dark');
    }
    localStorage.setItem("modo", (ev.target.checked));
}
colorSwitch.addEventListener('change', cambiaTema);


//No pue hacer que la paginame carge las preferencia desde el localstorange


function cargarPreferencias() {
    const mode = localStorage.getItem("modo")

    if (mode) //mode !=== null, undefined, 0, false, ""
    {
        document.documentElement.setAttribute(`tema`, cambiaTema(mode))

        /* console.log(cambiaTema(mode)) */
    }
}




function main() {
    const Aum = document.getElementById("Aum")
    const Dis = document.getElementById("Dis")
    const Cont = document.getElementById("Cont")
    var Numinicial = 0

    Aum.addEventListener("click", () => {
        Numinicial = Numinicial + 1;
        console.log(Numinicial);
        document.getElementById('Cont').innerText = Numinicial;




    });

    Dis.addEventListener("click", () => {
        Numinicial = Numinicial - 1;
        console.log(Numinicial);
        document.getElementById('Cont').innerText = Numinicial;



    });


    // Definimos la función que se ejecutará al enviar el formulario
    function enviar(event) {
        // Evita que el formulario se envíe de forma tradicional (no recarga la página)
        event.preventDefault();

        // Mostramos en consola que la función se ejecutó
        console.log("Entramos");

        // Obtenemos el formulario por su nombre o id ("formulario")
        const formulario = document.forms["formulario"];

        // Mostramos todos los elementos del formulario (inputs, botones, etc.)
        console.log(formulario.elements);

        // Obtenemos el valor del input con name="nombre"
        const nombre = formulario["nombre"].value;

        // Obtenemos el valor del input con name="correo"
        const correo = formulario["correo"].value;

        // Mostramos en consola los valores capturados
        console.log("Nombre:", nombre);
        console.log("Correo:", correo);

        // Recorremos todos los elementos del formulario
        for (const item of formulario.elements) {
            // Mostramos el objeto completo del input o botón
            console.log(item);

            // Mostramos el nombre del campo y su valor actual
            console.log(item.name, "=>", item.value);
        }
    }

    // Agregamos un "escuchador" al formulario para que ejecute la función enviar cuando se haga submit
    document.querySelector("#formulario").addEventListener("submit", enviar);





    

}
window.onload = main;
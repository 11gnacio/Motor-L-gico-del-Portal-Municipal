console.log("Ejecutando.....");

/*Desafíos a Desarrollar
1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará tras el descuento municipal.
Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.
Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($).
*/





/*Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)
Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>
*/



let pacientes = ["Carlos", "María", "Diego"];
// Función para agregar un paciente al final de la fila (cola normal)
function agregarNormal() {
    // Obtenemos la referencia al campo de texto del HTML mediante su ID
    const input = document.getElementById("input2");
    let nombre = input.value.trim();
    // Condición que evalúa si el campo no está vacio, si es asi, se agrega el nombre al final del arreglo pacientes y se renderiza la lista actualizada
    if (nombre !== "") {
        // Agrega el nombre al final del arreglo pacientes usando el método push
        pacientes.push(nombre);
        // LLama a la función renderizarlista para actualiza la visualizacion de la lista de pacientes en el HTML
        renderizarLista();
    }
    // Limpia elcampo de texto
    input.value = "";
}

function agregarUrgencia() {
    // LLamamos a la ID 
    const input = document.getElementById("input2");
    // Obtenemos el valor del campo de texto y eliminamos los espacios en blancos al inicio y al final usando elmetoto trim
    let nombre = input.value.trim();
// Condición que evaluá si el campo no estávacion si es asi, se agrega el nombre al inicio del arreglo pacientes y se renderiza la lista actualizada 
    if (nombre !== "") {
        // Agrega el nombre al inicio del arreglo pacientes usando el método unshisft
        pacientes.unshift(nombre); 
        // LLmama a la función rederizarLista para actulizar la vista de la lista de pacientes en el HTML 
        renderizarLista();
    }
    // Limpi el campo de texto
    input.value = "";
}


function atenderSiguiente() {
    // Verifica si hay pacientes en la lista antes de intentar atender al siguiente
    if (pacientes.length > 0) {
        // utiliza el metodo shift para eliminar y obtener el primer elemento del arreglo pacientes que representa al paciente que se va a antender
        let atendido = pacientes.shift();
        // Muestra una alerta con el nombre del paciente ya que lo dejo paraprobar si funciona xD
        alert("Atendiendo ahora a: " + atendido);
        // llama a la función renderizarLista para actualizar la visualización de la lista de pacientes en el html después de atender al siguiente paciente
        renderizarLista();
    }
}

function renderizarLista() {
    // Llamamos a la ID 
    const resultContainer = document.getElementById("result2");
   // Limpia el contenido del contenedor de resultado para evitar duplicados antes de renderizar la lista actualizada de pacientes 
    resultContainer.innerHTML = "";

    // Crea un elemento de la lista ordenada <ol> para mostrar los nombres de los pacientes en el HTML 
    const listaOrdenada = document.createElement("ol");

    // Recorre el arreglo paciente utilizando el método forEach para crear un elemento de la lista <li> para cada nombre de paciente y lograr que se muestra en la lista ordinaria en el HTML
    pacientes.forEach(nombre => {
        // Crea un elemento de la lista <li> para cada nombre de paciente en este caso no se muestra por que no estafuncionando nuestro contedor
        const item = document.createElement("li");
        // Asigna el nombre del paciente como el texto del elemento de la lista <li>
        item.textContent = nombre;
        // Agrega el elemento de la lista <li> al elemento de la lista ordenada <ol>
        listaOrdenada.appendChild(item);
    });
// Agrega el elemento de la lista ordenada <ol> al contenedor de resultado en el html para mostrar la lista actualizada de pacientes en el HTML
    resultContainer.appendChild(listaOrdenada);
}


/*3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)
Verificar si un RUT o nombre está en el listado de entrega de beneficios.
Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para buscar si el dato ingresado existe en la lista.
Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".
*/

let codigosValidos = ["Ignacio", "Leo","Javiera", "Akon", "Daniel", "Marcelo"];

function verificarCodigo() {
    const inputTres = document.getElementById("input3");
    const resultTres = document.getElementById("result3");
    const containerTres = document.getElementById("container3");

    let accion = inputTres.value.trim();

    let mensaje = "No registrado";

    for (let i = 0; i < codigosValidos.length; i++) {
        if (accion == codigosValidos[i]) {
            mensaje = "Beneficiario Verificado";
        }
    }

    resultTres.textContent = mensaje;

    containerTres.classList.remove("d-none");
    inputTres.value = "";
}
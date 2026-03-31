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

function agregarNormal() {
    const input = document.getElementById("input2");
    let nombre = input.value.trim();

    if (nombre !== "") {
        pacientes.push(nombre);
        renderizarLista();
    }
    input.value = "";
}

function agregarUrgencia() {
    const input = document.getElementById("input2");
    let nombre = input.value.trim();

    if (nombre !== "") {
        pacientes.unshift(nombre); 
        renderizarLista();
    }
    input.value = "";
}


function atenderSiguiente() {
    if (pacientes.length > 0) {
        let atendido = pacientes.shift();
        alert("Atendiendo ahora a: " + atendido);
        renderizarLista();
    }
}

function renderizarLista() {
    const resultContainer = document.getElementById("result2");
   
    resultContainer.innerHTML = "";

    const listaOrdenada = document.createElement("ol");

    pacientes.forEach(nombre => {
        const item = document.createElement("li");
        item.textContent = nombre;
        listaOrdenada.appendChild(item);
    });

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
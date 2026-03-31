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

function filaDeVacunacion() {
    const input = document.getElementById("input2");
    const result = document.getElementById("result2");
    const container = document.getElementById("container2");

    let nombre = input.value.trim();

    if (nombre !== "") {

        pacientes.push(nombre);

        result.textContent = "Próximos a atender: " + pacientes.join(", ");

        container.classList.remove("d-none");
    }
      
    input.value = "";
}
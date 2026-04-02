 # Prueba JavaScript

 - HTML
 
 - Boostrap

 - JavaScript

---

**Boostrap:** Se utilizó para poder hacer la página responsiva y mejor ectrocturada => (Modelos responsivos)

**JavaScript:** Se utlizó para poder hacer funcionar los campos y el botón.

También aparte se utilizaron elementos adquiridos y elementos que no se han visto de parte de la clase elementos aprendidos por estudios desde Casa. 

---

*Author:* Ignacio Díaz

 *Contacto:* Ignaciodiaz@liceovvh.cl

 ---


##  Comprobación

Al cargar el archivo, verás en la consola del navegador:
`console.log("Ejecutando.....");`

---

### Fila de Vacunación 
Gestión dinámica de pacientes utilizando estructuras de datos (Arreglos). Permite priorizar la atención según la gravedad.

**Funcionalidades:**
     **Agregar Normal (`push`):** El paciente ingresa al final de la fila.
     **Agregar Urgencia (`unshift`):** El paciente es movido al inicio de la lista para atención inmediata.
     **Atender Siguiente (`shift`):** Remueve a la primera persona de la lista y notifica su turno.
     **Renderizado:** La lista se actualiza automáticamente en el HTML usando etiquetas `<ol>` (Listas ordenadas).

### Buscador de Beneficiarios 
Verifica si un ciudadano se encuentra en la base de datos de beneficios sociales.

**Lógica de Búsqueda:**
    * Utiliza un **Ciclo For** para recorrer un arreglo de nombres (`codigosValidos`).
    * Compara el dato ingresado con cada elemento del índice.
    * **Resultado:** Devuelve "Beneficiario Verificado" si existe una coincidencia, de lo contrario muestra "No registrado".

---

## Implementación

 Método JS | Acción Realizada |
 
| `.push()` | Inserta al final del array. |
| `.unshift()` | Inserta al principio del array. |
| `.shift()` | Elimina el primer elemento. |
| `.forEach()` | Itera para crear elementos de lista en el DOM. |
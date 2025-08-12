# Lógica de programación:

## Explorar funciones y listas.
<img width="1280" height="853" alt="image" src="https://github.com/user-attachments/assets/a151312f-e41b-4b28-9232-0648ed59b444" />

### Índice

1. Interactuando con HTML
2. Funciones
3. Reiniciando le juego
4. Listas
5. Publicando el proyecto

---

### Interactuando con HTML

  1. **Presentación**
    1. Utilizaremos nuestro proyecto anterior y potenciaremos su ejecución según las necesidades del entorno.
    
  2. **Preparando el ambiente**
    1. Se descarga el archivo para proseguir con el proyecto https://github.com/alura-es-cursos/2035-logica-programacion-2/archive/refs/heads/ProyectoInicial.zip

  1. **Proyecto inicial**
    1. En este proyecto, subiremos el nivel de nuestro proyecto, para que sea mas compatible y dinámico. Continuaremos con el juego del número secreto.
    2. En el proyecto anterior, la forma que teníamos para interactuar con el usuario, era a través de los prompt (alertas), esta no es la forma mas adecuada para interactuar.
    3. El Document Object Model (DOM) es una representación estructurada de un documento HTLM o XML que los navegadores web utilizan para poder interactuar con el contenido de una pagina web. Es la forma que tiene el navegador de organizar una página web como          un árbol de objetos, donde cada parte del HTLM (etiqueta, atributo, texto, etc) se convierte en un nodo dentro de ese árbol.
        
        <img width="324" height="540" alt="image" src="https://github.com/user-attachments/assets/ab182f94-8776-47f5-bf83-bc60d1e7d100" />

        
        Sirve para:
        
        - Manipular el contenido de una página desde Js
        - Cambiar estilos, atributos o clases de elementos
        - Agregar o eliminar elementos del HTML de forma dinámica
        - Responder a eventos como clicks, movimientos del ratón, entradas del teclado, etc.
    4. En Js, el document es un objeto global que representa la página web cargada en el navegador. Viene del DOM.
    La forma que tenemos para conectar nuestro js con los elementos que tenemos en la página HTML es a través de document (establece un puente), nos permite trabajar con una variedad de métodos. 
    Entonces, cuando escribimos document. estamos accediendo a todas las herramientas que nos permite leer o modificar el contenido del HTML desde Js. Por ahora, trabajaremos solo con querySelector, este solo busca y selecciona el primer elemento del HTML que       coincida con un selector CSS (”p”, “clase”, “div”,etc) que yo le indique, en nuestro caso será el h1.
    En el caso de que quisiera seleccionar mas de un h1, puedo ocupar querySelectorAll, con este me puede tomar mas de un h1
        
        <img width="986" height="797" alt="image" src="https://github.com/user-attachments/assets/7c58eb98-8d9f-40da-9fc7-1b962d866144" />

        
        <img width="375" height="75" alt="image" src="https://github.com/user-attachments/assets/e9e98a14-d07a-4d81-ac10-f0b876362c01" />

        
        Esta línea de código retorna el elemento h1 que tenemos en el index.html que es el título, peor nosotros debemos tomar ese valor y asignárselo a una variable.
        
        <img width="478" height="62" alt="image" src="https://github.com/user-attachments/assets/3882ca49-87bc-4b38-b811-a96f59d03fa8" />

        
        Debemos recordar que esta línea deja de ser un texto y pasa a ser un objeto, donde podemos trabajar distintas cosas con ese objeto. Una de esas cosas que podemos trabajar es colocarle un texto. Puedo llamarla  y ponerle .innerHTML podemos definirle un           titulo a este juego.
        
        <img width="503" height="83" alt="image" src="https://github.com/user-attachments/assets/8baa9a05-ae6b-4dd2-acad-b3fc2bf81f61" />

        
        <img width="1240" height="640" alt="image" src="https://github.com/user-attachments/assets/9cf27608-1e47-48f1-9679-33f9b8e90a12" />

        
        Repetimos el proceso pero para <p>
        
        <img width="557" height="162" alt="image" src="https://github.com/user-attachments/assets/e3d14922-2167-49ab-b02b-73af497aceda" />

        
        <img width="960" height="482" alt="image" src="https://github.com/user-attachments/assets/e178a0c1-e783-4053-9d64-a6fe0ab305ea" />

        
        RECORDAR: 
        
        - Método: es una acción que puede hacer un objeto. Ej:
        
        ```jsx
        document.querySelector();
        ```
        
        document es el objeto y querySelector es el método que hace una acción: buscar un elemento en el HTML.
        
        Un parámetro es la información que usamos en método, colocamos paréntesis () porque ahí van los parámetros. Ej:
        
        ```jsx
        document.querySelector("p");
        ```
        
        querySelector es el método
        ”p” es el parámetro que le dice: busca el primer elemento <p> en el HTML
        

1. **Manipulando contenido HTML con JavaScript**
    
    <img width="818" height="586" alt="image" src="https://github.com/user-attachments/assets/d25d74be-b460-47a9-b808-fe38f8050c65" />

    

1. **Evento a un clic y primera función**
    1. En la interface de la página de nuestro juego, podemos observar que tenemos 2 “botones” pero por el momento no hay interacción al cliquear los botones. Nuestro paso es usar Js para gestionar el evento del botón (evento: acción para x objeto, poner el curso sobre y que salga una descripción o un cambio de color). si revisamos el index.HTML, podemos encontrar las etiquetas de estos botones <button>.
    2. Todos los eventos en Js comienzan con el prefijo  “on” (en o cuando). Por lo tanto, en la etiqueta <button …. >Intentar< colocaremos on, la colocar on, se nos abre un listado de acciones para poder trabajar, pero en esta caso, utilizaremos “onclick”. Al integrar esta acción, se nos abrirá unas comillas , donde el código espera que coloquemos un algo, ese algo será código Js. Lo usable para nosotros, no es poner todo el código, hay algo como mas funcional que se llama “función” (proceso que realiza un tarea, puede o no retornar un valor). En el caso de nuestro juego, armaremos el esqueleto de la función que vamos llamar cuando hagamos click. Cumpliremos las reglas básicas de no dejar espacio, acetos, pero usaremos el camelCase como forma de nombrar la función. La llamaremos “intentoDeUsario();
    RECORDAR: Como toda función, siempre llevan paréntesis “intentoDeUsuario(  );”
    3. Esta función creada “intentoDeUsuario” la trabajaremos en el archivo app.js. Para poder trabajarla, debemos agregar en nuestro código FUNCTION y  de esta manera llamamos a la función creada en index.HTML al archivo app.js. Una función es un encapsulamiento de una acción que queremos que haga, para esto, ocupamos los paréntesis en llave {  } para encerrar la acción que queremos que nuestra función. En nuestro caso, la línea de código quedaría de la siguiente manera: function intetoDeUsuario ( )  { }. Para terminar y comprender mejor la sintaxis de esta línea, agregaremos un alert para poner en acción la función. 
        
        <img width="1234" height="915" alt="image" src="https://github.com/user-attachments/assets/81ebe6dc-568c-44da-bd89-382984c6ac06" />

        
        <img width="571" height="254" alt="image" src="https://github.com/user-attachments/assets/8a23a14c-4b28-4029-84a2-cf224516a990" />

        
        <img width="876" height="835" alt="image" src="https://github.com/user-attachments/assets/94153934-c53a-4bf6-9dfe-939a5f57b797" />

        
2. **Función onclick**
    
    <img width="824" height="846" alt="image" src="https://github.com/user-attachments/assets/b9297017-c745-48c8-abb9-e25d754ea79a" />

    

1. **Para saber más: diferencias entre HTML, CSS y JS**
    1. HTML: Lenguaje de marcado para estructurar contenido (título, párrafo). Estructura y organiza el contenido de una página de manera semántica, lo que es vital para la accesibilidad, la indexación en motores de búsqueda y una experiencia consistente  en diferentes dispositivos. 
    2. CSS: Lenguaje de estilos para presentación y estilización ( p { color:blue; } div {background: #159 }. Controla el diseño y apariencia de los sitios webs.
    3. JS: Lenguaje de programación para interactividad (function iniciarJuego (  ); …. Crear experiencias interactivas y dinámicas, mejorando la usabilidad al ofrecer funcionalidades más avanzadas a los usuarios. 
    4. https://www.aluracursos.com/blog/html-css-javascript-cuales-son-las-diferencias

1. **Desafío: hora de practicar**
    
    En una carrera de desarrollo de software, la práctica constante de la lógica de programación desempeña un papel fundamental en la construcción de bases sólidas.
    
    La lógica de programación no solo te permite la creación de algoritmos eficientes y soluciones elegantes, sino que también desarrolla la capacidad de pensar de manera estructurada y analítica. Esta habilidad es esencial para enfrentar desafíos complejos y convertir problemas abstractos en implementaciones tangibles.
    
    Con esto en mente, hemos creado una lista de actividades (no obligatorias) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje. ¡Vamos a practicar!
    
    ## **Desafíos**
    
    1. Descarga otro proyecto haciendo clic en [este enlace](https://github.com/alura-es-cursos/js-curso-2/tree/main) y ábrelo en Visual Studio Code.
    2. Cambia el contenido de la etiqueta `h1` con `document.querySelector` y asigna el siguiente texto: "Hora del Desafío".
    3. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
    4. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
    5. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
    6. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta
        
        <img width="735" height="596" alt="image" src="https://github.com/user-attachments/assets/76e08731-97a8-4b90-a731-4b2ff029ce10" />

        <img width="870" height="581" alt="image" src="https://github.com/user-attachments/assets/a319f1c4-b668-4ce5-b6e4-234d652c982c" />

        <img width="439" height="144" alt="image" src="https://github.com/user-attachments/assets/41554ac5-d1e7-4ce9-a9a8-f7ef12932320" />

        <img width="445" height="151" alt="image" src="https://github.com/user-attachments/assets/a7f003c0-68cd-4589-9d56-280745fc72eb" />

        <img width="440" height="86" alt="image" src="https://github.com/user-attachments/assets/c42e603e-dd90-4f64-8093-c73347d95160" />

        <img width="435" height="88" alt="image" src="https://github.com/user-attachments/assets/1026a6cc-52f2-4628-85fc-bb86ab68ba25" />

        <img width="440" height="84" alt="image" src="https://github.com/user-attachments/assets/00af3d7d-f744-4a5f-8d4a-4c754e82cd96" />

        <img width="238" height="196" alt="image" src="https://github.com/user-attachments/assets/4d1b381d-b9b7-463e-806e-f98cbfbe0d4b" />

        
        Explicación del código:
        
        .split(”+”) : Corta el texto en dos partes [”5 “, “ 7”]
        
        .trim( ) : Quita los espacios
        
2. **Lo que aprendimos**
    
    <img width="726" height="240" alt="image" src="https://github.com/user-attachments/assets/405c1200-ef6f-4eab-a02c-2e3e1468bd7c" />

    

---

### Funciones

1. **Proyecto del aula anterior**
    1. Descargamos el proyecto a trabajar por medio de este link

1. **Asigna texto a un elemento HTLM**
    1. Una de las buenas practicas como programador, es darnos cuento que al observar que repetimos mucho en nuestro código, podemos tomar la decisión de automatizar para ahorrar espacio y optimizar. Una manera de optimizar nuestro código es convirtiendo las líneas en funciones.
    2. Declaramos una función en nuestro proyecto, la designaremos como function asignarTextoElemento( ) { } y dentro de los paréntesis en llaves, pondremos las 2 primeras líneas de nuestro código. Para poder llamar esta nueva función, escribiremos mas abajo el nombre de esta, la cual es asignarTextoElemento( ); Esto lo podemos dentro de JS y dentro de HTML (SOLAMENTE EN EVENTOS) 
        
        RECORDAR: 
        
        - JS es un lenguaje que ejecuta secuencialmente, va leyendo de arriba hacia abajo, pero en el caso de encontrar funciones en líneas o declaradas, las lee primero y deja procesadas por si son llamadas en cualquier momento.
        - HOISTING: hace le movimiento de las variables y las funciones al inicio, para que puedan quedar disponibles.
    3. Para dejar de repetir el código debemos hacer que la función pase a ser genérica, para esto en Js existen los parámetros,  esto es la forma en que el comportamiento de la función se va a modificar desacuerdo a lo que reciba, porque no habrá una etiqueta fija. La función no necesita conocer la etiqueta de manera fija, ya que puede ser recibido cada vez que es llamada. Para esto crearemos un parámetro llamado elemento(la etiqueta que va a cambiar), texto, estas quedan disponible como una variable dentro de la función.
    Nuestra función puede recibir parámetros, gracias a esto es posible que sea genérica para poder reutilizarla en diferentes momentos, entonces, definimos 2 parámetros que recibe la función el elemento (el elemento HTML que queremos trabajar). Estos elementos al ser actualmente variables, no necesitan comillas dentro de los paréntesis de querySelector y titulo.innerHTML. Nuestra variable titulo le cambiaremos el nombre, solo por motivos de buenas practicas. Lo cambiaremos por elementoHTML.
    4. En la llamada o ejecución de asignarTextoElemento( ); nos esta pidiendo los elementos que queremos ejecutar. En nuestro código pondremos asignarTextoElemento(”h1”, Juego del número secreto” ); Esto se llama invocación de la función 2 veces (para h1 y p).
    5. En resumen, lo que hicimos fue eliminar toda esa declaración de variables y llamada al document, lo encapsulamos dentro de una función y por ultimo, realizamos una invocación de la función 2 veces. 
        
        <img width="460" height="220" alt="image" src="https://github.com/user-attachments/assets/09d9bf50-b572-46c5-b0e1-1654f25f1e1e" />

        <img width="640" height="351" alt="image" src="https://github.com/user-attachments/assets/de76a0ff-c30b-4d57-a38b-d6b6d0987a55" />

        
2. **Trabajando con DOM**
    
    <img width="780" height="741" alt="image" src="https://github.com/user-attachments/assets/31623cce-3b9f-4cd1-b626-9afe877f3089" />

    

1. **Genera un número aleatorio**
    1. Ahora en nuestro proyecto, aprenderemos como crear una función para crear un número aleatorio genérico. Para esto escribiremos function generarNumeroSecreto ( ) { } (en este caso, no asignaremos parámetros, por ende dejaremos los paréntesis vacíos). Ocuparemos un concepto de función que es retornar un valor return; 
    RECORDAR: return o retornar es normal dentro de una función, no es obligatoria que retorne, pero si aplicarlo en las funciones es una buena practica.
    2. En nuestra función generarNumeroSecreto (dentro de los paréntesis de llave) asignaremos una variable llamada numeroSecreto y le entregaremos un método aplicado anteriormente, llamado Math.floor(Math.random()*10)+1; Por ultimo, terminaremos el bloque con un return y le agregamos la variable numeroSecreto para que retorne esta variable. Al retornar la variable (numeroSecreto) estamos pidiendo que nos retorne un valor entero aleatorio.
    RECORDAR: Math.rondom nos dará un número al azar, al poner *10 lograremos que nos de como número máximo el número 10, pero para evitar los números decimales, ocupamos el Math.floor para que sol sean número enteros. Po ultimo, agregamos el +1 para que inicie del 1 y no del 0.
        
        <img width="646" height="474" alt="image" src="https://github.com/user-attachments/assets/445aca9a-9144-4723-a63c-bad4475b9deb" />

        
    3. Ahora nos ubicamos en la parte superior de nuestro código para crear una nueva variable llamada numeroSecreto y la igualaremos a la función que creamos para el número secreto.
    ¿Puedo tener, no, y tengo numeroSecreto fuera de mis funciones y tengo el mismo nombre numeroSecreto dentro de mi función? SI ! ya que numeroSecreto es de ámbito o alcance global (**ámbito** o **alcance de una variable** significa **desde qué partes del código puedes acceder a esa variable** y hasta dónde “vive” en memoria antes de desaparecer.) En el caso de la que está en la función, es una variable de ámbito o alcance de bloque. Está solo interna. Esta practica no es recomendable, ya que puede saltar errores y confundir a futuras ediciones.
        - Existen tipos de alcance:
            - Ámbito global: Accesible desde todo el código
            - Ámbito de función: Accesible solo dentro de la función donde fue declarada
            - Ámbito de bloque: Accesible solo dentro de { } donde se declaró
        
        <img width="633" height="510" alt="image" src="https://github.com/user-attachments/assets/42ecb130-6219-4bc8-8979-34a2746095d5" />

        
    4. Como observamos, debemos corregir el código, por ende bajaremos a la función generarNumeroSecreto y en lugar de tener una variable (let numeroSecreto = …) simplemente le daremos un return de ello. 
        
        <img width="645" height="532" alt="image" src="https://github.com/user-attachments/assets/8029d63a-5fd3-4c8f-b5a5-d248aa033358" />

        
2. **Anatomía de una función**
    
    <img width="731" height="969" alt="image" src="https://github.com/user-attachments/assets/e894ec6d-79e3-4566-941a-f1faa7d67085" />

    

1. **Capturando el valor del input**
    1. Necesitamos un mecanismo que compare el numero propuesto del usuario con el número secreto y para esto aprenderemos a utilizar el input (se refiere a **un campo donde el usuario puede introducir datos** en una página web, y que luego tu código puede leer o manipular.). Al inicio del curso, utilizamos los prompt, pero para que sea mas profesional utilizaremos el input para capturar esta respuesta del usuario. Para esto, nos dirigiremos a la función intentoDeUsuario y modificaremos el nombre, ya que la idea es que este nombre sea las cercano a la descripción de su uso, por ende la renombraremos como verificarIntento. Al cambiarlo en el app.js, también debemos cambiarlo en el index.html. Dentro de esta función vamos a capturar lo que el usuario escribió, para ello utilizaremos una variable llamada numeroDeUsuario y aplicaremos el document.querySelector ya que solo tenemos un input. El input que estamos haciendo referencia es el que encontramos en el index.html ya que es una etiqueta, esta esta representando a la caja de texto de nuestro juego. 
        
        <img width="684" height="140" alt="image" src="https://github.com/user-attachments/assets/e7f0af91-d14c-4905-aa79-efa89ade2951" />

        
    2. En un archivo index.html, es posible tener mas un input y para poder identificar cada uno de ellos podemos otorgarle un id (atributo). A lo largo de la creación de un proyecto, podemos ir otorgado una variedad de atributos. Volviendo a nuestro juego, al id le pondremos: valorUsuario. Este nuevo id lo utilizaremos en el app.js y usaremos una herramienta que busca solo por id document.getElemeneById(”valorUsuario”) Al terminar de escribir esta herramienta con el id, pondremos un punto . y este nos abrirá una listado de atributos y por ahora, utilizaremos value;
        - El .value sirve para obtener (o establecer) el valor que el usuario ha escrito en un elemento de formulario como un <input> o <textarea>
        - value siempre devuelve una cadena de texto (string), incluso si el type="number".
        
        <img width="764" height="135" alt="image" src="https://github.com/user-attachments/assets/9ea762f4-2d3b-41eb-8485-42b77c0ed4be" />

        
    3. Ahora comprobaremos si lo que coloco el usuario corresponde al número secreto, para esto ocuparemos console.log dentro de la función verificarIntento. 
        
        ```
            console.log(numeroSecreto);
            console.log(numeroDeUsuario);
            console.log(numeroDeUsuario==numeroSecreto)
            /// Esta condicón nos esta comparando si numeroDeUsuario es igual a 
            /// numeroSecreto, por esto utilizamos ==. Este dato sera retornado
            /// como booleano (true/false 1/0)
        ```
        
        <img width="757" height="232" alt="image" src="https://github.com/user-attachments/assets/c20bea11-7337-4ad1-b69b-516309e06a0d" />

        <img width="1137" height="439" alt="image" src="https://github.com/user-attachments/assets/e929402c-21fe-4baf-a5da-40ae53200556" />

        
    4. El input normalmente retorna un tipo de dato que no es número. Para asegurarnos que el retorno sea correcto, utilizaremos nuevamente console.log(typeof(…));
        
        ```jsx
        function verificarIntento(){
            let numeroDeUsuario = document.getElementById("valorUsuario").value;
            console.log(typeof(numeroDeUsuario));
            console.log(numeroSecreto);
            console.log(typeof(numeroSecreto));
            console.log(numeroDeUsuario);
            console.log(numeroDeUsuario==numeroSecreto)
            return;
            
        }
        ```
        
        <img width="561" height="270" alt="image" src="https://github.com/user-attachments/assets/0c277c07-0c3f-4e33-8c46-e395623ee170" />

        
        Observamos que esta retornando en string 4 (el número secreto) y el number 8 (el número del usuario). Lo ideal es que al comparar sea los mismos tipos de datos. En termino de funcionalidad esta bien, pero no es lo ideal. Para esto en el input ocuparemos parseInt, para forzar que el dato sea un número. Para esto debemos trabajar en la línea de donde estamos obtenemos el valor y vamos a encerrarlo con los paréntesis para que se convierta en el parámetro de la función parseInt.
        
        <img width="849" height="271" alt="image" src="https://github.com/user-attachments/assets/dbad2883-d99f-4677-bf88-a482df40e352" />

        
        <img width="1251" height="421" alt="image" src="https://github.com/user-attachments/assets/be9c1f66-5cfb-49c6-a535-5fc91d05d300" />

        
2. **Función que verifica números**
    
    <img width="570" height="994" alt="image" src="https://github.com/user-attachments/assets/3ddc233f-f0ab-4297-b791-6b747a1e7491" />

    

1. **Para saber más: Funciones con Js**
    
    <img width="1020" height="817" alt="image" src="https://github.com/user-attachments/assets/c4b25e69-a4aa-4570-98d7-b79d555570e8" />

    

1. **Desafío: Hora de practicar**
    1. Crear una función que muestre "¡Hola, mundo!" en la consola.
        
        <img width="580" height="445" alt="image" src="https://github.com/user-attachments/assets/e666e351-ff00-40f8-904c-446fe6f5df8e" />

        
    2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
        
        <img width="498" height="435" alt="image" src="https://github.com/user-attachments/assets/a7219c88-b267-4e7f-901c-73f9e863c345" />

        
    3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
        
        <img width="362" height="439" alt="image" src="https://github.com/user-attachments/assets/da08a5bc-af17-4165-91c6-aae42f9e4965" />

        
    4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
        
        <img width="460" height="498" alt="image" src="https://github.com/user-attachments/assets/e96efde0-76a0-4938-8b4d-b538900aa38e" />

        
    5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
        
        <img width="416" height="579" alt="image" src="https://github.com/user-attachments/assets/48be4b5e-1f5b-41d5-8c23-1eb850826e2f" />

        
    6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
        
       <img width="386" height="438" alt="image" src="https://github.com/user-attachments/assets/dcf82083-6036-4159-a1c6-afab5360012b" />

        
2. **Lo que aprendimos**
    
    <img width="830" height="401" alt="image" src="https://github.com/user-attachments/assets/bb9091cb-482a-4280-8800-58a1d3fdcdeb" />

    

---

### Reiniciando el juego

1. Proyecto del aula anterior
    1. Se descarga el proyecto: https://github.com/alura-es-cursos/2035-logica-programacion-2/tree/Aula2

1. **Mensaje, si acertó**
    1. Ahora en nuestro juego, ejecutaremos la lógica si el usuario acertó o no al número secreto. Además complementaremos el código con lo aprendido en la sesión pasada. Para esto, limpiaremos los console.log y comenzaremos a trabajar con if. Dentro de este if aplicaremos la una función que llame a otra función (Esto es posible ya que Js al leer el código, toma todas las funciones y las deja reservadas para ir mostrándolas según el orden y llamado de cada uno de ellas.) Este if, ayudara a saber si el usuario acertó al número secreto. 
    2. Otro punto a corregir es el cambio de == a === ya que el triple igual es para una comparación mucho mas estricta.
        
        <img width="470" height="523" alt="image" src="https://github.com/user-attachments/assets/e3fdecf8-ea0d-459b-bf05-3a1589b11bc0" />

        
        <img width="1014" height="659" alt="image" src="https://github.com/user-attachments/assets/bb6c8c65-5058-4fda-b470-bae57fed1e37" />

        
    3. La primera ayuda que entregamos al usuario era la condición if (si), también podemos seguir ayudando al usuario entregando la otra condición llamada else (si no ó de lo contrario) en el caso de que no acertara el número. El poder de usar las funciones nos ayuda a ocuparla una vez, en este caso, hemos llamado 3 veces la función de asignarTextoElemento.
        
        <img width="1159" height="811" alt="image" src="https://github.com/user-attachments/assets/5d6d702f-3dfb-4094-92c7-43d39d46298b" />

        
2. **Mensaje de número intentos**
    1. Para el siguiente avance, aplicaremos el contador de intentos. Crearemos nuestra nueva variable llamada intentos. También debemos ubicar nuestro incremento de intentos después del else, ya que si acierta el número, no hace falta aumentar el contador (intentos) ya que el juego termina. Si llegara a fallar ahí si se aumentaría en 1 el contador para llevar la cuenta de cuántos intentos llevaría. El ++ se pone justo donde quieras que el contador aumente, ni antes ni después. En este caso, solo queremos aumentar cuando el usuario falla.
        
        <img width="1157" height="868" alt="image" src="https://github.com/user-attachments/assets/b00cfafa-d31d-4ab4-a57e-2de501881f9f" />

        
    2. Aplicamos un contador de intentos para saber cuantos intentos se tomo el usuario para adivinar el número, pero presentamos el mismo problema que en el proyecto anterior y es el problema lingüístico de vez y veces. Ocuparemos le operador ternario ( ? ) y template string (` ${…} `) Le decimos que si (?) el usuario acierta con un intento debe asignarle vez, de lo contrario ( : ), debe asignarle veces.
        
        <img width="1220" height="82" alt="image" src="https://github.com/user-attachments/assets/22693d78-d517-4d03-a56b-0b03c654a6d0" />

        
        <img width="528" height="222" alt="image" src="https://github.com/user-attachments/assets/215c1caa-81a5-45c1-8380-246db2eb0557" />

        
        <img width="1301" height="873" alt="image" src="https://github.com/user-attachments/assets/e018b12e-9871-403f-bf0b-7c5a9839d07c" />

        
3. **Calculadora de promedio y situación del alumno**
    
    <img width="564" height="921" alt="image" src="https://github.com/user-attachments/assets/0e191af5-9ba7-4e28-a383-9f9f27078170" />

    

1. **Limpiar campo**
    1. Hasta el momento en nuestro juego el usuario debe limpiar la casilla manualmente cada vez que deba realizar otro intento, pero ahora dejaremos eso programado.
    2. Creamos una función llamada limpiarCaja( ){ } y la localizamos mediante la id valorUsuario y agregamos el .value = “ ”; Usamos esto porque queremos acceder o modificar el valor que el usuario escribió en el input de HTML dejamos el entre comillas vacío para que limpie la caja. También abajo de las condiciones de no acierto, activaremos nuestra función limpiarCaja, ya que si el usuario no acierta, necesitara escribir nuevamente el número y para esto queremos que la casilla este en blanco para reintentarlo.
        
        <img width="614" height="237" alt="image" src="https://github.com/user-attachments/assets/e444f814-38a7-41a7-adda-b7f49afff523" />

        
    3. Si observamos la página de nuestro juego, tenemos dos botones (intentar y nuevo juego) por ahora solo esta activo intentar, pero ahora activaremos el otro botón. Para hacerlo debemos posicionarnos en nuestro código después de que el usuario acierte, por ende empezaremos a escribir después del acierto y antes de las condiciones. En el index.html, podemos observar que el botón de nuevo juego tiene un atributo (disabled), a diferencia del otro. Esto quiere decir que el botón esta desactivado, así que quitaremos ese atributo. Lo mas fácil seria simplemente borrarlo xd, pero lo que haremos es que se active solo  cuando el usuario finalice el juego.
        
        <img width="488" height="134" alt="image" src="https://github.com/user-attachments/assets/85ad28fc-117d-4d75-b020-ae76c001f464" />

        <img width="810" height="55" alt="image" src="https://github.com/user-attachments/assets/ad8394f0-a564-4d51-b447-26ac277ac495" />

        <img width="721" height="130" alt="image" src="https://github.com/user-attachments/assets/f92a9894-1490-43ca-a792-3d01e8bcae96" />


        
        Como podemos observar hacemos el llamado mediante el getElementById(”reiniciar”) en este caso, no utilizamos el # (como en el caso de #vlorUsuario) ya que ocupamos el método getElementById, el cual hace la selección directa de un atributo por id y lo complementamos con .removeAttibute(”disabled”) el cual nos permite apagar el desactivo. Entonces, considerando los métodos y su ubicación en el código, lo que buscamos es que, cuando el usuario acierte el número, se active de inmediato el botón “Nuevo juego”, permitiéndole reiniciar la partida sin pasos adicionales.
        
        <img width="488" height="271" alt="image" src="https://github.com/user-attachments/assets/9a21414e-562a-4716-a4b2-66e4d3540ef2" />

        
2. **Función reiniciar juego**
    1. El siguiente paso es implementar el botón Nuevo juego, necesitamos que al presionar el botón responda a un evento, Por ende al hacer click en él se llame una función. 
    2. Nos ubicaremos en el index.html y localizaremos este botón y le agregaremos el atributo onclick=”reiniciarJuego( );” Luego, pasamos a app.js y abajo de todo agregamos la función con el llamado correspondiente. Reiniciar juego quiere decir que vamos a tener que resetear todo el sistema (como si le diéramos un refresh). Para esto nos ayudaremos con una mini guía de comentario.
        
        <img width="477" height="176" alt="image" src="https://github.com/user-attachments/assets/50d34e63-f2e6-4392-a736-7676057b0353" />

        
    3. Ya teniendo claro lo que debemos hacer para automatizar el evento al momento de hacer click en el botón, comenzaremos a crear nuestra función.  Para manejar de manera mas optima el código, adjuntaremos estas acciones en una sola función, la cual llamaremos function mensajesIniciales ( ) { Aquí acoplaremos todo lo que tenga que ver con los mensajes en esta función. Y gracias a este acoplamiento, podemos borrar los asignarTextoElemnto que están suelto al final, ya que están en la nueva función.
        
        <img width="632" height="420" alt="image" src="https://github.com/user-attachments/assets/2aaf1477-e139-4a2a-86e4-cda68a3e8f78" />

        
    4. Para generar el numero aleatorio, simplemente hacemos la invocación dentro de esta función de reinicio, recordando solo invocarla con el let. A medica que fuimos completando el listado (//letras verdes) nos percatmos que podemos incluir todos estos puntos en la misma función, asi que por situacion practica, cambiaremos el nombre de mensajesIniciales a condicionesIniciales.
    5. Otro cambio a realizar es que en la variable de intentos=1 le reasignaremos su valor a 0, al igual que la variable numeroSecreto, ya que en condicionesIniciales ya estará generando el número secreto automáticamente.
        
        <img width="1059" height="903" alt="image" src="https://github.com/user-attachments/assets/8939a19b-86fd-4898-aead-f45475ae0f6d" />

        
    6. En el punto c de esta sección, dejamos habilitado el botón Nuevo juego y si lo dejamos así tal cual, el usuario tiene la oportunidad de presionarlo a la mitad del juego, reiniciando la partida sin haberla acabado. Entonces, lo que realizaremos ahora es deshabilitar el botón mientras el juego este funcionando, para luego reactivarlo al momento de finalizar la partida. Para ellos continuaremos en la función reiniciarJuego( ) y agregaremos un método para lograr nuestro objetivo. Comenzaremos con el querySelector, para luego llamar por id con (”#reiniciar”) para luego ocupar .setAttribute( ) este espero dos parámetros, a diferencia del remove que solo esperaba un parámetro, ya que este solo quita, por ende le solicitamos que quite x cosa. Mientras que el .setAttribute estamos diciendo “coloca esto, con tal valor”, por esto él espera dos parámetros. 
        
        <img width="797" height="303" alt="image" src="https://github.com/user-attachments/assets/d0cc8dc5-93ef-4ed5-93d6-e843e3fdb9cb" />

        
        RECORDAR: ¿Por qué usamos get.ElementById y querySelector si hacen los mismo?
        Ambos sirven para seleccionar elementos por su ID, pero tienen diferencias importantes.
        
        - Si solo necesitamos buscar por ID, lo mas óptimo y claro es usar getElementById.
        - Si ya estamos usando selectores CSS complejos o queremos mantener la misma sintaxis para cualquier selector, usar querySelector es cómodo y flexible.
        - Para seleccionar por ID individual, getElementById es más rápido y directo
        - Para seleccionar por clases, etiquetas o selectores completos, querySelectoe es el indicado.
        - En proyectos pequeños, usar uno u otro no afecta mucho, pero en proyectos grandes y optimizados, conviene usar getElementById para ID’s
    
3. **Adapta función**
    
    <img width="544" height="409" alt="image" src="https://github.com/user-attachments/assets/b9ca6b00-e4a8-443d-8452-3f8ad18aefbe" />

    
    <img width="631" height="869" alt="image" src="https://github.com/user-attachments/assets/97c0824f-8218-4de4-90bd-092f625d584d" />

    
4. **Para saber más: template string**
    
    <img width="624" height="660" alt="image" src="https://github.com/user-attachments/assets/6e9e46db-7f46-4fe1-9cba-a1b591a807ac" />

    
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    
5. **Desafío: Hora de practicar (por actualizar)**
    1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
    2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
    3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
    4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
    5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
    6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

1. **Lo que aprendimos**
    
    <img width="616" height="252" alt="image" src="https://github.com/user-attachments/assets/d0159373-dab5-44a3-92a6-929d4a08a91f" />

    

---

### Listas

1. **Proyecto del aula anterior**
    1. El proyecto a trabajar se descarga mediante el link https://github.com/alura-es-cursos/2035-logica-programacion-2/tree/Aula3

1. **Arreglos**
    1. En este punto del proyecto, trabajaremos en que el número aleatorio no se retira al reiniciar el juego (por ejemplo: El 3 salió y no queremos que al reiniciar la partida vuelva a salir). Para lograr esto, en js existe una lista de número que se puede almacenar para evitar la repetición de estos. Para lograr esto, trabajaremos con arrays (arreglos). Los arrays es una variable que se maneja como una lista. La cual puede contener diferentes tipos de datos. Para esto, profundizaremos un poco mas el tema.
    2. Utilizaremos la consola del navegador para comprender el concepto. Crearemos una varaible llamda numeroSorteado = [ ]; usamos corchetes, ya que con ellos le diremos a Js que esta variable es estructurada y su tipo es array (arreglo)
        
        <img width="281" height="166" alt="image" src="https://github.com/user-attachments/assets/9800b46b-87f0-4737-8c4c-cc61f55a2a3b" />

        
        En la primera línea nos dice que es una variable vacía, que no se le ha asignador valor. Mientras que en la siguiente nos dice que es una lista vacía.
        
        <img width="284" height="355" alt="image" src="https://github.com/user-attachments/assets/b54c067d-fd41-49f6-926f-e31d08f19b9e" />

        
        Ocuparemos el método .push que sirve para agregar elementos al final del array, como podemos ver primero agregamos a la lista un 5 y nos devolvió que hay 1 elemento en la lista, luego solicitamos que mostrara con el console.log el numero agregado y nos arroja solamente el 5. En el siguiente ejemplo sucede lo mismo, utilizamos .push para agregar a la lista el 8 como último número y nos devolvió que hay 2 elementos en esta lista ( el 5 y el 8).
        
        <img width="318" height="247" alt="image" src="https://github.com/user-attachments/assets/7e3c990b-6020-4557-b2f2-b6e80d743c86" />

        
        También podemos solicitar solamente el tamaño de esta lista y para ello  utilizamos .length el cual nos arrojo el tañado total, que es 2 ( 5 y 8).
        Para acceder a un elemento en particular existe el índice (posición), el primer elemento siempre cera 0 (TODOS LOS ARRAY INICIAN CON POSICIÓN CERO) La posición cero siempre será el primer elemento.
        
        <img width="337" height="597" alt="image" src="https://github.com/user-attachments/assets/aa1434df-78c8-4240-92ac-f4961f0c48a2" />

        
        Mientras que la posición final se va a referir al tamaño menos uno 
        
        <img width="275" height="169" alt="image" src="https://github.com/user-attachments/assets/39f3e772-2c72-43b4-ace0-16b75242ac33" />

        
        El tamaño de esta lista es de 3, la posición de nuestro primer elemento es 0 y la posición del último elemento es 3.
        
        <img width="495" height="169" alt="image" src="https://github.com/user-attachments/assets/5a3b8cc9-5a64-4502-b0d9-311577de074d" />

        
        Es importante conocer el último elemento porque cuando recorremos un array tenemos que acceder a posiciones válidas. Tomare de ejemplo la imagen de arriba. Si solicitamos la posición 20 nos arrojaría como vacío, ya que no contamos 21 elementos. Saber la última posición de un array es importante porque es muchos casos necesitaremos acceder, modificar o agregar datos al final de una lista sin perder lo que ya tienes. 
        
        <img width="409" height="483" alt="image" src="https://github.com/user-attachments/assets/19a77b1d-1c5a-4329-96c5-71ce9bb1a565" />

        
        <img width="319" height="338" alt="image" src="https://github.com/user-attachments/assets/5f66e9e9-13df-4c19-830a-b746770cb080" />

        
        https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
        
2. **Manipulación de listas en Js**
    
    <img width="621" height="806" alt="image" src="https://github.com/user-attachments/assets/ff121197-689e-4d2f-9ce0-03e7f6b1e350" />

    

1. **Arreglos: Recursividad**
    1. Implementaremos el array a nuestro juego. Para esto comenzaremos con la declaración una variable llamada listaDeNumerosSorteados = [ ]; En ella almacenaremos cada uno de los números para evitar repetir el número secreto.
    2. Nos iremos a la función de donde generamos el número para comenzar a trabajar (generarNumeroSecreto). Ahora cambiaremos el return por declarar, así que crearemos una nueva variable dentro de esta función, esto nos quedaría de la siguiente manera let numeroGenerado = Math.floor… Ese número generado debemos preguntarnos si esta en la lista, para ello ocuparemos las condiciones if y else. Para saber si esta incluido o no, podemos usar un método llamado includes( ), donde este método revisa si (if) en la lista ya esta registrado ese valor que vamos a pasar como parámetro. Si no (else) nosotros retornamos ya el valor que fue generado porque no existe en la lista, se puede jugar. Entonces hacemos un return numeroGenerado;
        
        <img width="595" height="220" alt="image" src="https://github.com/user-attachments/assets/a701665c-4767-4631-936e-e5c5335d06cf" />

        
    3. Adicionalmente cuando el número generado va a ser jugado deberíamos guardarlo en la lista para que no vuelva a salir. Para esto, utilizaremos el método .push para colocar ese elemento al final.
        
        <img width="596" height="214" alt="image" src="https://github.com/user-attachments/assets/6449fd9f-f995-46a7-9ecd-ac2b4b4349c1" />

        
    4. Si el número ya existe en la lista, deberíamos generar otro. Para esto ocuparemos un concepto llamado RECURSIVIDAD. Esto permite que la función que esta ahí mismo, se llame a si misma. En términos prácticos de nuestro juego, siempre que genere un  número existente de la lista entra a la recursividad para llamarse a si misma para generar un número aleatorio. Esto  nos ayuda a acotar nuestro código y de reutilizar las funciones que ya tenemos presente. 
        
        <img width="962" height="237" alt="image" src="https://github.com/user-attachments/assets/93bc17a7-8931-4ef1-b036-73d8f1bfe450" />

        
       <img width="304" height="802" alt="image" src="https://github.com/user-attachments/assets/ba870b96-2ab3-420b-a0cd-87205a386dad" />

        
        Para evitar este error debemos en un futuro trabajar con el control de salida
        
        <img width="495" height="674" alt="image" src="https://github.com/user-attachments/assets/e864603d-790b-49b8-97c9-5881a2b68175" />

        
2. Resolviendo la Recursividad
    1. En este punto, nos dedicaremos a resolver el problema presentada anteriormente, ya que necesitamos poner un alto al terminar de generar todos los número secretos. Para evitar esto, debemos manejar la condición salida, así evitamos que el Js siga procesando y solo se detenga automáticamente después de generar los 10 posibles números.
    2. Para esto, realizaremos algunos cambios. Agregaremos una nueva variable llamada numeroMaximo=10; por ende, todos los 10 de nuestro código se irán cambiando por esta nueva variable
        
        <img width="764" height="405" alt="image" src="https://github.com/user-attachments/assets/823a6633-f5a9-4007-b3d6-02d50d78788a" />

        
        Para encontrar los 10 mas rápido, podemos apretar ctrl+f, esto abrirá un buscador
        
    3. Hay varias maneras de abordar el tema del límite, pero el camino a seguir recomendado es que el usuario pueda sortear todos los números y de ahí poder salir victorioso. También podrías concluir con un mensaje de que completo el juego. Tomaremos esta idea y la transformaremos en código, para ellos volveremos a utilizar las condiciones if y else. Nos ubicaremos dentro de la función generarNumeroSecreto y comenzaremos a utilizar el if, llamaremos la listaNumerosSorteados y aplicaremos la teoría del tamaños .length== a numeroMaximo. Anidaremos nuestro if anterior dentro de este.
        
        <img width="1002" height="289" alt="image" src="https://github.com/user-attachments/assets/b46b43bc-71ee-47c3-8f22-03f89d586acb" />

        
        Al if grande (verde claro) le asignaremos un texto para que de a conocer al usuario que ya utilizo todos los números posibles.
        
        <img width="984" height="267" alt="image" src="https://github.com/user-attachments/assets/f656efe2-da95-4f6e-b1a2-13a1736557eb" />

        
        <img width="1419" height="492" alt="image" src="https://github.com/user-attachments/assets/e60c8c6b-3430-4ef9-8021-60ec0807921f" />

        
        Con esta condición de if y else mas el mensaje, podemos comprobar y afirmar que ya no tenemos el problema de la recursividad, debido a que hemos establecido la conexión de salida. Incluso se llega a desactivar el botón de “nuevo juego” porque oficialmente el juego a terminado. La única manera de volver a jugar es apretando un refresh F5 a nuestra pagina para resetear y comenzar una nueva partida. 
        
3. **Sorteando libros**
    
    <img width="627" height="695" alt="image" src="https://github.com/user-attachments/assets/b8f2b59e-b763-483d-a009-93edd958ce02" />

    

1. **Para saber más: ¿Vamos a leer más sobre listas?**
    
    <img width="613" height="604" alt="image" src="https://github.com/user-attachments/assets/a085bd7e-2d4a-42d7-98ec-9e520d82bea2" />

    
    <img width="557" height="557" alt="image" src="https://github.com/user-attachments/assets/3427c5d9-b3fa-464f-aa72-61b53dba35af" />

    
    <img width="614" height="631" alt="image" src="https://github.com/user-attachments/assets/c56a4e6f-dd54-4496-b560-a1fe80083efd" />

    

1. **Desafío: Hora de practicar (por actualizar)**
    1. Crea una lista vacía llamada "listaGenerica".
    2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
    3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
    4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
    5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
    6. Crea una función que calcule el promedio de los elementos en una lista de números.
    7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
    8. Crea una función que devuelva la suma de todos los elementos en una lista.
    9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
    10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
    11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

1. **Lo que aprendimos**
  <img width="620" height="353" alt="image" src="https://github.com/user-attachments/assets/0ee0b963-fbc4-46e5-a6ad-022f92ae30c4" />

----

<img width="550" height="398" alt="image" src="https://github.com/user-attachments/assets/03c99b07-d785-4816-80bb-dcd5f1418bec" />


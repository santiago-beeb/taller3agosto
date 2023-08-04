// Taller de  sintaxis lógica en JavaScript
// Mejora tus capacidades siguiendo una serie de problemas, las cuales irán aumentando el nivel.
// Utiliza prompt para capturar los datos
// Operadores aritméticos:
// 1.Calcular la suma de dos números e imprimir el resultado. 😉

const sum = (num1, num2) => {
  let num1 = parseInt(prompt("Digite un número"));
  let num2 = parseInt(prompt("Digite el segundo número"));
  return num1 + num2;
};

alert("La suma es: " + sum(num1, num2));

// 2. Calcular el precio total de una compra que incluye 3 artículos con diferentes precios y cantidades. A la compra le aplicaremos el 10% de impuestos.

const compra = () => {
  let precioProducto1 = parseFloat(prompt("Ingrese el valor del producto 1"));
  let cantidadProducto1 = parseFloat(
    prompt("Ingrese la cantidad del producto 1")
  );

  let precioProducto2 = parseFloat(prompt("Ingrese el valor del producto 2"));
  let cantidadProducto2 = parseFloat(
    prompt("Ingrese la cantidad del producto 2")
  );

  let precioProducto3 = parseFloat(prompt("Ingrese el valor del producto 3"));
  let cantidadProducto3 = parseFloat(
    prompt("Ingrese la cantidad del producto 3")
  );

  let subtotalProducto1 = precioProducto1 * cantidadProducto1;
  let subtotalProducto2 = precioProducto2 * cantidadProducto2;
  let subtotalProducto3 = precioProducto3 * cantidadProducto3;

  let subtotal = subtotalProducto1 + subtotalProducto2 + subtotalProducto3;

  let impuestos = subtotal * 0.1;

  let precioTotal = subtotal + impuestos;

  let resultado = "****************Factura de compra****************\n";
  resultado += "Subtotal Producto 1: $" + subtotalProducto1.toFixed(2) + "\n";
  resultado += "Subtotal Producto 2: $" + subtotalProducto2.toFixed(2) + "\n";
  resultado += "Subtotal Producto 3: $" + subtotalProducto3.toFixed(2) + "\n";
  resultado += "Subtotal: $" + subtotal.toFixed(2) + "\n";
  resultado += "Impuestos (10%): $" + impuestos.toFixed(2) + "\n";
  resultado += "Precio Total: $" + precioTotal.toFixed(2);

  alert(resultado);
};

compra();

// 3. Calcular el monto de propina a dejar en un restaurante basado en el costo total de la comida y el porcentaje de propina 15%.

const propina = () => {
  let costoTotal = parseFloat(prompt("Cual es el costo total de la comida?"));

  let propina = costoTotal * 0.15;

  let resultado = "****************Factura de compra****************\n";
  resultado += "El total de la comida fue de: $" + costoTotal.toFixed(2) + "\n";
  resultado += "Propina (15%): $" + propina.toFixed(2) + "\n";
  resultado +=
    "Precio Total con propina: $" + (costoTotal + propina).toFixed(2);

  alert(resultado);
};

propina();

// 4. Calcular el IMC de una persona utilizando su peso en kilogramos y su altura en metros.

const imc = () => {
  let pesoKg = parseFloat(prompt("Ingrese su peso en kilogramos"));
  let alturaMetros = parseFloat(prompt("Ingrese su altura en metros"));

  let imc = pesoKg / (alturaMetros * alturaMetros);

  alert("Su Índice de Masa Corporal (IMC) es: " + imc.toFixed(2));
};

imc();

// Operadores de asignación:
// 1.	Multiplica un número por 2 utilizando un operador de asignación.

const multi = () => {
  let numero = parseInt(prompt("Digite un numero"));
  numero *= 2;
  alert("Su numero multiplcado por 2 es: " + numero);
};

multi();

// 2.	Utiliza operadores de asignación para actualizar una variable.
// Equivalente a sumas y multiplicación

const updateVar = () => {
  let numero1 = parseInt(prompt("Digite un numero"));
  let numero2 = parseInt(prompt("Digite otro numero"));
  numero1 *= 2;
  numero2 += numero2;
  alert("Su numero multiplicado por 2 es: " + numero1);
  alert("Su otro numero sumado consigo mismo es: " + numero2);
};

updateVar();

// Condicional If:
// 1.	Verifica si un número es par o impar y muestra un mensaje.

const esPar = () => {
  let num = parseInt(prompt("Ingrese un numero"));
  if (num % 2 === 0) {
    alert("El numero " + num + " es par");
  } else if (num % 2 !== 0) {
    alert("El numero " + num + " no es par");
  } else {
    alert("Ingresa un numero valido");
  }
};

esPar();

// 2.	Calcula el bono de un empleado según su rendimiento.
// Siendo mayor o igual a 90=bono de 500
// Mayor o igual de 80 =bono de 300
// Menor a 80 de 100

const bonos = () => {
  let rendimiento = parseInt(prompt("Cual fue el rendimiento del empleado?"));

  if (rendimiento >= 90) {
    alert(
      "El empleado tuvo un rendimiento de " +
        rendimiento +
        ", lo cual corresponde a un bono de 500"
    );
  } else if (rendimiento >= 80) {
    alert(
      "El empleado tuvo un rendimiento de " +
        rendimiento +
        ", lo cual corresponde a un bono de 300"
    );
  } else {
    alert(
      "El empleado tuvo un rendimiento de " +
        rendimiento +
        ", lo cual corresponde a un bono de 100"
    );
  }
};

bonos();

// 3.	Simula un cajero automático para retirar dinero con límite de saldo.

const cajeroAutomatico = () => {
  let saldoActual = parseInt(prompt("Ingrese su saldo actual:"));

  let cantidadRetirar = parseInt(
    prompt("Ingrese la cantidad que desea retirar:")
  );

  if (cantidadRetirar <= 0) {
    alert("La cantidad a retirar debe ser mayor a cero.");
  }

  if (cantidadRetirar > saldoActual) {
    alert("La cantidad a retirar excede el saldo disponible.");
  }

  saldoActual -= cantidadRetirar;
  alert("Retiro exitoso. Saldo restante: " + saldoActual);
};

cajeroAutomatico();

// Bucle for:
// 1.	Utiliza un bucle for para contar desde 1 hasta un número dado capturado con un prompt.

const contar = () => {
  let numero = parseInt(prompt("Ingresa un número"));
  let i = 1;

  for (i; i <= numero; i++) {
    alert("Numero: " + i);
  }
};

contar();

// 2.	Imprime un patrón de números triangulares
// 1
// 1 2
// 1 2 3

const triangulares = () => {
  let numeros = parseInt(
    prompt("Ingresa el número de filas para el patrón triangular:")
  );

  let patron = "";

  for (let i = 1; i <= numeros; i++) {
    patron += i + " ";
    alert(patron);
  }
};

triangulares();

// 3.	Categoriza los números de un arreglo en un rango como positivos, negativos o cero.

const categoria = () => {
  const numeros = [5, -8, 0, 0, -2, 6, -8, -4, 0, 8];
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      positivos++;
    } else if (numeros[i] < 0) {
      negativos++;
    } else {
      ceros++;
    }
  }

  alert("Cantidad de números positivos: " + positivos);
  alert("Cantidad de números negativos: " + negativos);
  alert("Cantidad de ceros: " + ceros);
};

categoria();

// 4.	Verifica si una palabra es un palíndromo (se lee igual de izquierda a derecha y viceversa).
// Ejemplo: reconocer

const esPalindromo = () => {
  let palabra = prompt("Ingresa una palabra");
  let esPalindromo = true;

  for (let i = 0; i < palabra.length / 2; i++) {
    if (palabra[i] !== palabra[palabra.length - 1 - i]) {
      esPalindromo = false;
      break;
    }
  }

  if (esPalindromo) {
    alert("La palabra '" + palabra + "' es un palíndromo.");
  } else {
    alert("La palabra '" + palabra + "' no es un palíndromo.");
  }
};

esPalindromo();

// 5.	Busca y muestra la posición de un carácter específico en una cadena.

const buscarPosicion = () => {
  const string = prompt("Escribe una palabra");
  caracter = prompt("Que letra quieres buscar");
  const posicion = string.indexOf(caracter);

  if (posicion !== -1) {
    alert(
      "El caracter '" +
        caracter +
        "' se encuentra en la posición " +
        posicion +
        " de la palabra."
    );
  } else {
    alert("El caracter '" + caracter + "' no se encontró en la palabra.");
  }
};

buscarPosicion();

// Bucle While:

// 1.	Realiza un conteo regresivo desde un número dado hasta 1

const conteoRegresivo = () => {
  let numero = parseInt(prompt("Digite un numero"));
  while (numero >= 1) {
    alert(numero);
    numero--;
  }
};

conteoRegresivo();

// 2.	Imprime un patrón de asteriscos como el siguiente:
// *
// **
// ***
// ****
// *****

const imprimirPatron = () => {
  let fila = 1;

  while (fila <= 5) {
    let asteriscos = "";
    let numAsteriscos = 1;

    while (numAsteriscos <= fila) {
      asteriscos += "*";
      numAsteriscos++;
    }

    alert(asteriscos);
    fila++;
  }
};

imprimirPatron();

// 3.	Crearemos un programa que permita a un profesor registrar las notas de los estudiantes, calcular el promedio de cada estudiante y el promedio de toda la clase.

const notas = () => {
  let cantEstudiantes = parseInt(prompt("Cuantos estudiantes son?"));
  let sumaTotal = 0;
  let i = 1;

  while (i <= cantEstudiantes) {
    let notasEstudiante = 0;
    let cantNotas = 1;

    while (cantNotas <= 3) {
      let nota = parseFloat(
        prompt(`Ingrese la nota ${cantNotas} del estudiante ${i}:`)
      );
      notasEstudiante += nota;
      cantNotas++;
    }

    let promedioEstudiante = notasEstudiante / 3;
    sumaTotal += notasEstudiante;

    alert(`El promedio del estudiante ${i} es: ${promedioEstudiante}`);
    i++;
  }

  let promedioTotal = sumaTotal / (cantEstudiantes * 3);
  alert(`El promedio de la clase es: ${promedioTotal}`);
};

notas();

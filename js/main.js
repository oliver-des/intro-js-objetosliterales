//------------------------------- Ejercicio 1 -------------------------------

/* Creamos un objeto --- persona y le damos unas propiedades*/
let objPersona = {
    nombre: 'Oliver',
    edad: 25,
    ciudad: 'Vitoria-Gasteiz'
}
/* Imprimimos cada propiedad por separado en la consola */
console.log(objPersona.nombre)
console.log(objPersona.edad)
console.log(objPersona.ciudad)

//------------------------------- Ejercicio 2 -------------------------------

/* Llamamos a objPersona y modificamos el valor de la propiedad ciudad   */
objPersona.ciudad = 'Alicante'

/* Añadimos la propiedad profesión */
objPersona.profesión = 'Desarrollador'

//------------------------------- Ejercicio 3 -------------------------------

/* Creo objeto y le asigno valor a las propiedades */
const objLibro = {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    anioPublicación: 1967,
/* Le doy un metodo o acción IMPORTANTE: para referirme a las propiedades tengo que llamar primero al objeto */
    resumen: () => `El libro ${objLibro.titulo} fue escrito por ${objLibro.autor} en ${objLibro.anioPublicación}.`,
};
console.log(objLibro.resumen())

//------------------------------- Ejercicio 4 -------------------------------

//------------------------------- Ejercicio 5 -------------------------------

//------------------------------- Ejercicio 6 -------------------------------

//------------------------------- Ejercicio 7 -------------------------------

//------------------------------- Ejercicio 8 -------------------------------

//------------------------------- Ejercicio 9 -------------------------------

//------------------------------- Ejercicio 10 -------------------------------

tags, npm notes

x.y.z
z => fixes, cambios menores, no que no afecte la API publica

y => new features, retrocompatible

x => no es retrocompatible, no se puede reutilizar, cambios en la logica de negocios


package.json

commander, bastante util para help

main, que necesita para ejecutarse, es como lo vamos a importar

bin, binarios, se inicializan ahí los binarios y sirve para ejecutar toda la aplicacion en este caso, lo del usuario con el nucleo de la funcionalidad

scripts, inician con npm start, o dependiendo de la bandera que tenga, generar scripts con npm, unicamente con npm

es necesario tener el repositorio, para reportar bugs, mejoras

keywords, para encontrarte

jest - devdependencies
 para pruebas unitarias, buscar pruebas unitarias



1. El Framework que consiste en crear un archivo js
my-module create logic <name>  ====> service-{name}.js
my-module create ui <name>  ====> myservice-{name}.html
service-{name}.css

2. Comparar las libreras importadas contra las dependencias and devDependencies del todo el proyecto

my-module // Returns list of unused modules

3. 


start: node main.js ¿@param?

promise.all(), recibe un arreglo de promseas

regresa los resolves de todos

promise hell


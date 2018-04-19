t.d.d.

test driven development

1.- pensar en pruebas que garanticen la funcionalidad

1.5.- Hacer que la prueba falle

2.- escribir codigo minimo necesario para que dicha funcionalidad se cumpla

3.- refector sin agregar nuevas funcionalidades


ventajas
mantenibilidad del codigo

solid good paracticles javascript

te 5 solid javascript, son principios no escritos que garantizan un buen codigo

s - single responsability
o -

objetos simulados y jest

pruebas unitarias, sirven para que el codigo que desarrollemos funcione de forma aislada (insolated), que no consume recursos externos, importación de otras cosas

los objetos unitarios sirven para evitar pruebas no confiables, para ello existen objetos simulados que son dummys, mocks, spies, stubs, estos nos permitirán no depender de terceros y así poder hacer pruebas unitarias de manera correcta.

dummy --> código harcodeado, cuando necesitamos comparar, son datos de assertions y de parametros

mocks --> instancias con caracteristicas de pruebas, si quiero imitar comportamiento de un mismo objeto

spies --> Llamadas a las funciones, solo es un wacher

stubs --> manejo de las funciones

dummy example

    const dummy ={
        error: 'Fatal',
        message: 'something is wrong'
    }

son ocupados para valores esperados, si se requiere de algun parametro con ciertas carateritica

mocks example

    const db = requiere('moongose');
    const mock = sinon.mock(db);
    //sinon creara un objeto y le agregará ciertas funciones, propiedas que nos permitiran trabajar con unit test
    //uso recomendado, al ejecutar varias funciones que esten relacionadas con un mismo objeto

spies example

const spy = sinon.spy(db,'short'); 
    //el segundo parametro es una funcion, es decir existe db.short();
    //solamente nos sirve para saber si se llamó o no una función, así como un son fin de cosas

stubs example
    //nos permite controlar el comportamiento de una funcion, sobreescribir una funcion, como un caso de pruebas

    //nested, quiere decir que es un callback
    conts stubs = sinon.stubs(db,'short').callsFake(() =>
    {
        return 5
    }
    );

    carpeta test
        un archivo  <nombreArchivo>.test.js

crear un archivo .dummy, donde estaran todas los dummys que vamos a requerir en nuestro archivo "ligado"

al utilizar, stub, mock, spy debemos darle un .restore() para cada caso de prueba

dummy.dirStub.restore();

esto es importante porque vamos a modificar las funciones y entonces para los siguientes no cambiara

y con mock haremos un mock.verific


http://sinonjs.org/releases/v4.5.0/


https://facebook.github.io/jest/

https://www.google.com.mx/search?q=tdd+&ie=utf-8&oe=utf-8&client=firefox-b-ab&gfe_rd=cr&dcr=0&ei=C7DXWtLaJPPTXrfmqDg


declarar const, arrow funtion

ademas generar test/dummy

    
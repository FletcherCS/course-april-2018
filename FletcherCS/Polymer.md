# Polymer, es una utileria (libreria) de javascript que utiliza "web componets"

el proposito de polymer -> 'use the platform'

utilizar todos los recursos que te ofrece la plataforma

## Web componets
    - html imports -> deprecate, ya no se usará pronto
    - templates -> Literalmente son templates
    - custom elements -> Tags como el de <my-component></my-component>
    - Shadow DOM

Imaginemos que es un contenedor, con la ventaja de tener el JS, HTML y CSS dentro de un mismo bloque

wc-1 es padre de wc-2 si está encapsulado, es decir:

<wc-1>
    <wc-2>
    </wc-2>
</wc-1>

La transferencia de hijo a padre es atravez de 'custom events', mientras que si se quiere enviar información del padre al hijo es necesario usar 'data bining'

### Events

Hijo 
De esta forma el hijo se comunica con el padre
this.dispatchEvent(
    new CustomEvent(
        'event-name',{
            bubble: true,
            composed: false
            data
        }
    )
);

Padre

<wc-1 on-event-name = "myFunct"> </wc-1>

De esta manera el padre escucha al hijo


---------------------------------------------
Ahora, el padre le comunica al hijo

<wc-2 'atributo' data="[[data]]"></wc-2>

[[]] one way data binding
{{}} two way data binding

### HTML imports

my-component.html
<dom-bind>
<style></style>
HTML
</dom-bind>
<script></script>

en el index.html

<link rel="import" href="../path/my-component.html">

De esta manera ya podemos llamarlo con esta misma etiqueta en el html

<my-component>
    Aquí puede estar una aplicación completa
</my-component>

### DOM (Data Object Model) Ligth DOM

<body>
<h2>Holi</h2>
<div>
<input name="holi">
</div>
</body>


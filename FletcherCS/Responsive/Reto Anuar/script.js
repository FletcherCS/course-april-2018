(function () {
    'use strict';

    const bottomDivSearch = document.querySelector('.bottom__div__search');

    const bottomDivDownload = document.querySelector('.bottom__div__download');

    const bottomDivEnjoy = document.querySelector('.bottom__div__enjoy');

    const div = document.querySelector('.div');

    const modal = document.getElementById('idModal');

    const button = document.getElementById('tryButton');

    const close = document.getElementById('close');

    bottomDivSearch.addEventListener('click', () =>{
        div.classList.add('div__invisible');
        document.getElementById('description').innerHTML = `<p>Encuentra tus libros favoritos en el catálogo de beek con <span>más de 200,000</span> audiolibros disponibles.</p>`;
    });

    bottomDivDownload.addEventListener('click', () =>{
        div.classList.add('div__invisible');        
        document.getElementById('description').innerHTML = `<p><span>Lleva contigo</span> siempre tus libros favoritos y no pares de escuchar.</p>`
    });

    bottomDivEnjoy.addEventListener('click', () =>{
        div.classList.add('div__invisible');        
        document.getElementById('description').innerHTML = `<p>Disfruta de tus libros por<span> $299 al mes</span> en AudioBeeks.</p>`
    });

    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    close.addEventListener('click', () =>{
        modal.style.display = 'none';
    });


})();
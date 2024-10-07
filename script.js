// Capturando os elementos
const titulo = document.getElementById('titulo');
const ul = document.querySelector('ul');
const a = document.querySelector('a');
const ol = document.getElementById('lista-ordenada');

// Adicionando texto ao <h1> e ao <a> usando innerText
titulo.innerText = 'Bem-vindo ao Projeto DOM!';
a.innerText = 'Acesse nosso site';

// Adicionando itens à lista não ordenada (<ul>) usando innerHTML
ul.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens com links à lista ordenada (<ol>) usando innerHTML
ol.innerHTML = `
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><a href="https://youtube.com" target="_blank">YouTube</a></li>
    <li><a href="https://github.com" target="_blank">GitHub</a></li>
`;

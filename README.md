Matheus HRF RM556517
Guilherme Ulacco RM558418
Henrique Bergl RM555351
Ricardo Nunes Rissi RM557752

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Event Listener DOMContentLoaded: Este listener garante que o código JavaScript seja executado apenas após o documento HTML ter sido completamente carregado.

Índice do Slide e Elementos do Slide:
slideIndex (uma variável) acompanha o slide atualmente exibido (iniciando em 0).
slides (uma constante) usa document.querySelectorAll('.slide') para selecionar todos os elementos com a classe slide. Isso cria uma NodeList dos slides.

Função showSlide:
Esta função recebe um slideIndex como entrada e lida com a exibição do slide correto.
Ela itera pela NodeList slides usando forEach.
Dentro do loop:
slide.style.display é definido como:
'block' se o índice do slide atual (i) corresponder ao slideIndex fornecido. Isso mostra o slide correspondente.
'none' caso contrário, ocultando outros slides.
Funções Globais para Navegação (nextSlide e previousSlide):

Estas funções são tornadas acessíveis globalmente (através de window) para interações potenciais com botões.
nextSlide:
Incrementa slideIndex em 1, lidando com estouro usando o operador módulo (%) para mantê-lo dentro do intervalo slides.length.
Chama showSlide com o slideIndex atualizado para exibir o próximo slide.
previousSlide:
Decrementa slideIndex em 1, considerando o slides.length para underflow.
Chama showSlide com o slideIndex atualizado para exibir o slide anterior.
Event Listeners de Botões:

document.getElementById('sobrebotao').addEventListener('click', ...):
Seleciona o botão com o ID sobrebotao usando getElementById.
Anexa um Event Listener de clique a ele.
Quando clicado, ele exibe um alerta com informações sobre a dedicação da Mahindra à inovação.
Manipulação do Envio do Formulário:

document.getElementById('contatoform').addEventListener('submit', ...):
Seleciona o elemento do formulário com o ID contatoform usando getElementById.
Anexa um Event Listener de submit a ele.
Dentro da função do Event Listener:
event.preventDefault() evita o comportamento padrão de submit do formulário, permitindo que você o manipule dentro do código.
const name = document.getElementById('name').value;: Extrai o valor do campo de entrada de nome.
const email = document.getElementById('email').value;: Extrai o valor do campo de entrada de email.
Verificação condicional:
Se name e email ambos tiverem valores, um alerta confirma o envio bem-sucedido da solicitação de contato.
Caso contrário, um alerta solicita ao usuário que preencha todos os campos obrigatórios.

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;

    // Cria um novo item na fila
    const li = document.createElement('li');
    li.textContent = `${nome} - ${servico}`;

    // Calcula o tempo estimado (pode ser ajustado conforme necessário)
    const tempoEstimado = document.createElement('span');
    let tempo = 0;
    if (servico === 'corte') {
        tempo = 30;
    } else if (servico === 'sobrancelha') {
        tempo = 15;
    } else if (servico === 'barba') {
        tempo = 20;
    }
    tempoEstimado.textContent = ` - ${tempo} min`;
    li.appendChild(tempoEstimado);

    // Adiciona o item à fila
    document.getElementById('fila').appendChild(li);

    // Limpa o formulário
    document.getElementById('cadastroForm').reset();
});

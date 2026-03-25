function calcularTriagem() {
    const urgenciaExtrema = document.getElementById('urgencia-extrema').value;
    const nivelDor = parseInt(document.getElementById('nivel-dor').value);
    const febre = document.getElementById('febre').value;

    const divResultado = document.getElementById('resultado-triagem');
    const titulo = document.getElementById('titulo-resultado');
    const mensagem = document.getElementById('mensagem-resultado');

    divResultado.className = "";
    divResultado.classList.remove('hidden');

    if (urgenciaExtrema === "sim") {
        titulo.innerText = "🔴 EMERGÊNCIA (Vermelho)";
        mensagem.innerText = "Procure o pronto-socorro imediatamente! Risco imediato.";
        divResultado.classList.add('urgencia-vermelha');
    } 
    else if (nivelDor >= 8 || febre === "sim") {
        titulo.innerText = "🟡 URGENTE (Amarelo)";
        mensagem.innerText = "Sintomas significativos. Recomendamos buscar atendimento em uma UPA em breve.";
        divResultado.classList.add('urgencia-amarela');
    } 
    else {
        titulo.innerText = "🟢 POUCO URGENTE (Verde)";
        mensagem.innerText = "Sintomas leves. Você pode agendar uma consulta no seu Posto de Saúde de referência.";
        divResultado.classList.add('urgencia-verde');
    }
}
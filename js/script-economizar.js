function calcular() {
    const atual = Number(document.getElementById("banho-atual").value);
    const reducao = Number(document.getElementById("banho-reducao").value);
    const resultado = document.getElementById("resultado");

    if (atual <= 0 || reducao <= 0) {
        resultado.innerHTML = "<p>Por favor, informe valores maiores que zero.</p>";
        resultado.style.display = "block";
        return;
    }

    if (reducao >= atual) {
        resultado.innerHTML = "<p>A redução não pode ser maior ou igual ao tempo atual do banho.</p>";
        resultado.style.display = "block";
        return;
    }

    const litrosPorMinuto = 12;
    const consumoAtual = atual * litrosPorMinuto;
    const consumoNovo = (atual - reducao) * litrosPorMinuto;
    const economia = reducao * litrosPorMinuto;

    resultado.innerHTML = `
        <p>🚿 Consumo atual: <strong>${consumoAtual} litros</strong></p>
        <p>✅ Novo consumo: <strong>${consumoNovo} litros</strong></p>
        <p>💧 Economia por banho: <strong>${economia} litros</strong></p>
        <p>📅 Economia mensal: <strong>${economia * 30} litros</strong></p>
        <p>📆 Economia anual: <strong>${economia * 365} litros</strong></p>
    `;
    resultado.style.display = "block";
}

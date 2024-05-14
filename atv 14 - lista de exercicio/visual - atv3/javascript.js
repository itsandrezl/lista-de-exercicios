function calcularDesconto() {
    let salario = parseFloat(document.getElementById("salario").value);

    if (isNaN(salario)) {
        alert("Por favor, insira um valor válido para o salário.");
        return;
    }

    let taxaDesconto, valorDesconto;

    if (salario <= 1000) {
        taxaDesconto = 0.08;
    } else if (salario <= 1500) {
        taxaDesconto = 0.085;
    } else {
        taxaDesconto = 0.09;
    }

    valorDesconto = salario * taxaDesconto;
    let salarioComDesconto = salario - valorDesconto;

    let resultado = `
        <p>Salário em consideração: R$ ${salario.toFixed(2)}</p>
        <p>Taxa de desconto: ${taxaDesconto * 100}%</p>
        <p>Valor do desconto: R$ ${valorDesconto.toFixed(2)}</p>
        <p>Salário líquido: R$ ${salarioComDesconto.toFixed(2)}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}
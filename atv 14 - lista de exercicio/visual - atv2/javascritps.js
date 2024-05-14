function calcularDesconto() {
    let nome = document.getElementById("nome").value;
    let salario = parseFloat(document.getElementById("salario").value);

    if (isNaN(salario)) {
        alert("Por favor, insira um valor válido para o salário.");
        return;
    }

    let taxaINSS = 0.08;
    let inss = salario * taxaINSS;
    let salarioLiquido = salario - inss;

    let resultado = `
        <p>Nome do Funcionário: ${nome}</p>
        <p>Salário bruto: R$ ${salario.toFixed(2)}</p>
        <p>Valor do INSS: R$ ${inss.toFixed(2)}</p>
        <p>Salário líquido: R$ ${salarioLiquido.toFixed(2)}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}
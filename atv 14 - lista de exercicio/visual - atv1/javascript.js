// Função para calcular e exibir a diferença entre as duas variáveis
function calcularDiferenca() {
    let var1 = parseInt(document.getElementById("var1").value);
    let var2 = parseInt(document.getElementById("var2").value);
    let diff = var1 - var2;
    document.getElementById("resultado").innerText = "Diferença entre as duas variáveis: " + diff;
}

// Função para calcular e exibir a soma do dobro da primeira variável mais o triplo da segunda variável
function calcularSoma() {
    let var1 = parseInt(document.getElementById("var1").value);
    let var2 = parseInt(document.getElementById("var2").value);
    let sum = (2 * var1) + (3 * var2);
    document.getElementById("resultado").innerText = "O dobro da primeira variável mais o triplo da segunda: " + sum;
}

// Função para calcular e exibir o produto das duas variáveis
function calcularProduto() {
    let var1 = parseInt(document.getElementById("var1").value);
    let var2 = parseInt(document.getElementById("var2").value);
    let product = var1 * var2;
    document.getElementById("resultado").innerText = "Multiplicação das duas variáveis: " + product;
}

// Função para ordenar e exibir as variáveis do maior para o menor
function ordenarVariaveis() {
    let var1 = parseInt(document.getElementById("var1").value);
    let var2 = parseInt(document.getElementById("var2").value);
    let sortedValues = [var1, var2].sort((x, y) => y - x);
    document.getElementById("resultado").innerText = "Variáveis do maior para o menor: " + sortedValues.join(", ");
}
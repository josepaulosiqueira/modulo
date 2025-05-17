function somarLinhaB() {
    const b1 = parseFloat(document.getElementById('b1').value) || 0;
    const b2 = parseFloat(document.getElementById('b2').value) || 0;
    const b3 = parseFloat(document.getElementById('b3').value) || 0;
    const b4 = parseFloat(document.getElementById('b4').value) || 0;
    const b5 = parseFloat(document.getElementById('b5').value) || 0;




    const resultadoB = b1 + b2 + b3 + b4 + b5;

    document.getElementById('resultadoB').innerText = resultadoB;

    return resultadoB;
}

function somarLinhaC() {

    const c1 = (document.getElementById('c1').value)
    const resultadoC = c1;
    document.getElementById('resultadoC').innerText = resultadoC;

    return resultadoC;
}


function somarLinhaD() {
    const d1 = parseFloat(document.getElementById('d1').value) || 0;

    const d5 = parseFloat(document.getElementById('d5').value) || 0;

    const resultadoD = (d1 - d5);
    const resultadoFormatado = resultadoD.toFixed(2)



    document.getElementById('resultadoD').innerText = resultadoFormatado;

    return resultadoD;
}

function somarLinhaE() {
    const e1 = parseFloat(document.getElementById('e1').value) || 0;

    const e5 = parseFloat(document.getElementById('e5').value) || 0;


    const resultadoE = (e1 - e5);
    const resultadoFormatado = resultadoE.toFixed(2)

    document.getElementById('resultadoE').innerText = resultadoFormatado;

    return resultadoE;
}

function somarLinhaF() {
    const f1 = parseFloat(document.getElementById('f1').value) || 0;
    const f2 = parseFloat(document.getElementById('f2').value) || 0;
    const f3 = parseFloat(document.getElementById('f3').value) || 0;
    const f4 = parseFloat(document.getElementById('f4').value) || 0;
    const f5 = parseFloat(document.getElementById('f5').value) || 0;



    const resultadoF = f1 + f2 + f3 + f4 + f5;

    document.getElementById('resultadoF').innerText = resultadoF;

    return resultadoF;
}

function somarLinhaG() {

    const g1 = (document.getElementById('g1').value)
    const resultadoG = g1;
    document.getElementById('resultadoG').innerText = resultadoG;

    return resultadoG;
}

function somarLinhaH() {

    const h5 = (document.getElementById('h5').value)
    const resultadoH = h5;
    document.getElementById('resultadoH').innerText = resultadoH;

    return resultadoH;
}


function somarLinhaI() {

    const i1 = parseFloat((document.getElementById('d1').value || '0').replace('%', '')) || 0;

    const i5 = parseFloat((document.getElementById('d5').value || '0').replace('%', '')) || 0;

    const resultadoI = (i1 - i5) / i1;
    const resultadoFormatado = resultadoI.toFixed(2) + '%';

    document.getElementById('resultadoI').innerText = resultadoFormatado;
    return resultadoI;
}







function somarLinhaJ() {
    const j1 = parseFloat((document.getElementById('e1').value || '0').replace('%', '')) || 0;

    const j5 = parseFloat((document.getElementById('e5').value || '0').replace('%', '')) || 0;


    const resultadoJ = (j1 - j5) / j1;
    const resultadoFormatado = resultadoJ.toFixed(2) + '%';

    document.getElementById('resultadoJ').innerText = resultadoFormatado;

    return resultadoJ;
}

function calcularD1menosD2() {
    const d1 = parseFloat(document.getElementById('d1').value).toFixed(2) || 0;
    const d2 = parseFloat(document.getElementById('d2').value).toFixed(2) || 0;

    const resultado = d1 - d2;
    const porcentagem = d1 != 0 ? ((resultado / d1) * 100).toFixed(2) : 0;

    document.getElementById('i2').value = porcentagem + '%';
    return resultado;
}

function calcularD2menosD3() {
    const d2 = parseFloat(document.getElementById('d2').value) || 0;
    const d3 = parseFloat(document.getElementById('d3').value) || 0;

    const resultado = d2 - d3;
    const porcentagem = d2 !== 0 ? (resultado / d2) * 100 : 0;

    document.getElementById('i3').value = porcentagem.toFixed(2) + '%';
    return resultado;
}

function calcularD3menosD4() {
    const d3 = parseFloat(document.getElementById('d3').value) || 0;
    const d4 = parseFloat(document.getElementById('d4').value) || 0;

    const resultado = d3 - d4;
    const porcentagem = d3 !== 0 ? (resultado / d3) * 100 : 0;

    document.getElementById('i4').value = porcentagem.toFixed(2) + '%';
    return resultado;
}

function calcularD4menosD5() {
    const d4 = parseFloat(document.getElementById('d4').value) || 0;
    const d5 = parseFloat(document.getElementById('d5').value) || 0;

    const resultado = d4 - d5;
    const porcentagem = d4 !== 0 ? (resultado / d4) * 100 : 0;

    document.getElementById('i5').value = porcentagem.toFixed(2) + '%';
    return resultado;
}




function calcularE1menosE2() {
    const e1 = parseFloat(document.getElementById('e1').value) || 0;
    const e2 = parseFloat(document.getElementById('e2').value) || 0;

    const resultado = e1 - e2;
    const porcentagem = e1 !== 0 ? (resultado / e1) * 100 : 0;

    document.getElementById('j2').value = porcentagem.toFixed(2) + '%';
    return resultado;
}

function calcularE2menosE3() {
    const e2 = parseFloat(document.getElementById('e2').value) || 0;
    const e3 = parseFloat(document.getElementById('e3').value) || 0;

    const resultado = e2 - e3;
    const porcentagem = e2 !== 0 ? (resultado / e2) * 100 : 0;

    document.getElementById('j3').value = porcentagem.toFixed(2) + '%';
    return resultado;
}

function calcularE3menosE4() {
    const e3 = parseFloat(document.getElementById('e3').value) || 0;
    const e4 = parseFloat(document.getElementById('e4').value) || 0;

    const resultado = e3 - e4;
    const porcentagem = e3 !== 0 ? (resultado / e3) * 100 : 0;

    document.getElementById('j4').value = porcentagem.toFixed(2) + '%';
    return resultado;
}

function calcularE4menosE5() {
    const e4 = parseFloat(document.getElementById('e4').value) || 0;
    const e5 = parseFloat(document.getElementById('e5').value) || 0;

    const resultado = e4 - e5;
    const porcentagem = e4 !== 0 ? (resultado / e4) * 100 : 0;

    document.getElementById('j5').value = porcentagem.toFixed(2) + '%';
    return resultado;
}



function calcularResultados() {
    somarLinhaB();
    somarLinhaC();
    somarLinhaD();
    somarLinhaE();
    somarLinhaF();
    somarLinhaG();
    somarLinhaH();

    calcularD1menosD2();
    calcularD2menosD3();
    calcularD3menosD4();
    calcularD4menosD5();
    calcularE1menosE2();
    calcularE2menosE3();
    calcularE3menosE4();
    calcularE4menosE5();

    somarLinhaI();
    somarLinhaJ();

}

calcularResultados();

function addDados(result, resultadoI) {
    const numero = parseFloat(resultadoI.replace('%', ''));

    const acima = 0.10;
    const mensagemElement = document.getElementById("message");
    const mensagem = numero <= acima



        ?
        `A ${result} apresentou a redução mínima nas dimensões ${resultadoI}, mas nada que comprometa a sua integridade.` :
        `A ${result} apresentou a redução acima do esperado ${resultadoI}, comprometendo a sua integridade.`;

    document.getElementById("message").textContent = mensagem;

    mensagemElement.style.color = numero > acima ? "red" : "color: #4C6173";
};


document.getElementById("sun").addEventListener('click', () => {

    const item = document.getElementById("a1").value;
    const resultadoI = document.getElementById("resultadoI").textContent;
    addDados(item, resultadoI);
});


function addDados2(resultadoB) {
    document.getElementById("message2").textContent = `A quantidade de enxoval para teste: ${resultadoB}`;
}

document.getElementById("sun").addEventListener('click', () => {
    const resultadoB = document.getElementById("resultadoB").textContent; // Corrigido para usar textContent
    addDados2(resultadoB);
});

function addDados3(resultadoC) {
    document.getElementById("message3").textContent = ` Cor: ${resultadoC}`;
}

document.getElementById("sun").addEventListener('click', () => {
    const resultadoC = document.getElementById("resultadoC").textContent;
    addDados3(resultadoC);
});

function addDados4(resultadoD, termino) {
    document.getElementById("message4").textContent = `O comprimento inicial:${resultadoD}-término: ${termino}`;
}

document.getElementById("sun").addEventListener('click', () => {
    const resultadoD = document.getElementById("d1").value;
    const termino = document.getElementById("d5").value;
    addDados4(resultadoD, termino);

});

function addDados5(resultadoE, termino2) {
    document.getElementById("message5").textContent = `A largura inicial: ${resultadoE}-término ${termino2}`;
}

document.getElementById("sun").addEventListener('click', () => {
    const resultadoE = document.getElementById("e1").value;
    const termino2 = document.getElementById("e5").value;
    addDados5(resultadoE, termino2);
});

function addDados6(resultadoF) {
    document.getElementById("message6").textContent = `A quantidade de lavagem por item: ${resultadoF}`;
}

document.getElementById("sun").addEventListener('click', () => {
    const resultadoF = document.getElementById("resultadoF").textContent;
    addDados6(resultadoF);
});

function addDados7(resultadoG, terminoLav) {
    document.getElementById("message7").textContent = `Início da Lavagem: ${resultadoG}-ultima lavagem ${terminoLav}`;
}

document.getElementById("sun").addEventListener('click', () => {
    const resultadoG = document.getElementById("resultadoG").textContent;
    const terminoLav = document.getElementById("g5").value;
    addDados7(resultadoG, terminoLav);
});

function addDados8(resultadoH) {
    // Remove o símbolo de porcentagem e converte para número
    const cond = (resultadoH);
    const mensagemElement = document.getElementById("message8");
    const mensagem = cond === "Dentro do esperado" ?
        `Despigmentação: ${resultadoH}` :
        `Despigmentação: ${resultadoH} está fora dos parâmetros toleráveis para este tipo de enxoval.`;

    document.getElementById("message8").textContent = mensagem;

    mensagemElement.style.color = resultadoH !== "Dentro do esperado" ? "red" : "color: #4C6173";

};
document.getElementById("sun").addEventListener('click', () => {
    const resultadoH = document.getElementById("resultadoH").textContent;
    addDados8(resultadoH);
});

function addDados9(resultadoI) {
    // Remove o símbolo de porcentagem e converte para número
    const numero = parseFloat(resultadoI.replace('%', ''));
    const mensagemElement = document.getElementById("message9");
    const acima = 0.10;

    const mensagem = numero <= acima ?
        `A redução nas dimensões (Comprimento): ${resultadoI} está dentro dos parâmetros toleráveis para este tipo de enxoval, sendo uma alteração natural do processo de lavagem` :
        `A redução nas dimensões (Comprimento): ${resultadoI} está fora dos parâmetros toleráveis para este tipo de enxoval.`;

    document.getElementById("message9").textContent = mensagem;

    mensagemElement.style.color = numero > acima ? "red" : "color: #4C6173";
};
document.getElementById("sun").addEventListener('click', () => {
    const resultadoI = document.getElementById("resultadoI").textContent;
    addDados9(resultadoI);
});


function addDados10(resultadoJ) {

    const numero = parseFloat(resultadoJ.replace('%', ''));
    const mensagemElement = document.getElementById("message10");
    const acima = 0.10;

    const mensagem = numero <= acima ?
        `A redução nas dimensões (largura): ${resultadoJ} está dentro dos parâmetros toleráveis para este tipo de enxoval, sendo uma alteração natural do processo de lavagem` :
        `A redução nas dimensões (largura): ${resultadoJ} está acima dos parâmetros toleráveis para este tipo de enxoval`;

    document.getElementById("message10").textContent = mensagem;
    mensagemElement.style.color = numero > acima ? "red" : "color: #4C6173";

};


document.getElementById("sun").addEventListener('click', () => {
    const resultadoJ = document.getElementById("resultadoJ").textContent;
    addDados10(resultadoJ);
});




document.getElementById("PDF").addEventListener("click", function (event) {
    event.preventDefault(); // Previne comportamento padrão do botão
    generatePDF(); // Chama a função de gerar o PDF
});

function generatePDF() {
    // Captura o contêiner principal
    const cliente = document.getElementById("cli").value;
    const conteudoPDF = document.body; // Troque para `document.getElementById("seuID")` se necessário
    const pageWidth = 11.7; // Largura em polegadas
    const pageHeight = 8.3; // Altura em polegadas
    //Configura o html2pdf
    const opcoes = {
        margin: 0.2, // Ajuste da margem
        filename: `Laudo_de_teste_${cliente}.pdf`,
        image: {
            type: 'jpeg',
            quality: 0.99
        },
        html2canvas: {
            scale: 2,
            useCORS: true
        }, // Renderização de alta qualidade
        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }
    };


    //Adiciona classe para ocultar botões antes de gerar o PDF
    const botoes = document.querySelectorAll("button");
    botoes.forEach(botao => botao.classList.add("hidden-during-pdf"));

    // Gera e salva o PDF
    html2pdf()
        .set(opcoes)
        .from(conteudoPDF)
        .save()
        .then(() => {
            // Remove a classe para exibir os botões novamente
            botoes.forEach(botao => botao.classList.remove("hidden-during-pdf"));
        });
}
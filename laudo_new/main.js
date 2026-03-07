function calcularLaudo() {

  const d1 = parseFloat(document.getElementById("d1").value) || 0
  const d5 = parseFloat(document.getElementById("d5").value) || 0

  const e1 = parseFloat(document.getElementById("e1").value) || 0
  const e5 = parseFloat(document.getElementById("e5").value) || 0

  // redução comprimento
  const reducaoComprimento = d1 !== 0 ? ((d1 - d5) / d1) * 100 : 0

  document.getElementById("resultadoI").innerText =
    reducaoComprimento.toFixed(2) + "%"

  // redução largura
  const reducaoLargura = e1 !== 0 ? ((e1 - e5) / e1) * 100 : 0

  document.getElementById("resultadoJ").innerText =
    reducaoLargura.toFixed(2) + "%"

  // conclusão
  const item = document.getElementById("tipo").value || "item"
  const limite = 5

  let mensagem
  // 🧠 Detecta automaticamente se usa "A" ou "O"
  const feminino = ["toalha", "fronha", "camisola"];
  const artigo = feminino.includes(item.toLowerCase()) ? "A" : "O";

  if (reducaoComprimento > limite || reducaoLargura > limite) {
    mensagem = `${artigo} ${item} apresentou redução acima do esperado (ABNT NBR 13370)`
  } else {
    mensagem = `${artigo} ${item} apresentou redução dentro do esperado (ABNT NBR 13370)`
  }

  document.getElementById("message").innerText = mensagem
}

document.getElementById("PDF").addEventListener("click", function (event) {
  event.preventDefault(); // Previne comportamento padrão do botão
  generatePDF(); // Chama a função de gerar o PDF
});


function generatePDF() {

  const cliente = document.getElementById("cli").value || "cliente"
  const elemento = document.querySelector(".laudo")

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
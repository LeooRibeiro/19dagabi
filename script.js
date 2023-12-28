// Função para mostrar o conteúdo da tab selecionada e ocultar os outros
function openTab(tabName) {
var i, tabContent;
tabContent = document.getElementsByClassName("tab-content");
for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
}
document.getElementById(tabName).style.display = "block";
}

// Adiciona um ouvinte de rolagem para mostrar a seção de rolagem quando necessário
window.addEventListener("scroll", function() {
var scrollSection = document.getElementById("scrollSection");
if (window.scrollY > 200) { // Ajuste esse valor conforme necessário
    scrollSection.style.display = "block";
} else {
    scrollSection.style.display = "none";
}
});

window.addEventListener("scroll", function() {
  var sectionFinal = document.getElementById("finalSection");
  if (window.scrollY > 350) { // Ajuste esse valor conforme necessário
      sectionFinal.style.display = "block";
  } else {
      sectionFinal.style.display = "none";
  }
  });

window.addEventListener("scroll", function() {
  var cardContainer = document.getElementById("cardContainer");
  if (window.scrollY > 450) { // Ajuste esse valor conforme necessário
      cardContainer.style.display = "block";
  } else {
      cardContainer.style.display = "none";
  }
  });

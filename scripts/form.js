// Array de produtos com id, nome e avaliação média
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  // Função para popular o dropdown de produtos na página do formulário
  function populateProductOptions() {
    const productSelect = document.getElementById("productName");
    if (productSelect) {
      // Adiciona uma opção de placeholder
      const placeholderOption = document.createElement("option");
      placeholderOption.value = "";
      placeholderOption.textContent = "Select a Product ...";
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      productSelect.appendChild(placeholderOption);
  
      // Adiciona as opções dos produtos
      products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} - ${product.averagerating} ★`; // Exibe o nome e avaliação
        productSelect.appendChild(option);
      });
    }
  }
  
  // Função para atualizar e exibir a contagem de reviews na página review.html
  function updateReviewCounter() {
    const reviewCountElement = document.getElementById("reviewCount");
  
    // Verifica se estamos na página review.html verificando se o elemento existe
    if (reviewCountElement) {
      // Obtém a contagem atual de reviews do localStorage ou inicia em 0
      let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
  
      // Incrementa a contagem de reviews em 1
      reviewCount++;
  
      // Atualiza o localStorage com o novo valor
      localStorage.setItem('reviewCount', reviewCount);
  
      // Exibe a contagem atualizada na página
      reviewCountElement.innerText = `Total Reviews Submitted: ${reviewCount}`;
    }
  }
  
  // Função para resetar a contagem de reviews
  function resetReviewCounter() {
    // Define o contador de reviews para 0 no localStorage
    localStorage.setItem('reviewCount', 0);
  
    // Atualiza a exibição na página
    const reviewCountElement = document.getElementById("reviewCount");
    if (reviewCountElement) {
      reviewCountElement.innerText = "Total Reviews Submitted: 0";
    }
  }
  
  // Inicializa as funções com base na página
  document.addEventListener("DOMContentLoaded", () => {
    populateProductOptions(); // Popula o dropdown de produtos na página do formulário
    updateReviewCounter();    // Atualiza o contador de reviews na página review.html
  
    // Adiciona o evento de clique ao botão de reset
    const resetButton = document.getElementById("resetReviewCount");
    if (resetButton) {
      resetButton.addEventListener("click", resetReviewCounter);
    }
  });

  function submitReview() {
    // Optionally, perform any additional actions needed before the redirection
  
    // Redirect to review.html
    window.location.href = "https://rafaelfs1.github.io/wdd131/review.html";
  }
  
  
// Update the year and last modified date
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;


// Função para calcular a sensação térmica
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

// Exibe a sensação térmica
const temperature = 22;  // Exemplo: temperatura estática
const windSpeed = 10;    // Exemplo: velocidade do vento estática
document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed);

// Atualiza a última data de modificação do documento
document.getElementById("lastModified").textContent = document.lastModified;

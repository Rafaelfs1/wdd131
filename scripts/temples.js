// insert the current year and de copyright symbol
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `&copy ${today.getFullYear()}</span>`;

// insert the date from the last modification was done
const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = lastModified;


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

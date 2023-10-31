// script.js
window.addEventListener("load", function(){
    // Selecciona el botón de últimas reseñas al cargar la página.
    const buttonLastReviews = document.getElementById("last-reviews");
    buttonLastReviews.click();
})

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const resultsContainer = document.getElementById("main-content");

    const productos = [
        "Producto 1",
        "Producto 2",
        "Producto 3",
    ];

    function displayResults(query) {
        resultsContainer.innerHTML = ""; // Limpia los resultados anteriores
        const filteredProducts = productos.filter(producto => producto.toLowerCase().includes(query.toLowerCase()));

        if (filteredProducts.length === 0) {
            resultsContainer.innerHTML = "No se encontraron resultados.";
        } else {
            filteredProducts.forEach(producto => {
                const resultItem = document.createElement("p");
                resultItem.textContent = producto;
                resultsContainer.appendChild(resultItem);
            });
        }
    }

    searchButton.addEventListener("click", function() {
        const query = searchInput.value;
        displayResults(query);
    });

    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const query = searchInput.value;
            displayResults(query);
        }
    });
});


function openModal() {
    document.getElementById("info-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("info-modal").style.display = "none";
}

function cleanSearch() {
    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.getElementById("main-content");

    if(searchInput.value.length > 0) {
        searchInput.value = "";
        resultsContainer.innerHTML = originalContent;
        console.log("suka");
    }
}

function selectTab(button) {
    var buttons = document.querySelectorAll("#navbar-html button");
    buttons.forEach(function (btn) {
        btn.classList.remove("selected");
        btn.querySelector(".text").style.display = "none";
        btn.querySelector(".icon").style.display = "inline";
    });
    console.log(button);
    button.classList.add("selected");
    button.querySelector(".text").style.display = "inline";
    button.querySelector(".icon").style.display = "display";
}

// Cambiar el contenido del index según la categoría
const LAST_REVIEWS = document.getElementById("last-reviews-container");
const PRO_REVIEWS = document.getElementById("pro-reviews-container");
const VERIFIED_REVIEWS = document.getElementById("verified-reviews-container");
function lastReviews() {
    LAST_REVIEWS.style.display = "block";
    PRO_REVIEWS.style.display = "none";
    VERIFIED_REVIEWS.style.display = "none";
    window.scrollTo({
        top: 0
    });
}

function proReviews() {
    LAST_REVIEWS.style.display = "none";
    PRO_REVIEWS.style.display = "block";
    VERIFIED_REVIEWS.style.display = "none";
    window.scrollTo({
        top: 0
    });
}

function verifiedReviews() {
    LAST_REVIEWS.style.display = "none";
    PRO_REVIEWS.style.display = "none";
    VERIFIED_REVIEWS.style.display = "block";
    window.scrollTo({
        top: 0
    });
}

function registrate() {
    let comeFromRegister = true;
    localStorage.setItem("comefromregister", JSON.stringify(comeFromRegister));
    let url = "html/login.html";
    window.location.href = url;
}

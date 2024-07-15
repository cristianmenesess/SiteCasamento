document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const linksContainer = document.querySelector('.links-container');

    toggleBtn.addEventListener('click', () => {
        linksContainer.classList.toggle('show');
    });

    // Fechar o menu ao clicar em um link
    const links = document.querySelectorAll('.link a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            linksContainer.classList.remove('show');
        });
    });
});

// Adiciona um evento de clique ao botão
document.getElementById("btn-presente").onclick = function() {
    // Define a URL para onde o botão deve redirecionar
    window.location.href = "https://lista-de-presentes-heloisa-e-vianez.netlify.app/";
};

function initMap() {
    var location = { lat: -18.858778, lng: -50.124062 };
    var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Adicione a função de inicialização ao carregamento da página
window.onload = function() {
    initMap();
};

function encurtarUrl() {
    let url = document.getElementById("input-url").value;
    if (!url) {
        alert("É preciso inserir uma URL para encurtar");
        return;
    }

    fetch("https://redirect-68qu.onrender.com/api/urls/shorten", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ originalUrl: url })
    })
    .then(response => response.json())
    .then(data => {
        if (data.shortUrl) {
            let input = document.getElementById("input-url");
            // Mostra a URL encurtada completa
            input.value = window.location.origin + "/api/urls/" + data.shortUrl;
        } else {
            alert("Erro ao encurtar a URL");
        }
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao encurtar a URL");
    });
}

function copiar() {
    var copyText = document.getElementById("input-url");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("URL copiada: " + copyText.value);
}
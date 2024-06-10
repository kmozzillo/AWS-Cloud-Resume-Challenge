const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://ab4b44z7oojawmyv57sdltgxd40piwdq.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();
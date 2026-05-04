async function getGreeting() {
    const name = document.getElementById("nameInput").value;

    const response = await fetch(`https://YOUR_WORKER_URL?name=${name}`);
    const data = await response.text();

    document.getElementById("result").innerText = data;
}

/*async function getGreeting() {
    const name = document.getElementById("nameInput").value;

    const response = await fetch(`https://YOUR_WORKER_URL?name=${name}`);
    const data = await response.text();

    document.getElementById("result").innerText = data;
}*/
async function getMessage() {
  const res = await fetch("https://black-moon-9cbf.kisaf572.workers.dev");
  const data = await res.json();

  document.getElementById("msg").innerText = data.message;
}

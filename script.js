document.getElementById("regForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
        return;
    }

    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, password })
    });

    const data = await response.json();

    if (response.ok) {
        message.style.color = "green";
        message.textContent = data.message + " Redirecting...";
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    } else {
        message.style.color = "red";
        message.textContent = data.message;
    }
});

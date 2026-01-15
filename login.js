document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    let phone = document.querySelector("input[type='text']").value;
    let password = document.querySelector("input[type='password']").value;

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Login Successful!");
        // redirect to dashboard
        // window.location.href = "dashboard.html";
    } else {
        alert(data.message);
    }
});

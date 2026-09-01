// ======================================
// No.sメ — LOGIN SYSTEM
// ======================================


// 👁 Show / Hide Password

function togglePassword() {

    const password =
        document.getElementById("password");

    const button =
        document.querySelector(".password-box button");


    if (password.type === "password") {

        password.type = "text";

        button.textContent = "🙈";

    } else {

        password.type = "password";

        button.textContent = "👁";

    }

}


// 🔐 Login

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("loginMessage");


    // Temporary demo credentials
    // Change these later.

    const correctUsername = "SAHIL";

    const correctPassword = "123456";


    if (!username || !password) {

        message.textContent =
            "⚠️ Please enter username and password.";

        message.style.color = "#ffb84d";

        return;
    }


    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        message.textContent =
            "✓ Login successful!";

        message.style.color =
            "#55ffb0";


        setTimeout(() => {

            alert(
                "Welcome to No.sメ!\n\n" +
                "Optimizer Dashboard will be added next."
            );

        }, 500);


    } else {

        message.textContent =
            "✕ Invalid username or password.";

        message.style.color =
            "#ff5c7a";

    }

}

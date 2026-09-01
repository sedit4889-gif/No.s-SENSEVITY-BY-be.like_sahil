// ==========================================
// NO.Sメ OPTIMIZER
// ==========================================

const correctUsername = "SAHIL";
const correctPassword = "123456";


// ==========================================
// PASSWORD TOGGLE
// ==========================================

function togglePassword() {

    const password =
        document.getElementById("password");

    const button =
        document.querySelector(".eye-button");

    if (password.type === "password") {

        password.type = "text";
        button.textContent = "🙈";

    } else {

        password.type = "password";
        button.textContent = "👁";

    }
}


// ==========================================
// LOGIN
// ==========================================

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("loginMessage");


    if (!username || !password) {

        message.textContent =
            "⚠ PLEASE ENTER USERNAME AND PASSWORD";

        message.style.color =
            "#ffb84d";

        return;
    }


    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        message.textContent =
            "✓ ACCESS GRANTED";

        message.style.color =
            "#55ffb0";


        const playerName =
            document.getElementById("playerName");

        if (playerName) {
            playerName.textContent = username;
        }


        setTimeout(() => {

            document.getElementById("loginPage").style.display =
                "none";

            document.getElementById("dashboard").style.display =
                "block";

            window.scrollTo(0, 0);

        }, 400);


    } else {

        message.textContent =
            "✕ ACCESS DENIED — INVALID CREDENTIALS";

        message.style.color =
            "#ff5c7a";

    }

}


// ==========================================
// SENSITIVITY PANEL
// ==========================================

function showSensitivity() {

    const panel =
        document.getElementById("settingsPanel");

    if (!panel) return;

    panel.classList.add("active");

    panel.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// ==========================================
// CLOSE SETTINGS
// ==========================================

function closeSettings() {

    const panel =
        document.getElementById("settingsPanel");

    if (panel) {

        panel.classList.remove("active");

    }

}


// ==========================================
// SLIDER
// ==========================================

function updateSlider(type) {

    const slider =
        document.getElementById(
            type + "Slider"
        );

    const value =
        document.getElementById(
            type + "Value"
        );

    if (slider && value) {

        value.textContent =
            slider.value;

    }

}


// ==========================================
// SAVE SETTINGS
// ==========================================

function saveSettings() {

    const settings = {

        general:
            document.getElementById("generalSlider").value,

        redDot:
            document.getElementById("redDotSlider").value,

        scope2:
            document.getElementById("scope2Slider").value,

        scope4:
            document.getElementById("scope4Slider").value,

        sniper:
            document.getElementById("sniperSlider").value

    };


    localStorage.setItem(
        "nosSettings",
        JSON.stringify(settings)
    );


    const status =
        document.getElementById("saveStatus");


    if (status) {

        status.textContent =
            "✓ SETTINGS SAVED SUCCESSFULLY";

        status.classList.add("success");


        setTimeout(() => {

            status.textContent =
                "SETTINGS READY";

            status.classList.remove("success");

        }, 2500);

    }

}


// ==========================================
// RESET SETTINGS
// ==========================================

function resetSettings() {

    const defaults = {

        general: 95,
        redDot: 90,
        scope2: 85,
        scope4: 80,
        sniper: 70

    };


    Object.keys(defaults).forEach(type => {

        const slider =
            document.getElementById(
                type + "Slider"
            );

        const value =
            document.getElementById(
                type + "Value"
            );


        if (slider && value) {

            slider.value =
                defaults[type];

            value.textContent =
                defaults[type];

        }

    });


    localStorage.removeItem(
        "nosSettings"
    );


    const status =
        document.getElementById("saveStatus");


    if (status) {

        status.textContent =
            "↻ SETTINGS RESET";

        status.classList.add("success");


        setTimeout(() => {

            status.textContent =
                "SETTINGS READY";

            status.classList.remove("success");

        }, 2000);

    }

}


// ==========================================
// LOAD SETTINGS
// ==========================================

function loadSettings() {

    const saved =
        localStorage.getItem("nosSettings");

    if (!saved) return;


    try {

        const settings =
            JSON.parse(saved);


        Object.keys(settings).forEach(type => {

            const slider =
                document.getElementById(
                    type + "Slider"
                );

            const value =
                document.getElementById(
                    type + "Value"
                );


            if (slider && value) {

                slider.value =
                    settings[type];

                value.textContent =
                    settings[type];

            }

        });

    } catch (error) {

        localStorage.removeItem(
            "nosSettings"
        );

    }

}


// ==========================================
// HEADSHOT PRESET
// ==========================================

function showHeadshot() {

    alert(
        "🔥 HEADSHOT PRESET\n\n" +
        "General: 95\n" +
        "Red Dot: 90\n" +
        "2× Scope: 85\n" +
        "4× Scope: 80\n" +
        "Sniper: 70\n\n" +
        "Use these as a starting point."
    );

}


// ==========================================
// NO RECOIL GUIDE
// ==========================================

function showNoRecoil() {

    alert(
        "🎮 NO-RECOIL GUIDE\n\n" +
        "• Use comfortable sensitivity\n" +
        "• Practice controlled movement\n" +
        "• Test settings in training mode\n" +
        "• Avoid extreme sensitivity values\n\n" +
        "No game files are modified."
    );

}


// ==========================================
// ANTI-LAG
// ==========================================

function showAntiLag() {

    alert(
        "⚡ ANTI-LAG GUIDE\n\n" +
        "✓ Close unnecessary background apps\n" +
        "✓ Keep storage free\n" +
        "✓ Use stable internet\n" +
        "✓ Avoid device overheating\n" +
        "✓ Keep the game updated"
    );

}


// ==========================================
// DPI
// ==========================================

function showDPI() {

    const dpi =
        prompt(
            "📱 Enter your current device DPI:"
        );


    if (!dpi) return;


    const number =
        Number(dpi);


    if (
        Number.isNaN(number) ||
        number <= 0
    ) {

        alert(
            "Please enter a valid DPI."
        );

        return;
    }


    alert(
        "📱 DPI RESULT\n\n" +
        "Your DPI: " + number +
        "\n\n" +
        "Use a comfortable value for your device."
    );

}


// ==========================================
// FREE FIRE MAX LAUNCHER
// ==========================================

function openFreeFire() {

    window.location.href =
        "freefiremax://";


    setTimeout(() => {

        alert(
            "If the game did not open, " +
            "launch Free Fire MAX normally."
        );

    }, 1800);

}


// ==========================================
// ENTER KEY
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            document.getElementById("loginPage") &&
            document.getElementById("loginPage").style.display !== "none"
        ) {

            login();

        }

    }
);


// ==========================================
// START
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadSettings();

    }
);

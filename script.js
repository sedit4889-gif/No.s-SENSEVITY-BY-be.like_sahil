// ==========================================
// NO.Sメ — OPTIMIZER PANEL
// ==========================================


// ================================
// DEMO LOGIN
// ================================

const correctUsername = "SAHIL";
const correctPassword = "123456";


// ================================
// SHOW / HIDE PASSWORD
// ================================

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


// ================================
// LOGIN
// ================================

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("loginMessage");


    if (!username || !password) {

        message.textContent =
            "⚠ Please enter username and password.";

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


        document.getElementById("playerName").textContent =
            username;


        setTimeout(() => {

            document.getElementById("loginPage").style.display =
                "none";

            document.getElementById("dashboard").style.display =
                "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 500);


    } else {

        message.textContent =
            "✕ ACCESS DENIED — Invalid credentials.";

        message.style.color =
            "#ff5c7a";

    }

}


// ================================
// SENSITIVITY PANEL
// ================================

function showSensitivity() {

    const panel =
        document.getElementById("settingsPanel");

    panel.classList.add("active");

    panel.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// ================================
// CLOSE SETTINGS
// ================================

function closeSettings() {

    document
        .getElementById("settingsPanel")
        .classList.remove("active");

}


// ================================
// SLIDER UPDATE
// ================================

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


// ================================
// SAVE SETTINGS
// ================================

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


    alert(
        "✓ Settings saved successfully!"
    );

}


// ================================
// LOAD SAVED SETTINGS
// ================================

function loadSettings() {

    const saved =
        localStorage.getItem("nosSettings");

    if (!saved) return;


    const settings =
        JSON.parse(saved);


    const fields = [
        "general",
        "redDot",
        "scope2",
        "scope4",
        "sniper"
    ];


    fields.forEach(type => {

        const slider =
            document.getElementById(
                type + "Slider"
            );

        const value =
            document.getElementById(
                type + "Value"
            );


        if (
            slider &&
            value &&
            settings[type] !== undefined
        ) {

            slider.value =
                settings[type];

            value.textContent =
                settings[type];

        }

    });

}


// ================================
// HEADSHOT PRESET
// ================================

function showHeadshot() {

    alert(
        "🔥 HEADSHOT PRESET\n\n" +
        "General: 95\n" +
        "Red Dot: 90\n" +
        "2× Scope: 85\n" +
        "4× Scope: 80\n" +
        "Sniper: 70\n\n" +
        "Use these as a starting point " +
        "and adjust according to your device."
    );

}


// ================================
// NO RECOIL GUIDE
// ================================

function showNoRecoil() {

    alert(
        "🎮 NO-RECOIL GUIDE\n\n" +
        "• Use a comfortable sensitivity\n" +
        "• Practice controlled drag movement\n" +
        "• Avoid extreme sensitivity values\n" +
        "• Test settings in training mode\n\n" +
        "This guide does not modify game files."
    );

}


// ================================
// ANTI-LAG GUIDE
// ================================

function showAntiLag() {

    alert(
        "⚡ ANTI-LAG GUIDE\n\n" +
        "✓ Close unnecessary background apps\n" +
        "✓ Keep sufficient storage free\n" +
        "✓ Use a stable internet connection\n" +
        "✓ Avoid overheating your device\n" +
        "✓ Keep the game updated\n\n" +
        "No game files are modified."
    );

}


// ================================
// DPI CALCULATOR
// ================================

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
            "Please enter a valid DPI number."
        );

        return;
    }


    const recommended =
        Math.round(
            Math.max(
                360,
                Math.min(
                    600,
                    number
                )
            )
        );


    alert(
        "📱 DPI RESULT\n\n" +
        "Your DPI: " + number + "\n" +
        "Comfort range suggestion: " +
        recommended +
        "\n\n" +
        "This is only a general reference. " +
        "Device settings vary."
    );

}


// ================================
// OPEN FREE FIRE MAX
// ================================

function openFreeFire() {

    /*
       Android browsers may allow an app
       deep-link only when the installed app
       supports that scheme.

       This does NOT modify the game.
    */

    const appLink =
        "freefiremax://";


    window.location.href =
        appLink;


    setTimeout(() => {

        alert(
            "If Free Fire MAX did not open, " +
            "open it normally from your device."
        );

    }, 1800);

}


// ================================
// ENTER KEY LOGIN
// ================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            document
                .getElementById("loginPage")
                .style.display !== "none"
        ) {

            login();

        }

    }
);


// ================================
// STARTUP
// ================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadSettings();

    }
);

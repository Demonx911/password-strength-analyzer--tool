function check() {
    if (p.length >= 8) score++;
    else suggestions.push("Use 8+ chars");

    if (/[A-Z]/.test(p)) score++;
    else suggestions.push("Add uppercase");

    if (/[a-z]/.test(p)) score++;
    else suggestions.push("Add lowercase");

    if (/[0-9]/.test(p)) score++;
    else suggestions.push("Add numbers");

    if (/[!@#$%^&*]/.test(p)) score++;
    else suggestions.push("Add symbols");

    let result = "Weak";
    let color = "red";
    let width = "20%";
    let time = "Instantly crackable";

    if (score >= 4) {
        result = "Strong";
        color = "green";
        width = "100%";
        time = "Years to crack";
    } else if (score >= 3) {
        result = "Medium";
        color = "orange";
        width = "60%";
        time = "Hours to crack";
    }

    document.getElementById("result").innerText = "Strength: " + result;
    document.getElementById("time").innerText = "Estimated crack time: " + time;

    document.getElementById("suggestion").innerText =
        suggestions.length ? "Fix: " + suggestions.join(", ") : "Excellent password";

    let bar = document.getElementById("strengthBar");
    bar.style.width = width;
    bar.style.background = color;
}

function toggle() {
    let input = document.getElementById("pwd");
    input.type = input.type === "password" ? "text" : "password";
}

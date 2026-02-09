// ตั้งค่าวันเริ่มคบ: ปี 2023, เดือน 8 (กันยายน), วันที่ 27
const startDate = new Date(2023, 8, 27); 

function checkPassword() {
    const password = document.getElementById("password-input").value.toLowerCase();
    const errorMsg = document.getElementById("error-msg");
    
    // รหัสผ่าน: jan
    if (password === "jan") {
        document.getElementById("login-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("login-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 500);
        
        startTimer();
        createHearts();
    } else {
        errorMsg.textContent = "รหัสผิด! ใบ้: ชื่อเล่นเธอ (ภาษาอังกฤษตัวเล็ก)";
        document.getElementById("password-input").classList.add("shake");
        setTimeout(() => document.getElementById("password-input").classList.remove("shake"), 500);
    }
}

function startTimer() {
    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }, 1000);
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleMusic() {
    const audio = document.getElementById("bg-music");
    const btn = document.querySelector(".music-btn");
    if (audio.paused) {
        audio.play();
        btn.innerHTML = "🔊 Pause";
    } else {
        audio.pause();
        btn.innerHTML = "🎵 Play Music";
    }
}

function createHearts() {
    const container = document.getElementById("bg-hearts");
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.animationDuration = Math.random() * 5 + 5 + "s";
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 10000);
    }, 500);
}
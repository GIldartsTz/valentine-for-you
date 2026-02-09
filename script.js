// วันที่เริ่มคบ: 27 กันยายน 2023
// (เดือนใน JS เริ่มนับที่ 0: มกรา=0, ..., กันยา=8)
const startDate = new Date(2023, 8, 27); 

// ฟังก์ชัน Login
function checkPassword() {
    const password = document.getElementById("password-input").value.toLowerCase();
    const errorMsg = document.getElementById("error-msg");
    
    if (password === "jan") {
        document.getElementById("login-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("login-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
            // เรียกฟังก์ชันนับเวลาทันทีที่เข้าหน้าหลัก
            updateTimer(); 
            setInterval(updateTimer, 1000);
            createHearts();
        }, 500);
    } else {
        errorMsg.textContent = "รหัสผิด! ใบ้: ชื่อเล่นเธอ (ภาษาอังกฤษตัวเล็ก)";
        const input = document.getElementById("password-input");
        input.classList.add("shake");
        setTimeout(() => input.classList.remove("shake"), 500);
    }
}

// ฟังก์ชันคำนวณเวลา (แก้ใหม่ให้ชัวร์)
function updateTimer() {
    const now = new Date();
    const diff = now - startDate; // หาผลต่างเวลา (มิลลิวินาที)

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // อัปเดตตัวเลขใน HTML
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}

// ฟังก์ชันเพลง
function toggleMusic() {
    const audio = document.getElementById("bg-music");
    const btn = document.querySelector(".music-btn");
    
    if (audio.paused) {
        audio.play().catch(error => {
            alert("กรุณากดที่หน้าจอก่อน 1 ครั้งเพื่อให้เพลงเล่นได้ครับ");
        });
        btn.innerHTML = "🔊 Pause (ของขวัญ - Musketeers)";
    } else {
        audio.pause();
        btn.innerHTML = "🎵 Play Music";
    }
}

// ฟังก์ชันหัวใจลอย
function createHearts() {
    const container = document.getElementById("bg-hearts");
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s";
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 400);
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
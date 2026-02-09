// --- ตั้งค่าวันที่เริ่มคบกันตรงนี้ (ปี, เดือน-1, วัน) ---
// หมายเหตุ: เดือนเริ่มนับที่ 0 (มกรา=0, กุมภา=1, ...)
const startDate = new Date(2023, 1, 14); // ตัวอย่าง: 14 กุมภา 2023 (แก้เป็นวันจริงของคุณตวงนะ!)

// --- 1. ระบบ Login ---
function checkPassword() {
    const input = document.getElementById('password-input').value.toLowerCase();
    const correctPassword = "jan"; // รหัสผ่านคือ jan

    if (input === correctPassword) {
        // ถ้ารหัสถูก
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        
        // เริ่มนับเวลาและเล่นอนิเมชั่น
        startTimer();
        fadeInPage('home');
    } else {
        // ถ้ารหัสผิด
        const errorMsg = document.getElementById('error-msg');
        errorMsg.textContent = "รหัสผิด! บอกใบ้: ชื่อเล่นเธอ (ภาษาอังกฤษตัวเล็ก)";
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
    }
}

// --- 2. ระบบนับเวลา ---
function startTimer() {
    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('timer').innerText = 
            `${days} Days ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// --- 3. ระบบเปลี่ยนหน้า ---
function nextPage(pageId) {
    // เลื่อนลงไปหา element นั้นแบบนุ่มนวล
    document.getElementById(pageId).scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // หรือถ้าอยากให้ค่อยๆ โผล่ (Fade)
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function fadeInPage(pageId) {
    setTimeout(() => {
        document.getElementById(pageId).classList.add('active');
    }, 100);
}

// --- 4. ระบบเพลง ---
function toggleMusic() {
    const audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play();
        document.querySelector('.music-control').innerText = "🔊 Playing...";
    } else {
        audio.pause();
        document.querySelector('.music-control').innerText = "🎵 Play Music";
    }
}
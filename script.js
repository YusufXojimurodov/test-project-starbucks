const foydalanuvchilar = JSON.parse(localStorage.getItem("foydalanuvchilar")) || [];

function register() {
    const login = document.getElementById("register-login").value;
    const parol = document.getElementById("register-parol").value;

    foydalanuvchilar.push({ login, parol });


    localStorage.setItem("foydalanuvchilar", JSON.stringify(foydalanuvchilar));

    if (login == "" && parol == "") {
        document.getElementById("muvaffaqiyat").textContent = "Registratsiya Muvaffaqiyatsiz";
    } else {
        document.getElementById("muvaffaqiyat").textContent = "Registratsiya Muvaffaqiyatli";
    }
}

console.log(foydalanuvchilar);

function tasdiqlash() {
    const login = document.getElementById("login").value;
    const parol = document.getElementById("parol").value;

    const saqlanganFoydalanuvchilar = JSON.parse(localStorage.getItem("foydalanuvchilar")) || [];

    const user = saqlanganFoydalanuvchilar.find(user => user.login === login && user.parol === parol);

    if (user) {
        window.location.href = "main.html";
        alert("Starbucks coffe markaziga Xush Kelibsiz !");
    } else {
        document.getElementById("xato").textContent = "Login yoki parol xato. Qaytadan kiriting. Yoki Registratsiyadan o'ting";
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  // Sekme Geçişleri
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.getAttribute("data-tab");
      contents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === target) {
          content.classList.add("active");
        }
      });
    });
  });

  // Üye Girişi Formu
  const girisForm = document.getElementById("giris-form");
  girisForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email && password) {
      alert(`Hoşgeldiniz, ${email}`);
      girisForm.reset();
    } else {
      alert("Lütfen e-posta ve şifre bilgilerinizi girin.");
    }
  });

  // Yeni Üyelik Formu
  const kayitForm = document.getElementById("kayit-form");
  kayitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById(
      "register-password-confirm"
    ).value;

    if (password !== confirmPassword) {
      alert("Şifreler uyuşmuyor. Lütfen kontrol edin.");
    } else {
      alert(`Tebrikler ${name}, üyeliğiniz başarıyla oluşturuldu!`);
      kayitForm.reset();
    }
  });
});

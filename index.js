//Hizmetler Sayfası
document.addEventListener("DOMContentLoaded", () => {
  const serviceButtons = document.querySelectorAll(".service-btn");
  const modal = document.getElementById("service-modal");
  const closeModal = document.querySelector(".close");
  const modalTitle = document.getElementById("modal-service-title");
  const modalDetails = document.getElementById("modal-service-details");

  // Hizmet Detayları
  const serviceDetails = {
    "3D Modelleme":
      "Özel projeleriniz için detaylı 3D modelleme hizmeti sunuyoruz. Her türlü tasarım ihtiyacınıza uygun, yüksek hassasiyetli modeller geliştiriyoruz.",
    "3D Baskı Hizmeti":
      "Son teknoloji 3D yazıcılarımızla hızlı ve kaliteli baskılar gerçekleştiriyoruz. PLA, ABS ve resin gibi birçok malzeme seçeneği sunuyoruz.",
    Prototipleme:
      "Ürün fikirlerinizi test etmek için uygun maliyetli ve dayanıklı prototipler üretiyoruz. Kısa sürede teslimat sağlıyoruz.",
  };

  // Butona Tıklama Olayı
  serviceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const serviceName = button.getAttribute("data-service");
      modalTitle.textContent = serviceName;
      modalDetails.textContent = serviceDetails[serviceName];
      modal.style.display = "flex";
    });
  });

  // Modal Kapatma
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Modal dışında bir yere tıklanınca kapat
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

//Blog Sayfası
document.addEventListener("DOMContentLoaded", () => {
  const blogButtons = document.querySelectorAll(".blog-btn");
  const modal = document.getElementById("blog-modal");
  const closeModal = document.querySelector(".close");
  const modalTitle = document.getElementById("modal-blog-title");
  const modalContent = document.getElementById("modal-blog-content");

  // Blog İçerikleri
  const blogDetails = {
    "3D Baskı Nedir?":
      "3D baskı, dijital bir modelden fiziksel bir nesne oluşturma sürecidir. Bu teknoloji, katman katman malzeme ekleyerek nesneleri üretir. Farklı endüstrilerde üretim maliyetini azaltmak ve prototiplemeyi hızlandırmak için yaygın olarak kullanılır.",
    "3D Modelleme ile Ürün Geliştirme":
      "3D modelleme, ürün geliştirme sürecinde kritik bir rol oynar. İnovatif fikirleri somutlaştırır, maliyetleri düşürür ve üretim öncesi test imkanı sağlar.",
    "Prototipleme Süreci":
      "Prototipleme, bir ürünün ilk versiyonunun üretilmesidir. Bu süreçte fikirler test edilir, geri bildirimler alınır ve ürün geliştirme hızlandırılır.",
  };

  // Butona Tıklama Olayı
  blogButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const blogTitle = button.getAttribute("data-blog");
      modalTitle.textContent = blogTitle;
      modalContent.textContent = blogDetails[blogTitle];
      modal.style.display = "flex";
    });
  });

  // Modal Kapatma
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Modal dışında bir yere tıklanırsa kapat
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

//Destek sayfası
document.addEventListener("DOMContentLoaded", () => {
  // Form Doğrulama
  const supportForm = document.getElementById("support-form");

  supportForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini önler
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Lütfen tüm alanları doldurun.");
    } else if (!validateEmail(email)) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
    } else {
      alert(
        "Destek talebiniz başarıyla gönderildi. En kısa sürede size geri dönüş yapacağız."
      );
      supportForm.reset(); // Formu sıfırlar
    }
  });

  // E-posta Doğrulama Fonksiyonu
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // SSS Aç/Kapat Fonksiyonu
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});

//İletişim Sayfası
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Lütfen tüm alanları doldurun.");
    } else if (!validateEmail(email)) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
    } else {
      alert(
        "Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz."
      );
      contactForm.reset();
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

//Kampanyaalr Sayfası
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const kampanyaCards = document.querySelectorAll(".kampanya-card");

  // Arama Fonksiyonu
  function searchCampaigns() {
    const query = searchInput.value.toLowerCase();

    kampanyaCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const category = card.dataset.category.toLowerCase();

      if (title.includes(query) || category.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Buton ve Klavye Girişi için Event Listener
  searchButton.addEventListener("click", searchCampaigns);
  searchInput.addEventListener("keyup", searchCampaigns);
});

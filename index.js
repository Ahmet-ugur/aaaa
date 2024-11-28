document
  .getElementById("randevu-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle

    let ad = document.getElementById("ad").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let tarih = document.getElementById("tarih").value;
    let saat = document.getElementById("saat").value;
    let islemler = document.getElementById("islemler").value;
    let mesaj = document.getElementById("mesaj").value;

    // Randevu bilgilerini konsola yaz
    console.log(`Randevu Bilgileri:  
      Ad: ${ad}  
      Email: ${email}  
      Telefon: ${telefon}  
      Tarih: ${tarih}  
      Saat: ${saat}  
      Yapılacak İşlem: ${islemler}  
      Mesaj: ${mesaj}`);

    alert("Randevunuz alınmıştır!"); // Kullanıcıya randevunun alındığını bildir
  });

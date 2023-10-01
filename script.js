function karsilamaEkrani() {
    // İsim alanından girilen değeri alın
    var isim = document.getElementById("isim").value;
    
    // İsim alanını gizleyin
    document.getElementById("girisEkrani").style.display = "none";

    // Karşılama ekranını gösterin
    document.getElementById("karsilamaEkrani").style.display = "block";

    // İsim alanını karşılama ekranına yerleştirin
    document.getElementById("isimGoster").textContent = isim;

    // Şu anki saat ve günü alın
    var suAn = new Date();
    var saat = suAn.getHours() + ":" + suAn.getMinutes();
    var gun = suAn.toLocaleDateString("tr-TR", { weekday: "long" });

    // Saat ve günü gösterin
    document.getElementById("saatGoster").textContent = saat;
    document.getElementById("gunGoster").textContent = gun;
}
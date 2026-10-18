baslik("01. Şarj Uyarısı");
{
  let batteryLevel = 15;
  let isCharging = false;
  if (batteryLevel < 20 && !isCharging) {
    console.log("Düşük pil! Lütfen şarja takın.");
  } else {
    console.log("Pil durumu normal.");
  }
}
 
baslik("02. Tam Bölünebilme Kontrolü");
{
  let dividend = 45;
  let divisor = 9;
  if (divisor === 0) {
    console.log("Sıfıra bölme yapılamaz!");
  } else if (dividend % divisor === 0) {
    console.log("Tam bölünüyor.");
  } else {
    console.log("Kalanlı bölme.");
  }
}
 
baslik("03. Asansör Kapasitesi");
{
  let maxWeight = 400;
  let personCount = 5;
  let averageWeight = 85;
  if (personCount * averageWeight > maxWeight) {
    console.log("Kapasite aşıldı! Asansör hareket edemez.");
  } else {
    console.log("İyi yolculuklar.");
  }
}
 
baslik("04. Kelime Uzunluğu Sınırı");
{
  let username = "ali";
  if (username.length < 4 || username.length > 12) {
    console.log("Geçersiz kullanıcı adı uzunluğu.");
  } else {
    console.log("Kullanıcı adı kabul edildi.");
  }
}
 
baslik("05. Çift Sayı Ama 10'un Katı Değil");
{
  let num = 30;
  if (num % 2 === 0 && num % 10 !== 0) {
    console.log("Aranan sayı bulundu!");
  } else {
    console.log("Kurala uymuyor.");
  }
}
 
baslik("06. Gece Modu Otomasyonu");
{
  let hour = 22;
  if (hour >= 20 || hour < 6) {
    console.log("Gece modu aktif.");
  } else {
    console.log("Gündüz modu aktif.");
  }
}
 
// ===== BÖLÜM 2 =====
 
baslik("07. Suyun Halleri");
{
  let waterTemp = 105;
  if (waterTemp <= 0) {
    console.log("Katı (Buz)");
  } else if (waterTemp < 100) {
    console.log("Sıvı (Su)");
  } else {
    console.log("Gaz (Buhar)");
  }
  if (waterTemp === 0 || waterTemp === 100) {
    console.log("Hal değişim noktası!");
  }
}
 
baslik("08. Hız Cezası Hesaplama");
{
  let speed = 115;
  let speedLimit = 90;
  let diff = speed - speedLimit;
  if (diff <= 0) {
    console.log("İyi sürüşler.");
  } else if (diff <= 20) {
    console.log("Uyarı: Hız sınırını aştınız.");
  } else if (diff <= 40) {
    console.log("1000 TL Ceza.");
  } else {
    console.log("Ehliyete el konuldu.");
  }
}
 
baslik("09. Kahve Makinesi Seçimi");
{
  let coffeeType = "Latte";
  let hasMilk = false;
  let hasWater = true;
  if (!hasWater) {
    console.log("Su bitti!");
  } else if ((coffeeType === "Latte" || coffeeType === "Cappuccino") && !hasMilk) {
    console.log("Süt bitti, bu kahve yapılamaz.");
  } else {
    console.log("Kahveniz hazırlanıyor...");
  }
}
 
baslik("10. İkinci Dereceden Denklem Kök Durumu");
{
  let a = 1, b = -4, c = 4;
  let delta = (b * b) - (4 * a * c);
  if (delta > 0) {
    console.log("İki farklı gerçek kök var.");
  } else if (delta === 0) {
    console.log("Çakışık (tek) gerçek kök var.");
  } else {
    console.log("Gerçek kök yok.");
  }
}
 
baslik("11. Paket Abonelik Yükseltme");
{
  let currentPlan = "Standart";
  let storageUsed = 95;
  let maxStorage = 100;
  if (storageUsed > maxStorage) {
    console.log("Alan doldu! Acil yükseltme gerekli.");
  } else if (storageUsed >= maxStorage * 0.9) {
    console.log("Alan neredeyse doldu.");
  } else {
    console.log("Yeterli depolama alanınız var.");
  }
}
 
baslik("12. Koordinat Düzleminde Bölge Bulma");
{
  let x = -4;
  let y = 7;
  if (x === 0 && y === 0) {
    console.log("Orijin (Başlangıç noktası)");
  } else if (x === 0 || y === 0) {
    console.log("Eksen üzerinde");
  } else if (x > 0 && y > 0) {
    console.log("1. Bölge");
  } else if (x < 0 && y > 0) {
    console.log("2. Bölge");
  } else if (x < 0 && y < 0) {
    console.log("3. Bölge");
  } else {
    console.log("4. Bölge");
  }
}
 
// ===== BÖLÜM 3 =====
 
baslik("13. Elektrik Faturası Kademeli Hesaplama");
{
  let consumption = 320;
  let total;
  if (consumption <= 150) {
    total = consumption * 2;
  } else {
    total = 150 * 2 + (consumption - 150) * 3;
  }
  console.log(`Toplam fatura: ${total} TL`);
}
 
baslik("14. Otopark Ücret Tarifesi");
{
  let hours = 5;
  let isDisabled = false;
  let fee;
  if (isDisabled) {
    fee = 0;
  } else if (hours <= 1) {
    fee = 50;
  } else if (hours <= 4) {
    fee = 50 + (hours - 1) * 30;
  } else {
    fee = 200;
  }
  console.log(`Ödenecek tutar: ${fee} TL`);
}
 
baslik("15. Kredi Başvuru Değerlendirmesi");
{
  let income = 35000;
  let creditScore = 1350;
  let hasDebt = true;
  if (creditScore < 1100) {
    console.log("Kredi reddedildi (Düşük puan).");
  } else if (creditScore < 1500) {
    if (income >= 30000 && hasDebt === false) {
      console.log("Onaylandı");
    } else {
      console.log("Gelir yetersiz veya mevcut borç var.");
    }
  } else {
    console.log("Koşulsuz onaylandı!");
  }
}
 
baslik("16. Uçak Bagaj Ek Ücreti");
{
  let handLuggage = 9;
  let cabinLuggage = 23;
  let isBusinessClass = false;
  let handLimit = isBusinessClass ? 12 : 8;
  let cabinLimit = isBusinessClass ? 30 : 20;
  let excess = 0;
  if (handLuggage > handLimit) excess += handLuggage - handLimit;
  if (cabinLuggage > cabinLimit) excess += cabinLuggage - cabinLimit;
  console.log(`Ekstra ücret: ${excess * 100} TL`);
}
 
baslik("17. Akıllı Ev Kombi Kontrolü");
{
  let currentTemp = 19;
  let targetTemp = 22;
  let isWindowOpen = true;
  let isSomeoneHome = true;
  if (isWindowOpen) {
    console.log("Pencere açık, kombi kapatıldı.");
  } else if (!isSomeoneHome) {
    console.log("Evde kimse yok, kombi kapatıldı.");
  } else if (currentTemp < targetTemp) {
    console.log("Kombi çalışıyor.");
  } else {
    console.log("Hedef sıcaklığa ulaşıldı, kombi beklemede.");
  }
}
 
baslik("18. İndirim Kuponu Doğrulama");
{
  let cartAmount = 600;
  let couponCode = "SUPER100";
  let isFirstOrder = false;
  let discount = 0;
  let valid = false;
  if (couponCode === "HOSGELDIN" && isFirstOrder) {
    discount = 150;
    valid = true;
  } else if (couponCode === "SUPER100" && cartAmount >= 500) {
    discount = 100;
    valid = true;
  }
  if (!valid) console.log("Kupon kullanılamadı.");
  console.log(`Ödenecek tutar: ${cartAmount - discount} TL`);
}
 
// ===== BÖLÜM 4 =====
 
baslik("19. Artık Yıl Hesaplayıcı");
{
  let year = 1900;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Artık yıl");
  } else {
    console.log("Normal yıl");
  }
}
 
baslik("20. Taş - Kağıt - Makas");
{
  let player1 = "Makas";
  let player2 = "Taş";
  let gecerli = ["Taş", "Kağıt", "Makas"];
  if (!gecerli.includes(player1) || !gecerli.includes(player2)) {
    console.log("Geçersiz seçim!");
  } else if (player1 === player2) {
    console.log("Beraberlik!");
  } else if (
    (player1 === "Taş" && player2 === "Makas") ||
    (player1 === "Makas" && player2 === "Kağıt") ||
    (player1 === "Kağıt" && player2 === "Taş")
  ) {
    console.log("1. oyuncu kazandı!");
  } else {
    console.log("2. oyuncu kazandı!");
  }
}
 
baslik("21. Ortanca (Medyan) Sayıyı Bulma");
{
  let x = 45, y = 12, z = 28;
  let median;
  if ((x > y && x < z) || (x < y && x > z)) {
    median = x;
  } else if ((y > x && y < z) || (y < x && y > z)) {
    median = y;
  } else {
    median = z;
  }
  console.log(`Ortanca sayı: ${median}`);
}
 
baslik("22. ATM Banknot Dağıtıcı");
{
  let withdraw = 370;
  if (withdraw % 10 !== 0 || withdraw < 20) {
    console.log("Bu tutar verilemez.");
  } else {
    let kalan = withdraw;
    let n200 = Math.floor(kalan / 200); kalan %= 200;
    let n100 = Math.floor(kalan / 100); kalan %= 100;
    let n50 = Math.floor(kalan / 50);   kalan %= 50;
    let n20 = Math.floor(kalan / 20);   kalan %= 20;
    let n10 = Math.floor(kalan / 10);
    console.log(`200 TL: ${n200} adet`);
    console.log(`100 TL: ${n100} adet`);
    console.log(`50 TL: ${n50} adet`);
    console.log(`20 TL: ${n20} adet`);
    console.log(`10 TL: ${n10} adet`);
  }
}
 
baslik("23. Dijital Saat: 1 Dakika Sonrası");
{
  let hour = 23;
  let minute = 59;
  minute++;
  if (minute === 60) {
    minute = 0;
    hour++;
    if (hour === 24) {
      hour = 0;
    }
  }
  let hh = hour < 10 ? "0" + hour : "" + hour;
  let mm = minute < 10 ? "0" + minute : "" + minute;
  console.log(`${hh}:${mm}`);
}
 
baslik("24. RPG Oyun Savaş Hasarı");
{
  let baseDamage = 50;
  let weaponMultiplier = 1.5;
  let isCriticalHit = true;
  let enemyArmor = 40;
  let enemyElement = "Ateş";
  let attackElement = "Su";
 
  let damage = baseDamage * weaponMultiplier;
  if (isCriticalHit) {
    damage *= 2;
  }
  if (attackElement === "Su" && enemyElement === "Ateş") {
    damage *= 1.5;
  } else if (attackElement === "Ateş" && enemyElement === "Su") {
    damage *= 0.5;
  }
  damage -= enemyArmor;
  if (damage < 1) {
    damage = 1;
  }
  console.log(`Net hasar: ${damage}`);
}
 
baslik("25. Tarih Geçerlilik Kontrolü");
{
  let day = 31, month = 4, year = 2026;
  let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  let valid;
  if (month < 1 || month > 12 || day < 1) {
    valid = false;
  } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    valid = day <= 31;
  } else if ([4, 6, 9, 11].includes(month)) {
    valid = day <= 30;
  } else {
    valid = day <= (isLeap ? 29 : 28);
  }
  console.log(valid ? "Geçerli tarih." : "Takvimde böyle bir gün yok!");
}
 
# 3D GMS Wien — NFC dijital kartvizit
Hazır statik GitHub Pages paketi. İlk kart: Ramazan Gümüş.
Telefon bilinmediği için boş bırakılmıştır. Ekranda +43 XXX XXXXXXX örnek biçimi gösterilir; arama bağlantısı ve vCard telefonu üretilmez.

## 1. iPhone ile ilk kurulum
1. ZIP dosyasını Dosyalar uygulamasına kaydedin. ZIP’e dokunarak açın.
2. Safari’de github.com adresinden hesabınıza giriş yapın.
3. Yeni depo (New repository) oluşturun: örneğin nfc-kartvizit. Ücretsiz kullanım için Public seçin, README ekleyerek main dalını oluşturun.
4. Depoda Add file → Upload files seçin. Paket içindeki index.html, duzenle.html, style.css, data.js, common.js, app.js ve editor.js dosyalarını seçip yükleyin. ZIP’in kendisini veya dış klasörü yüklemeyin. index.html deponun ana dizininde olmalı. Dosya seçicide çoklu seçim çıkmazsa dosyaları tek tek yükleyin. Commit changes ile onaylayın.
5. Menü görünmüyorsa Safari sayfa menüsünden “Masaüstü Web Sitesi İste” seçeneğini deneyin.
6. Deponun Settings → Pages bölümünü açın. Build and deployment altında Source = Deploy from a branch, Branch = main, klasör = /(root) seçin ve Save yapın.
7. Pages bölümünde yayın tamamlanınca gösterilen adresi açın. Yayın hemen görünmeyebilir; Actions bölümünden durumu kontrol edin.
8. Ana sayfadan Ramazan Gümüş kartını açın ve “Kart bağlantısını kopyala” düğmesine dokunun.

Örnek adresler (KULLANICI yerine gerçek GitHub kullanıcı adınızı yazın):
- Kartlar: https://KULLANICI.github.io/nfc-kartvizit/
- Ramazan: https://KULLANICI.github.io/nfc-kartvizit/index.html?k=ramazan-gumus
- Düzenleme: https://KULLANICI.github.io/nfc-kartvizit/duzenle.html

Bu örnek adresler henüz yayımlanmış gerçek bağlantılar değildir. NFC’ye Pages tarafından verilen gerçek adresi yazın.
Depo adı veya kullanıcı adı farklıysa bağlantılarınız da farklı olur.

## 2. Telefonu değiştirme ve yeni kişi ekleme
1. Yayımlanan sitenin duzenle.html sayfasını Safari’de açın.
2. Ramazan Gümüş’ü seçin. Gerçek telefonunu +ülke kodu ile yazın. Örneğin Avusturya için +43 ile başlayın; X içeren örneği kullanmayın. “Telefon henüz bilinmiyor / örnek kart” işaretini kaldırın.
3. “Değişikliği taslağa uygula” düğmesine basın.
4. “İçeriği kopyala” düğmesine basın. Çalışmazsa çıktı alanına basılı tutun, Tümünü Seç → Kopyala yapın.
5. GitHub deposunda data.js dosyasını açın → kalem simgesi / Edit file. Eski içeriğin tamamını yeni içerikle değiştirin. Commit changes ile kaydedin. Bu işlem GitHub hesabınızın depo yazma yetkisini kullanır.
6. Yayın tamamlanınca kart sayfasını yenileyin. Yeni numarayı ve indirilen .vcf dosyasını kontrol edin.
7. Başka biri için “+ Yeni kişi ekle” seçin. Benzersiz kimlik (örnek: ayse-yilmaz), isim, soyisim ve telefon girin. Taslağa uygulayın ve aynı data.js güncellemesini yapın. Kişinin bağlantısı index.html?k=ayse-yilmaz olur.
8. Aynı taslakta birden fazla kişiyi düzenleyebilirsiniz; çıktı tüm kişileri içerir. GitHub’a son sürümün tamamını aktarın.

Taslaklar otomatik saklanmaz; sayfayı yenilemek uygulanmamış/yayımlanmamış çalışmayı kaybettirir. Önce çıktıyı kopyalayın veya data.js indirin.
Mevcut kimlik düzenleme ekranında kilitlidir. GitHub’dan elle değiştirirseniz eski URL bozulur.
Ana dizin, depo adı, alan adı ve kişi kimliği aynı kalırsa isim/telefon güncellemesinde NFC’yi yeniden yazmanız gerekmez.
Yeni kişi eklemek için HTML sayfası kopyalamak gerekmez.

## 3. NFC Tools ile NTAG215 karta URL yazma
Önce gerçek kart sayfasının Safari’de çalıştığını kontrol edin.
1. iPhone’da wakdev’in NFC Tools uygulamasını açın.
2. Write / Yaz → Add a record / Kayıt ekle → URL / URI seçin. Menü çevirileri sürüme göre değişebilir.
3. Kişinin tam HTTPS adresini yapıştırın. Ramazan için sonu index.html?k=ramazan-gumus olmalı. GitHub depo adresini, düzenleme sayfasını veya dosya indirme bağlantısını yazmayın. Uygulama https:// önekini ayrı seçtiriyorsa iki kere eklemeyin.
4. Validate / OK ile kaydı onaylayın. Yazılacak listede yalnızca ilgili kişinin URL kaydı bulunsun.
5. Write / … Bytes düğmesine basın. NTAG215 kartı iPhone’un üst kenarına yaklaştırıp başarı bildirimi gelene kadar sabit tutun.
6. NFC Tools’tan çıkın. Telefonu uyandırıp kartı tekrar okutun, görünen bağlantıya dokunun. Doğru kişinin açıldığını kontrol edin.
7. “Kişiyi rehbere kaydet (.vcf)” düğmesini deneyin. iOS dosya/kişi önizlemesinde kişi ekleme işlemini onaylayın. Tarayıcı dosyayı indirirse Safari indirmelerinden açın. Rehbere kayıt otomatik veya sessiz yapılmaz.
8. Her fiziksel karta ilgili kişinin URL’sini yazın. Aynı kişi için birden fazla karta aynı URL yazılabilir.

Kartta yalnızca web adresi bulunur; kişi bilgileri web sayfasından gelir. Sayfayı açmak için internet gerekir.
Okuma/yazma başarısızsa cihazın NFC yazmayı desteklediğini, kartın yazılabilir ve kilitlenmemiş olduğunu, kalın/metal kılıfın engel olmadığını kontrol edin.
Denemeler sırasında kartı kalıcı olarak kilitlemeyin. NFC Tools, telefonunuzdan bu web arayüzüyle değil, kendi uygulamasından kullanılır.

## 4. Statik sistemin sınırları
- GitHub Pages HTML/CSS/JavaScript dosyalarını sunar. Bu pakette backend, veritabanı veya gerçek kimlik doğrulamalı yönetim paneli yoktur.
- duzenle.html yalnızca tarayıcı içinde data.js hazırlayan, herkese açık bir araçtır. “Taslağa uygula” ve “indir” siteyi güncellemez.
- Yayındaki değişiklik ancak repo dosyası güncellenip Pages yayını tamamlanınca görünür. GitHub hesabınızın güvenliği ve depo yetkileri yazma erişimini belirler.
- Tüm kişiler data.js içinde ve ana sayfada görünür. Gizli kart, özel telefon kaydı veya erişim kontrolü sağlamaz. Sadece paylaşılmasını istediğiniz bilgileri ekleyin.
- Kalıcı URL, adresin ve kimliğin korunmasına bağlıdır; hosting hizmeti için sonsuz süre garantisi değildir.
- vCard her indirmede güncel veriden üretilir. Daha önce telefona kaydedilen kişiler kendiliğinden güncellenmez.
- JavaScript açık olmalıdır. Harici kütüphane, takip kodu veya ücretli servis yoktur.
- Sadece iPhone ile doğrudan site üzerinde oturum açıp kaydetme istenirse ayrıca backend ve kimlik doğrulama hizmeti gerekir.

## Dosyalar
index.html: kişi listesi ve kişisel kartlar
duzenle.html: Türkçe dosya hazırlama aracı
data.js: tüm kişi verileri
common.js: vCard, telefon ve dosya yardımcıları
app.js: kart ekranı
editor.js: düzenleme akışı
style.css: mobil uyumlu görünüm

## Kaynaklar
GitHub Pages yayın ayarları:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
NFC Tools resmi URL yazma rehberi:
https://www.wakdev.com/en/knowledge-base/how-to-guides/how-to-write-a-link-url-on-an-nfc-chip.html

Hazırlanma: 28 Ekim 2026. Paket hazırlanmıştır; GitHub hesabına yükleme veya canlı yayın yapılmamıştır.

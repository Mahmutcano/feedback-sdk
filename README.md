Vue Widget SDK - Çerez ve Geri Bildirim Widget'ları
===================================================

Bu proje, Vue.js kullanarak geliştirilmiş iki widget içerir: Çerez Onay Widget'ı (CookieConsentWidget) ve Geri Bildirim Widget'ı (FeedbackWidget). Bu widget'lar, kullanıcı deneyimini geliştirmek için web sitesine çerez onay bildirimi ve geri bildirim formu ekler. Kullanıcılar tercihlerinde değişiklik yaptığında veya geri bildirim gönderdiğinde bu bilgiler localStorage'a kaydedilir.

Özellikler
----------

*   **Çerez Onay Widget'ı**: Kullanıcılara çerez tercihlerinin yönetimi için bir alan sağlar. Kullanıcılar çerezleri kabul edebilir veya tercihlerine göre özelleştirebilir.
    
*   **Geri Bildirim Widget'ı**: Kullanıcılardan geri bildirim toplamak için bir modal sağlar. İsim ve e-posta isteğe bağlı alanlardır, geri bildirim ise zorunludur.
    

Gereksinimler
-------------

*   **Node.js** ve **npm** yüklü olmalıdır.
    
*   Proje Vue 3 ve Vite kullanılarak geliştirilmiştir. Geliştirme için bu teknolojilere hakim olunması önerilir.
    

Kurulum

1.  Projeyi klonlayarak başlayın:
    

git clone

cd

npm install

npm run dev

Bu komut, projeyi geliştirme modunda çalıştırarak yerel bir sunucu başlatır. Tarayıcınızda http://localhost:3000 adresine giderek projeyi inceleyebilirsiniz.Yapı ve Kullanım

### Çerez Onay Widget'ı (CookieConsentWidget)

*   **Çerez Politikası Bildirimi**: Sayfa yüklendiğinde, kullanıcının çerez tercihleri localStorage'da kontrol edilir. Daha önce tercihler kaydedilmemişse, sol alt köşede çerez bildirimi görünür.
    
*   **Tercihlerin Kaydedilmesi**: Kullanıcı "Ayarlar" veya "Kabul Et" butonuna tıklayarak tercihini kaydedebilir. Tercih localStorage'a cookiePreferences anahtarıyla kaydedilir.
    
*   **Ayarlar Modalı**: Çerez ayarları özelleştirilebilir, kullanıcı Ayarlar butonuna tıkladığında çerez tercihlerini seçebilir.
    

### Geri Bildirim Widget'ı (FeedbackWidget)

*   **Geri Bildirim Formu**: Kullanıcı Geri Bildirim butonuna tıkladığında modal açılır. Form, isim, e-posta ve geri bildirim alanlarından oluşur. Geri bildirim alanı zorunludur, diğer alanlar isteğe bağlıdır.
    
*   **Doğrulama**: E-posta adresi geçerli bir formatta girilmelidir. Geri bildirim alanı boş bırakılmamalıdır.
    
*   **Veri Kaydı**: Kullanıcı formu gönderdiğinde, veriler localStorage'a feedbackData anahtarı ile kaydedilir.
    

Çalıştırma

Bu projeyi çalıştırmak için, dist/cookie-widget.umd.js dosyasını HTML sayfanıza eklemeniz yeterlidir. Widget'lar sayfa yüklendiğinde otomatik olarak başlatılacaktır.

Örnek HTML yapısı:

Widget Demo

Çerez ve Geri Bildirim Widget Test Sayfası
==========================================

Bu HTML yapısını kullanarak cookie-widget.umd.js dosyasını sayfanıza dahil edebilir ve widget'ları kullanabilirsiniz.Özelleştirme

*   **Renk ve Stil**: public/styles/widget-styles.css dosyasında widget'ların stillerini özelleştirebilirsiniz.
    
*   **Dil ve Metin Ayarları**: Widget'larda gösterilen başlıklar, açıklamalar ve buton metinlerini widget-styles.css içinde özelleştirebilir veya bileşen dosyalarına ekleyebilirsiniz.
    

Notlar
------

*   Widget'lar, kullanıcı tercihlerini localStorage'da saklayarak her sayfa yüklemesinde tercihleri hatırlar.
    
*   CookieConsentWidget ve FeedbackWidget bileşenleri Vue 3'te ayrı ayrı bileşenler olarak yazılmıştır ve dist/cookie-widget.umd.js dosyasına derlenmiştir.
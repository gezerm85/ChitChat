<div align="center">

# 💬 ChitChat

**Modern, Hızlı ve Güvenli Sohbet Uygulaması**

[![React Native](https://img.shields.io/badge/React_Native-0.74.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-51.0.22-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-10.10.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-2.2.3-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)

[📱 Demo Video](#-demo) • [🚀 Kurulum](#-kurulum) • [📋 Özellikler](#-özellikler) • [🛠️ Teknolojiler](#️-teknolojiler) • [📱 Ekran Görüntüleri](#-ekran-görüntüleri)

</div>

---

## 📖 Hakkında

**ChitChat**, kullanıcıların kolayca sohbet odaları oluşturup bu odalarda gerçek zamanlı mesajlaşmalarını sağlayan modern bir mobil chat uygulamasıdır. Firebase backend altyapısı ile güvenli, hızlı ve ölçeklenebilir bir iletişim deneyimi sunar.

### 🎯 Temel Özellikler

- 🔐 **Güvenli Kimlik Doğrulama** - Firebase Authentication ile güvenli giriş
- 💬 **Gerçek Zamanlı Mesajlaşma** - Anlık mesaj gönderimi ve alma
- 🏠 **Sohbet Odaları** - Özel sohbet odaları oluşturma ve yönetme
- 👤 **Profil Yönetimi** - Kullanıcı profili düzenleme ve resim yükleme
- 📱 **Çoklu Platform** - iOS, Android ve Web desteği
- 🎨 **Modern UI/UX** - Kullanıcı dostu ve responsive tasarım

---

## 📱 Demo

<div align="center">

https://github.com/user-attachments/assets/039b7a7d-a9b2-41b3-9bc8-e875f34190d4

*Uygulamanın canlı demo videosu*

</div>

---

## 🚀 Kurulum

### Gereksinimler

- **Node.js** (v16 veya üzeri)
- **npm** veya **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Android Studio** (Android geliştirme için)
- **Xcode** (iOS geliştirme için - sadece macOS)

### Adım Adım Kurulum

1. **Depoyu klonlayın**
   ```bash
   git clone https://github.com/gezerm85/ChitChat.git
   cd ChitChat
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   # veya
   yarn install
   ```

3. **Firebase yapılandırması**
   - Firebase Console'da yeni bir proje oluşturun
   - `firebaseConfig.js` dosyasını kendi Firebase ayarlarınızla güncelleyin

4. **Uygulamayı başlatın**
   ```bash
   npx expo start
   ```

5. **Platform seçenekleri**
   ```bash
   # Android için
   npx expo run:android
   
   # iOS için
   npx expo run:ios
   
   # Web için
   npx expo start --web
   ```

---

## 📋 Özellikler

### 🔐 Kimlik Doğrulama
- [x] E-posta/şifre ile kayıt olma
- [x] Güvenli giriş yapma
- [x] Oturum yönetimi
- [x] Profil düzenleme

### 💬 Mesajlaşma
- [x] Gerçek zamanlı mesaj gönderimi
- [x] Mesaj geçmişi
- [x] Tarih/saat gösterimi
- [x] Kullanıcı avatarları

### 🏠 Sohbet Odaları
- [x] Yeni oda oluşturma
- [x] Oda listesi görüntüleme
- [x] Oda içine katılma
- [x] Oda yönetimi

### 📱 Kullanıcı Deneyimi
- [x] Modern ve responsive tasarım
- [x] Smooth animasyonlar
- [x] Loading states
- [x] Error handling
- [x] Flash messages

---

## 🛠️ Teknolojiler

### Frontend
- **React Native** `0.74.3` - Mobil uygulama geliştirme
- **Expo** `51.0.22` - Geliştirme ortamı ve build sistemi
- **React Navigation** `6.x` - Ekranlar arası gezinme
- **Redux Toolkit** `2.2.3` - Durum yönetimi

### Backend & Servisler
- **Firebase** `10.10.0` - Backend servisleri
  - Authentication
  - Firestore Database
  - Storage

### Form & Validation
- **Formik** `2.4.6` - Form yönetimi
- **Yup** `1.4.0` - Form doğrulama

### UI & Animasyonlar
- **React Native Reanimated** `3.10.1` - Gelişmiş animasyonlar
- **React Native Modal** `13.0.1` - Modal bileşenleri
- **React Native Flash Message** `0.4.2` - Bildirim mesajları

### Utility Libraries
- **Date-fns** `3.6.0` - Tarih işlemleri
- **Async Storage** `1.23.1` - Yerel veri depolama
- **Expo Image Picker** `15.0.7` - Resim seçme

---

## 📁 Proje Yapısı

```
ChitChat/
├── src/
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   ├── cards/          # Kart bileşenleri
│   │   ├── CustomButton/   # Özel buton bileşeni
│   │   ├── floatingButton/ # Floating action button
│   │   ├── HeaderButton/   # Header buton bileşeni
│   │   ├── ImagePicker/    # Resim seçici bileşeni
│   │   └── modal/          # Modal bileşenleri
│   ├── navigation/         # Navigasyon yapılandırması
│   │   ├── AuthStack/      # Kimlik doğrulama ekranları
│   │   ├── UserStack/      # Kullanıcı ekranları
│   │   ├── UserTabs/       # Tab navigasyonu
│   │   └── RootNavigation/ # Ana navigasyon
│   ├── pages/              # Uygulama ekranları
│   │   ├── Login/          # Giriş ekranı
│   │   ├── SignUp/         # Kayıt ekranı
│   │   ├── Home/           # Ana sayfa
│   │   ├── Rooms/          # Sohbet odaları
│   │   ├── Messages/       # Mesajlaşma ekranı
│   │   ├── Profile/        # Profil ekranı
│   │   └── AccountEdit/    # Hesap düzenleme
│   ├── redux/              # Redux store ve slice'lar
│   │   ├── store.js        # Redux store yapılandırması
│   │   ├── userSlice.js    # Kullanıcı durumu
│   │   └── mainSlice.js    # Ana uygulama durumu
│   ├── utils/              # Yardımcı fonksiyonlar
│   │   └── Colors.js       # Renk paleti
│   ├── validation/         # Form doğrulama şemaları
│   │   └── ValidationSchema.js
│   └── assets/             # Statik dosyalar
│       ├── images/         # Resim dosyaları
│       ├── ChitChat_icon.png
│       └── splash.png
├── firebaseConfig.js       # Firebase yapılandırması
├── App.js                  # Ana uygulama bileşeni
├── app.json               # Expo yapılandırması
└── package.json           # Proje bağımlılıkları
```





---

## 🚀 Geliştirme

### Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlat
npm start

# Android'de çalıştır
npm run android

# iOS'ta çalıştır
npm run ios

# Web'de çalıştır
npm run web
```

### Build Komutları

```bash
# Android APK build
eas build --platform android

# iOS build
eas build --platform ios

# Her iki platform için
eas build --platform all
```

---

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👨‍💻 Geliştirici

**Gezerm Celebi**
- 📧 E-posta: [gezermcelebi@gmail.com](mailto:gezermcelebi@gmail.com)
- 💼 LinkedIn: [Gezerm Celebi](https://linkedin.com/in/gezermcelebi)
- 🐙 GitHub: [@gezerm85](https://github.com/gezerm85)

---

## 🙏 Teşekkürler

- [React Native](https://reactnative.dev/) ekibine
- [Expo](https://expo.dev/) ekibine
- [Firebase](https://firebase.google.com/) ekibine
- Tüm açık kaynak katkıda bulunanlara

---

<div align="center">

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ❤️ by [Gezerm Celebi](https://github.com/gezerm85)

</div>
# SoilSense Dashboard (React + Vite)

Dashboard monitoring IoT untuk sensor kelembaban tanah berbasis data dari Google Apps Script.

## Fitur utama
- UI modern, light theme, clean, fresh (putih + cyan + hijau).
- Header dengan waktu realtime dan tombol refresh.
- Summary cards (ADC terbaru, kelembaban terbaru, status, total data).
- Grafik interaktif:
  - Line chart ADC
  - Area chart kelembaban
  - Doughnut chart distribusi status
- Tabel data terbaru (maks 20 baris) + filter status.
- Auto refresh tiap 15 detik.
- Loading skeleton, hover animation, dan transisi halus.

## Endpoint default
Aplikasi menggunakan endpoint default berikut:

```txt
https://script.google.com/macros/s/AKfycbxwwS-H22mCVusnh_uUsZ-ZLOtg2_YgD545f28qfszwi37FWaYDC3cUkD1F5xfkA2S8/exec
```

Request data dilakukan ke:

```txt
?mode=getData
```

## Struktur folder

```txt
src/
  components/
    Header.jsx
    SummaryCards.jsx
    ChartsPanel.jsx
    DataTable.jsx
    PlantIllustration.jsx
    LoadingSkeleton.jsx
  services/
    api.js
  utils/
    format.js
  styles/
    index.css
  App.jsx
  main.jsx
```

## Cara menjalankan project

1. Install dependency

```bash
npm install
```

2. Jalankan mode development

```bash
npm run dev
```

3. Build production

```bash
npm run build
```

## Cara mengganti endpoint jika berubah

Gunakan environment variable `VITE_APP_SCRIPT_ENDPOINT`:

1. Salin file contoh env:

```bash
cp .env.example .env
```

2. Edit `.env`:

```env
VITE_APP_SCRIPT_ENDPOINT=https://script.google.com/macros/s/APP_SCRIPT_ID_BARU/exec
```

3. Restart dev server.

## Catatan format data
Dashboard mengharapkan field:
- `waktu`
- `adc`
- `kelembaban`
- `status`

Status yang dikenali untuk pewarnaan:
- `basah`
- `lembab`
- `kering`

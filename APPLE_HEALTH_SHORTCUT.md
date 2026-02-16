# 🍎 Apple Health → Moose Fitness Sync Shortcut

## iPhone'da Kısayol Oluşturma (2 dakika)

### 1. Shortcuts (Kısayollar) uygulamasını aç
### 2. Sağ üst "+" ile yeni kısayol oluştur
### 3. Adını "Health Sync" koy

### 4. Sırayla şu aksiyonları ekle:

---

**Aksiyon 1: Find Health Samples**
- Type: Weight (Vücut Ağırlığı)
- Sort by: Start Date (en yeni)
- Limit: 1
- Sonucu bir değişkene ata: `weight`

**Aksiyon 2: Find Health Samples**
- Type: Blood Pressure - Systolic
- Sort by: Start Date
- Limit: 1
- Sonucu: `bp_sys`

**Aksiyon 3: Find Health Samples**
- Type: Blood Pressure - Diastolic
- Sort by: Start Date
- Limit: 1
- Sonucu: `bp_dia`

**Aksiyon 4: Find Health Samples**
- Type: Step Count
- Group by: Day
- Sort by: Start Date
- Limit: 1
- Sonucu: `steps`

**Aksiyon 5: Find Health Samples**
- Type: Heart Rate (Resting)
- Sort by: Start Date
- Limit: 1
- Sonucu: `hr`

**Aksiyon 6: Find Health Samples**
- Type: Sleep Analysis
- Sort by: Start Date
- Limit: 1
- Sonucu: `sleep`

**Aksiyon 7: Find Health Samples**
- Type: Active Energy
- Group by: Day
- Sort by: Start Date
- Limit: 1
- Sonucu: `energy`

**Aksiyon 8: Text**
```
https://myyenice-svg.github.io/moose_health_app/?sync=1&weight={weight}&steps={steps}&bp_sys={bp_sys}&bp_dia={bp_dia}&pulse={hr}&hr={hr}&sleep={sleep}&energy={energy}
```

**Aksiyon 9: Open URLs**
- URL: Üstteki Text çıktısı

---

### 5. Kaydet!

### 6. Widget olarak ekle (opsiyonel):
- Home screen'e Shortcuts widget ekle
- "Health Sync" kısayolunu seç
- Tek dokunuşla sync!

---

## Nasıl Çalışır?
1. Shortcut Apple Health'ten son verileri çeker
2. URL parametresi olarak Moose Fitness'a gönderir
3. Web app verileri otomatik kaydeder
4. Yeşil "✅ Apple Health Sync" bildirimi gösterir

## Desteklenen Veriler:
- ⚖️ Kilo (kg)
- ❤️ Tansiyon (sistolik/diastolik)
- 💓 Nabız (bpm)
- 🚶 Adım sayısı
- 😴 Uyku (saat)
- 🔥 Aktif enerji (kcal)

## Test URL (manuel test):
```
https://myyenice-svg.github.io/moose_health_app/?sync=1&weight=111&steps=8500&bp_sys=125&bp_dia=82&pulse=72&sleep=7.5&energy=350
```
Bu linki tarayıcıda aç — verilerin app'e geldiğini göreceksin.

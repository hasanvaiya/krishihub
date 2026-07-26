# KrishiHub Bangladesh PRO 🌾

> "একটি প্ল্যাটফর্মে বাংলাদেশের সকল প্রাতিষ্ঠানিক কৃষি তথ্য, স্মার্ট টুলস ও রিয়েল-টাইম বাজার মূল্য"

KrishiHub Bangladesh is an enterprise-grade Progressive Web Application (PWA) providing comprehensive agricultural data, crop encyclopedia (1,058+ crops), smart farm planning tools, profit calculators, 64-district crop mapping, and real-time live weather/market data auto-updates.

## 🚀 Key Features

- **📖 Crop Encyclopedia:** Comprehensive guides for 1,058+ crops (cereals, tubers, pulses, oilseeds, fruits, vegetables, spices, cash crops, timber).
- **🎯 Smart Crop Planner:** Soil, district, season, and irrigation-based crop recommendations with automatic yield and profit calculations in **KG**.
- **⚡ Real-Time Live Auto-Updates:** Integrated with Open-Meteo REST API for live weather forecasts across Bangladesh districts and live market price tickers.
- **🛒 Wholesale Marketplace:** Direct wholesale prices, stock quantities in **KG**, and real-time market trends.
- **🧾 Cash Memo Generator:** Printable invoices for agricultural produce trading.
- **🗺️ 64-District Crop Map:** District-specific primary crops, soil types, and regional production analytics.
- **📔 Farm Diary & Land Converter:** Real-time unit converter (Shotok, Katha, Bigha, Acre, Hectare) and local storage notes.
- **📱 Ultra-Responsive Mobile-First UI:** Modern iOS/Android bottom navigation, clean glassmorphic aesthetics, and dark/light themes.

## 🛠️ Technology Stack

- **Frontend:** HTML5, Vanilla ES6 JavaScript, CSS3 (Custom Variables, Flexbox, CSS Grid)
- **APIs:** Open-Meteo REST API (Live Weather & Forecasts)
- **PWA:** Service Worker (`sw.js`), Web App Manifest (`manifest.json`)
- **Storage:** Browser LocalStorage
- **Security:** Content Security Policy (CSP), Input Sanitization (`escapeHTML`), Security Meta Headers

## 💻 Local Running

To run KrishiHub locally:
```bash
python -m http.server 8080
```
Open `http://localhost:8080` in your web browser.

---
Developed for Bangladesh Agricultural Ecosystem 🇧🇩

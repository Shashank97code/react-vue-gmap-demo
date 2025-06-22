# 🌐 Google Maps Integrations – React & Vue

This repository is a monorepo that showcases how to integrate **Google Maps** using two popular frontend frameworks:

- ✅ React (`react-gmaps-ui`)
- 🔜 Vue (`vue-gmaps-ui `) _(Coming Soon)_

The goal is to demonstrate scalable and modular implementations of Google Maps features such as dynamic markers, geolocation, and Places Autocomplete.

---

## 📁 Folder Structure

```
google-maps-integrations/
├── react-gmaps-ui/   # React-based Google Maps integration
├── vue-gmaps-ui /     # Vue 3 implementation (coming soon)
└── README.md      # Root README
```

---

## 🚀 Getting Started

Each folder contains its own README and environment setup. To run a specific version:

### 🔧 React Version

```bash
cd react-gmaps-ui
npm install
npm run dev     # or npm start if using CRA
```

👈 [See React README](./react-gmaps-ui/README.md)

---

### ⚙️ Vue Version (Coming Soon)

```bash
cd vue-gmaps-ui
npm install
npm run dev
```

---

## 🔐 API Key Setup

Each project uses its own `.env` file. Example:

```
# For React
REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here

# For Vue (Vite-based)
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

You can obtain a key from [Google Cloud Console](https://console.cloud.google.com/), and enable the following APIs:

- Maps JavaScript API
- Places API
- Geocoding API

---

## 🎯 Features Covered

- 📍 Add custom markers
- 🧽 Geolocation support
- 🔍 Places Autocomplete input
- 🗚️ Zoom control and map customization
- 🧱 Clean component structure

Planned:

- 🧭 Optimized path rendering (e.g. directions between two points)
- 🚗 Marker click details (for logistics/ride apps like car or goods info popup)
- 🔄 Reverse geocoding
- 🖊️ Polygon / shape drawing

---

## 🧑‍💼 Contributing

Want to contribute?

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push to GitHub
5. Open a Pull Request

---

## 📄 License

MIT © Shashank M M

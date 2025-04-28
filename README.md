# FC-Loadingscreen

High-Performance FiveM Loadingscreen mit GPU-Beschleunigung, optimiertem Memory-Management und vollständig konfigurierbarer UI ohne HTML-Kenntnisse.

## Features

- **High-Performance Rendering** mit GPU-Beschleunigung und DOM-Caching
- **3-Tab-System** (Main/Features/Team) mit dynamischem Content-Loading
- **Volles Theming** über CSS-Variablen (6 vorkonfigurierte Themes)
- **Automatische Audiosteuerung** mit State-Persistenz
- **Zero-HTML-Konfiguration** (alles über config.js steuerbar)
- **Optimiertes Asset-Loading** mit Preloading und Lazy-Loading

## Installation

```lua
# server.cfg
ensure fc-loadingscreen
```

## Konfiguration

### Basis-Einstellungen

```js
// config.js
{
    serverName: 'DEIN SERVER',
    serverSlogan: 'Dein Roleplay-Erlebnis',
    colorTheme: 'primary-style', // Optionen: primary-style, green-style, red-style, dark-style, neon-style, cyberpunk-style
    musicPath: 'assets/music.mp3',
    backgroundVideo: 'assets/background.mp4',
    musicVolume: 0.3
}
```

### Team & Features

```js
// Team-Mitglieder
team: [
    {
        name: 'Max Mustermann',
        role: 'Admin',
        description: 'Serverleitung & Entwickler',
        avatar: 'A'
    },
    // Weitere...
]

// Features
features: [
    {
        title: 'Wirtschaftssystem',
        description: 'Ausgeklügeltes Wirtschaftssystem mit Jobs',
        icon: 'fa-money-bill-wave'
    },
    // Weitere...
]
```

## Technische Details

### Performance-Optimierungen

- DOM-Caching statt repetitiver querySelector-Aufrufe
- GPU-beschleunigte CSS-Transformationen
- Event-Throttling für UI-Interaktionen
- Lazy-Loading von UI-Komponenten
- WebP-komprimierte Asset-Pipeline
- CSS-Containment für Layout-Optimierung

### Code-Struktur

```
client.lua        → NUI-Bridge mit Memory-Management
app.js            → Performance-optimierte Core-Engine
config.js         → Zentrale Konfiguration
style.css         → GPU-accelerated Styling
config.css        → CSS-Variablen für Theming
```

### Browser-Support

- Chromium 80+
- Safari 14+
- Firefox 80+
- Mobile-Optimierung durch @media-Queries

## Lizenz

[MIT License](LICENSE)

---

© 2025 Flare-Scripts

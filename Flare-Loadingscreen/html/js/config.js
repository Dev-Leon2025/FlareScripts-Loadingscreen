// FC-Loadingscreen | config.js
// High-Performance Konfiguration

const config = {
    // Server-Informationen
    serverName: 'DEIN SERVER NAME',
    serverSlogan: 'Dein ultimatives Roleplay-Erlebnis',
    
    // Ladebildschirm-Einstellungen
    loadingDuration: 20, // Sekunden bis zum vollständigen Laden
    colorTheme: 'primary-style', // Farbstil (primary-style, green-style, red-style, dark-style, neon-style, cyberpunk-style)
    
    // Musik-Einstellungen
    musicVolume: 0.03, // Standardlautstärke (0.0 bis 1.0)
    musicPath: 'assets/music.mp3', // Pfad zur Musikdatei
    
    // Hintergrund-Einstellungen
    backgroundVideo: 'assets/background.mp4', // Pfad zum Hintergrundvideo
    
    // UI-Texte
    ui: {
        // Tab-Labels
        tabs: {
            main: {
                icon: 'fa-home',
                label: 'Main'
            },
            features: {
                icon: 'fa-star',
                label: 'Features'
            },
            team: {
                icon: 'fa-users',
                label: 'Team'
            }
        },
        
        // Header-Texte
        headers: {
            features: {
                title: 'Server Features',
                subtitle: 'Entdecke was unseren Server besonders macht'
            },
            team: {
                title: 'Unser Team',
                subtitle: 'Das Administrationsteam steht dir zur Verfügung'
            }
        },
        
        // Ladebildschirm-Texte
        loading: {
            initialStatus: 'Verbinde zum Server...'
        },
        
        // Social Media Tooltips
        social: {
            discord: 'Discord',
            website: 'Website',
            instagram: 'Instagram',
            tiktok: 'TikTok'
        }
    },
    
    // Social Media Links
    socialMedia: {
        discord: 'https://discord.gg/deinserver',
        website: 'https://deine-server-website.de',
        instagram: 'https://instagram.com/deinserver',
        tiktok: 'https://tiktok.com/@deinserver'
    },
    
    // Tipps-Einstellungen
    tipRotationInterval: 5, // Sekunden zwischen Tipps-Rotation
    tips: [
        'Drücke F1 um das Hilfemenü zu öffnen',
        'Im Discord findest du alle aktuellen Server-Informationen',
        'Spieler-Reports können über das F7-Menü erstellt werden',
        'Unterstütze den Server im Webshop und erhalte exklusive Vorteile',
        'Respektiere die Server-Regeln und behandle andere Spieler fair',
        'Nutze /ooc für Out-of-Character Nachrichten',
        'Fraktionen rekrutieren regelmäßig neue Mitglieder',
        'Die Polizei hilft bei Notfällen - Rufe einfach die 911',
        'Jobs findest du auf der Karte mit einem Blip markiert',
        'Besuche unsere wöchentlichen Events für besondere Belohnungen'
    ],
    
    // Ladebildschirm-Status-Nachrichten
    loadingMessages: [
        'Verbinde zum Server...',
        'Lade Spielressourcen...',
        'Initialisiere Skripte...',
        'Bereite Spielwelt vor...',
        'Fast fertig...'
    ],
    
    // Server-Features
    features: [
        {
            title: 'Eigene Wirtschaft',
            description: 'Unser Server bietet ein ausgeklügeltes Wirtschaftssystem mit verschiedenen Jobs und Karrieremöglichkeiten.',
            icon: 'fa-money-bill-wave'
        },
        {
            title: 'Custom Fahrzeuge',
            description: 'Über 500 einzigartige Fahrzeuge mit realistischen Handling-Eigenschaften und Tuning-Optionen.',
            icon: 'fa-car'
        },
        {
            title: 'Immobiliensystem',
            description: 'Kaufe und gestalte dein eigenes Zuhause mit unserem fortschrittlichen Immobiliensystem.',
            icon: 'fa-home'
        },
        {
            title: 'Fraktionssystem',
            description: 'Tritt einer der vielen Fraktionen bei oder gründe deine eigene mit unserem dynamischen Fraktionssystem.',
            icon: 'fa-users'
        },
        {
            title: 'Regelmäßige Events',
            description: 'Wöchentliche Events mit speziellen Belohnungen und einzigartigen Spielerfahrungen.',
            icon: 'fa-calendar-check'
        },
        {
            title: 'Gangsystem',
            description: 'Erobere Gebiete und führe deine Gang zum Erfolg mit unserem einzigartigen Gangsystem.',
            icon: 'fa-skull'
        },
        {
            title: 'Illegale Aktivitäten',
            description: 'Verschiedene illegale Aktivitäten für die Spieler, die den kriminellen Weg einschlagen möchten.',
            icon: 'fa-mask'
        },
        {
            title: 'Telefonsystem',
            description: 'Modernes Telefonsystem mit Apps, Anrufen, Nachrichten und vielem mehr.',
            icon: 'fa-mobile-alt'
        },
        {
            title: 'Realistische Polizei',
            description: 'Eine realistische Polizeibehörde mit umfangreichen Werkzeugen und Fahndungssystem.',
            icon: 'fa-shield-alt'
        }
    ],
    
    // Team-Konfiguration
    team: [
        {
            name: 'Max Mustermann',
            role: 'Admin',
            description: 'Serverleitung & Entwickler',
            avatar: 'A'
        },
        {
            name: 'Lisa Schmidt',
            role: 'Moderator',
            description: 'Support & Community-Management',
            avatar: 'M'
        },
        {
            name: 'Thomas Weber',
            role: 'Admin',
            description: 'Technischer Support & Entwicklung',
            avatar: 'T'
        },
        {
            name: 'Sarah Müller',
            role: 'Supporter',
            description: 'Spieler-Support & Events',
            avatar: 'S'
        },
        {
            name: 'Kevin Fischer',
            role: 'Developer',
            description: 'Skript-Entwicklung & Framework',
            avatar: 'D'
        },
        {
            name: 'Julia Becker',
            role: 'Supporter',
            description: 'Community-Management & Support',
            avatar: 'J'
        }
    ],
    
    // Performance-Einstellungen
    enableBlurEffects: true,  // Blur-Effekte aktivieren/deaktivieren
    preloadAssets: true       // Assets im Voraus laden
};
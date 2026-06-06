export type Lang = "id" | "en";

export const content = {
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
    },
    hero: {
      greeting: "Halo, saya",
      name: "Rizqi Khamami",
      roles: [
        "IoT & Electronics Enthusiast",
        "AI Agent Developer",
        "DevSecOps Practitioner",
        "Linux & n8n Power User",
        "Vibe Coder",
      ],
      description:
        "Penghobi teknologi yang membangun solusi nyata di persimpangan hardware, otomasi, dan kecerdasan buatan. Dari sirkuit elektronik hingga AI agent—saya eksplorasi semuanya.",
      cta_projects: "Lihat Proyek",
      cta_contact: "Hubungi Saya",
      cta_cv: "Unduh CV",
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Penghobi & Praktisi Teknologi",
      bio: [
        "Saya adalah seorang penghobi teknologi yang passionate dengan pengalaman hands-on di berbagai domain: dari merancang rangkaian elektronik hingga membangun AI agent yang cerdas.",
        "Perjalanan saya dimulai dari ketertarikan mendalam pada elektronika dan berkembang ke ekosistem yang lebih luas—IoT, otomasi jaringan, Linux server management, dan kini AI & prompt engineering.",
        "Saya percaya bahwa teknologi terbaik lahir dari kombinasi pemahaman hardware yang solid dan kemampuan software yang kuat. Setiap proyek adalah eksperimen baru untuk belajar lebih dalam.",
      ],
      stats: [
        { label: "Domain Teknologi", value: "10+" },
        { label: "Proyek Selesai", value: "20+" },
        { label: "Tahun Eksplorasi", value: "5+" },
        { label: "Alat & Platform", value: "30+" },
      ],
    },
    skills: {
      title: "Keahlian",
      subtitle: "Stack teknologi yang saya kuasai dan eksplorasi",
      categories: [
        {
          name: "Electronics & IoT",
          icon: "cpu",
          skills: [
            "Arduino",
            "ESP32/ESP8266",
            "Raspberry Pi",
            "MQTT",
            "Node-RED",
            "Sensor Integration",
            "PCB Design",
            "Multimeter & Oscilloscope",
          ],
        },
        {
          name: "AI & Automation",
          icon: "bot",
          skills: [
            "n8n",
            "AI Agent",
            "Prompt Engineering",
            "LLM Integration",
            "RAG Pipeline",
            "Workflow Automation",
            "OpenAI API",
            "Ollama",
          ],
        },
        {
          name: "Linux & DevOps",
          icon: "terminal",
          skills: [
            "Linux (Debian/Ubuntu/Arch)",
            "Docker",
            "Nginx",
            "SSH Hardening",
            "CI/CD",
            "Git",
            "Bash Scripting",
            "Monitoring Stack",
          ],
        },
        {
          name: "DevSecOps & Pentest",
          icon: "shield",
          skills: [
            "Kali Linux",
            "Nmap",
            "Metasploit",
            "Wireshark",
            "Burp Suite",
            "OWASP",
            "Vulnerability Assessment",
            "Network Security",
          ],
        },
        {
          name: "Vibe Coding",
          icon: "code",
          skills: [
            "Python",
            "JavaScript/TypeScript",
            "Next.js",
            "FastAPI",
            "REST API",
            "WebSocket",
            "Tailwind CSS",
            "Git Workflow",
          ],
        },
        {
          name: "Networking",
          icon: "network",
          skills: [
            "MikroTik",
            "RouterOS",
            "VLAN",
            "Firewall Rules",
            "VPN",
            "DNS",
            "DHCP",
            "Network Monitoring",
          ],
        },
      ],
    },
    projects: {
      title: "Proyek",
      subtitle: "Hasil eksplorasi yang sudah saya bangun",
      items: [
        {
          id: "smart-garden",
          title: "Smart Garden IoT System",
          description:
            "Sistem monitoring dan otomasi kebun pintar berbasis ESP32 + MQTT + Node-RED. Memantau kelembaban tanah, suhu, cahaya, dan mengontrol pompa air secara otomatis melalui dashboard web real-time.",
          tags: ["ESP32", "MQTT", "Node-RED", "IoT", "Sensor", "Otomasi"],
          status: "Selesai",
          highlight: "Real-time monitoring dengan notifikasi Telegram",
          icon: "leaf",
        },
        {
          id: "n8n-mikrotik",
          title: "Network Automation dengan n8n & MikroTik",
          description:
            "Workflow otomasi manajemen jaringan menggunakan n8n sebagai orkestrasi dan MikroTik RouterOS API. Termasuk auto-block IP mencurigakan, laporan bandwidth harian, dan notifikasi alert.",
          tags: ["n8n", "MikroTik", "RouterOS API", "Network", "Automation"],
          status: "Aktif",
          highlight: "Auto-block 200+ IP mencurigakan per hari",
          icon: "network",
        },
        {
          id: "ai-agent-lab",
          title: "AI Agent & 9Router Lab",
          description:
            "Lab eksperimen AI agent multi-model dengan routing cerdas antar LLM. Menggunakan arsitektur 9Router untuk mendistribusikan tugas ke model yang paling sesuai (GPT-4, Claude, Ollama lokal).",
          tags: ["AI Agent", "LLM", "Ollama", "Prompt Engineering", "RAG"],
          status: "Eksperimen",
          highlight: "Multi-model routing dengan fallback otomatis",
          icon: "bot",
        },
        {
          id: "linux-homelab",
          title: "Linux Home Lab Server",
          description:
            "Home server berbasis Debian/Ubuntu dengan stack lengkap: Docker, Nginx reverse proxy, monitoring Grafana+Prometheus, Wireguard VPN, dan auto-backup. Digunakan sebagai sandbox development pribadi.",
          tags: ["Linux", "Docker", "Nginx", "Grafana", "Prometheus", "VPN"],
          status: "Aktif",
          highlight: "99.9% uptime selama 12 bulan",
          icon: "server",
        },
        {
          id: "electronics-notes",
          title: "Electronics Repair & Diagnostic Notes",
          description:
            "Dokumentasi komprehensif perbaikan dan diagnosa elektronik: PSU, motherboard, modul ESP, sensor, dan komponen SMD. Termasuk skema pengujian dan catatan troubleshooting praktis.",
          tags: [
            "Electronics",
            "Repair",
            "PCB",
            "SMD",
            "Diagnostics",
            "Documentation",
          ],
          status: "Ongoing",
          highlight: "100+ kasus perbaikan terdokumentasi",
          icon: "zap",
        },
      ],
      status_labels: {
        Selesai: "Selesai",
        Aktif: "Aktif",
        Eksperimen: "Eksperimen",
        Ongoing: "Berjalan",
      },
    },
    experience: {
      title: "Perjalanan",
      subtitle: "Timeline eksplorasi & pembelajaran teknologi",
      items: [
        {
          year: "2024–Kini",
          title: "AI Agent & Prompt Engineering",
          description:
            "Eksplorasi mendalam ekosistem AI: membangun AI agent, RAG pipeline, integrasi multi-LLM, dan otomasi workflow dengan n8n. Fokus pada prompt engineering sistematis.",
          tags: ["AI", "n8n", "LLM", "Automation"],
        },
        {
          year: "2023–2024",
          title: "DevSecOps & Linux Hardening",
          description:
            "Membangun home lab dengan pendekatan DevSecOps: implementasi CI/CD, container security, vulnerability scanning, dan Linux pentest environment dengan Kali.",
          tags: ["DevSecOps", "Linux", "Docker", "Security"],
        },
        {
          year: "2022–2023",
          title: "Network Engineering & MikroTik",
          description:
            "Memperdalam MikroTik RouterOS: konfigurasi VLAN, firewall, QoS, VPN, dan monitoring jaringan. Mulai otomasi tugas jaringan dengan scripting.",
          tags: ["MikroTik", "Networking", "RouterOS", "VPN"],
        },
        {
          year: "2020–2022",
          title: "IoT & Embedded Systems",
          description:
            "Membangun proyek IoT dengan ESP32/ESP8266, Arduino, Raspberry Pi. Integrasi sensor, MQTT, Node-RED, dan dashboard monitoring real-time.",
          tags: ["IoT", "ESP32", "Arduino", "MQTT"],
        },
        {
          year: "2019–2020",
          title: "Electronics & Hardware",
          description:
            "Fondasi kuat di elektronika dasar: membaca skema, troubleshooting komponen, soldering SMD, penggunaan osiloskop dan multimeter digital.",
          tags: ["Electronics", "Hardware", "PCB", "Repair"],
        },
      ],
    },
    github: {
      title: "GitHub",
      subtitle: "Aktivitas coding dan kontribusi open source",
      username: "Khamami13",
      cta: "Lihat Semua Repository",
    },
    contact: {
      title: "Kontak",
      subtitle: "Mari berkolaborasi atau sekadar ngobrol tentang teknologi",
      description:
        "Terbuka untuk peluang kolaborasi, proyek freelance, diskusi teknis, atau sekadar berbagi ide seputar teknologi. Hubungi saya melalui platform di bawah ini.",
      links: [
        {
          label: "LinkedIn",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/rizqi-khamami-475a801b3/",
          hint: "Koneksi profesional",
        },
        {
          label: "GitHub",
          icon: "github",
          url: "https://github.com/Khamami13",
          hint: "Lihat kode saya",
        },
        {
          label: "Email",
          icon: "mail",
          url: "mailto:rizqikhamami13@gmail.com",
          hint: "Kirim pesan langsung",
        },
      ],
      cv_note: "CV tersedia dalam format PDF, diperbarui secara berkala.",
    },
    footer: {
      made_with: "Dibuat dengan",
      by: "oleh Rizqi Khamami",
      rights: "Seluruh hak cipta dilindungi.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Rizqi Khamami",
      roles: [
        "IoT & Electronics Enthusiast",
        "AI Agent Developer",
        "DevSecOps Practitioner",
        "Linux & n8n Power User",
        "Vibe Coder",
      ],
      description:
        "A technology hobbyist building real solutions at the intersection of hardware, automation, and artificial intelligence. From electronic circuits to AI agents—I explore it all.",
      cta_projects: "View Projects",
      cta_contact: "Contact Me",
      cta_cv: "Download CV",
    },
    about: {
      title: "About Me",
      subtitle: "Technology Hobbyist & Practitioner",
      bio: [
        "I'm a passionate technology hobbyist with hands-on experience across multiple domains: from designing electronic circuits to building intelligent AI agents.",
        "My journey started with a deep interest in electronics and grew into a wider ecosystem—IoT, network automation, Linux server management, and now AI & prompt engineering.",
        "I believe the best technology emerges from combining solid hardware understanding with strong software capabilities. Every project is a new experiment to learn deeper.",
      ],
      stats: [
        { label: "Tech Domains", value: "10+" },
        { label: "Completed Projects", value: "20+" },
        { label: "Years Exploring", value: "5+" },
        { label: "Tools & Platforms", value: "30+" },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Technology stack I've mastered and actively explore",
      categories: [
        {
          name: "Electronics & IoT",
          icon: "cpu",
          skills: [
            "Arduino",
            "ESP32/ESP8266",
            "Raspberry Pi",
            "MQTT",
            "Node-RED",
            "Sensor Integration",
            "PCB Design",
            "Multimeter & Oscilloscope",
          ],
        },
        {
          name: "AI & Automation",
          icon: "bot",
          skills: [
            "n8n",
            "AI Agent",
            "Prompt Engineering",
            "LLM Integration",
            "RAG Pipeline",
            "Workflow Automation",
            "OpenAI API",
            "Ollama",
          ],
        },
        {
          name: "Linux & DevOps",
          icon: "terminal",
          skills: [
            "Linux (Debian/Ubuntu/Arch)",
            "Docker",
            "Nginx",
            "SSH Hardening",
            "CI/CD",
            "Git",
            "Bash Scripting",
            "Monitoring Stack",
          ],
        },
        {
          name: "DevSecOps & Pentest",
          icon: "shield",
          skills: [
            "Kali Linux",
            "Nmap",
            "Metasploit",
            "Wireshark",
            "Burp Suite",
            "OWASP",
            "Vulnerability Assessment",
            "Network Security",
          ],
        },
        {
          name: "Vibe Coding",
          icon: "code",
          skills: [
            "Python",
            "JavaScript/TypeScript",
            "Next.js",
            "FastAPI",
            "REST API",
            "WebSocket",
            "Tailwind CSS",
            "Git Workflow",
          ],
        },
        {
          name: "Networking",
          icon: "network",
          skills: [
            "MikroTik",
            "RouterOS",
            "VLAN",
            "Firewall Rules",
            "VPN",
            "DNS",
            "DHCP",
            "Network Monitoring",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Things I've actually built and explored",
      items: [
        {
          id: "smart-garden",
          title: "Smart Garden IoT System",
          description:
            "Smart garden monitoring and automation system based on ESP32 + MQTT + Node-RED. Monitors soil moisture, temperature, light, and controls a water pump automatically via a real-time web dashboard.",
          tags: ["ESP32", "MQTT", "Node-RED", "IoT", "Sensor", "Automation"],
          status: "Completed",
          highlight: "Real-time monitoring with Telegram notifications",
          icon: "leaf",
        },
        {
          id: "n8n-mikrotik",
          title: "Network Automation with n8n & MikroTik",
          description:
            "Network management automation workflow using n8n as orchestration and MikroTik RouterOS API. Includes auto-blocking suspicious IPs, daily bandwidth reports, and alert notifications.",
          tags: ["n8n", "MikroTik", "RouterOS API", "Network", "Automation"],
          status: "Active",
          highlight: "Auto-blocks 200+ suspicious IPs per day",
          icon: "network",
        },
        {
          id: "ai-agent-lab",
          title: "AI Agent & 9Router Lab",
          description:
            "Multi-model AI agent experimentation lab with intelligent routing between LLMs. Uses a 9Router architecture to distribute tasks to the most suitable model (GPT-4, Claude, local Ollama).",
          tags: ["AI Agent", "LLM", "Ollama", "Prompt Engineering", "RAG"],
          status: "Experimental",
          highlight: "Multi-model routing with automatic fallback",
          icon: "bot",
        },
        {
          id: "linux-homelab",
          title: "Linux Home Lab Server",
          description:
            "Home server based on Debian/Ubuntu with a complete stack: Docker, Nginx reverse proxy, Grafana+Prometheus monitoring, Wireguard VPN, and auto-backup. Used as a personal development sandbox.",
          tags: ["Linux", "Docker", "Nginx", "Grafana", "Prometheus", "VPN"],
          status: "Active",
          highlight: "99.9% uptime for 12 months",
          icon: "server",
        },
        {
          id: "electronics-notes",
          title: "Electronics Repair & Diagnostic Notes",
          description:
            "Comprehensive documentation of electronics repair and diagnostics: PSUs, motherboards, ESP modules, sensors, and SMD components. Includes testing schematics and practical troubleshooting notes.",
          tags: [
            "Electronics",
            "Repair",
            "PCB",
            "SMD",
            "Diagnostics",
            "Documentation",
          ],
          status: "Ongoing",
          highlight: "100+ repair cases documented",
          icon: "zap",
        },
      ],
      status_labels: {
        Completed: "Completed",
        Active: "Active",
        Experimental: "Experimental",
        Ongoing: "Ongoing",
      },
    },
    experience: {
      title: "Journey",
      subtitle: "Technology exploration & learning timeline",
      items: [
        {
          year: "2024–Now",
          title: "AI Agent & Prompt Engineering",
          description:
            "Deep exploration of the AI ecosystem: building AI agents, RAG pipelines, multi-LLM integration, and workflow automation with n8n. Focus on systematic prompt engineering.",
          tags: ["AI", "n8n", "LLM", "Automation"],
        },
        {
          year: "2023–2024",
          title: "DevSecOps & Linux Hardening",
          description:
            "Built a home lab with a DevSecOps approach: CI/CD implementation, container security, vulnerability scanning, and a Linux pentest environment with Kali.",
          tags: ["DevSecOps", "Linux", "Docker", "Security"],
        },
        {
          year: "2022–2023",
          title: "Network Engineering & MikroTik",
          description:
            "Deepened MikroTik RouterOS knowledge: VLAN configuration, firewall, QoS, VPN, and network monitoring. Started automating network tasks with scripting.",
          tags: ["MikroTik", "Networking", "RouterOS", "VPN"],
        },
        {
          year: "2020–2022",
          title: "IoT & Embedded Systems",
          description:
            "Built IoT projects with ESP32/ESP8266, Arduino, Raspberry Pi. Sensor integration, MQTT, Node-RED, and real-time monitoring dashboards.",
          tags: ["IoT", "ESP32", "Arduino", "MQTT"],
        },
        {
          year: "2019–2020",
          title: "Electronics & Hardware",
          description:
            "Strong foundation in basic electronics: reading schematics, component troubleshooting, SMD soldering, and using digital oscilloscopes and multimeters.",
          tags: ["Electronics", "Hardware", "PCB", "Repair"],
        },
      ],
    },
    github: {
      title: "GitHub",
      subtitle: "Coding activity and open source contributions",
      username: "Khamami13",
      cta: "View All Repositories",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's collaborate or just talk about tech",
      description:
        "Open to collaboration opportunities, freelance projects, technical discussions, or simply sharing ideas about technology. Reach me through the platforms below.",
      links: [
        {
          label: "LinkedIn",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/rizqi-khamami-475a801b3/",
          hint: "Professional connection",
        },
        {
          label: "GitHub",
          icon: "github",
          url: "https://github.com/Khamami13",
          hint: "Check my code",
        },
        {
          label: "Email",
          icon: "mail",
          url: "mailto:rizqikhamami13@gmail.com",
          hint: "Send a direct message",
        },
      ],
      cv_note: "CV available in PDF format, updated regularly.",
    },
    footer: {
      made_with: "Made with",
      by: "by Rizqi Khamami",
      rights: "All rights reserved.",
    },
  },
};

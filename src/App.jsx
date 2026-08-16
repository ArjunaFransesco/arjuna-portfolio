import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  Award,
  BadgeCheck,
  BarChart3,
  BatteryFull,
  Briefcase,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  Copy,
  Download,
  ExternalLink,
  Gamepad2,
  GraduationCap,
  Home,
  LayoutGrid,
  LineChart,
  Mail,
  Network,
  Package,
  Phone,
  Radio,
  Send,
  Shield,
  Terminal,
  User,
  Wifi,
} from "lucide-react";

const Icons = {
  Activity,
  Award,
  BadgeCheck,
  BarChart3,
  BatteryFull,
  Briefcase,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  Copy,
  Download,
  ExternalLink,
  Gamepad2,
  GraduationCap,
  Home,
  LayoutGrid,
  LineChart,
  Mail,
  Network,
  Package,
  Phone,
  Radio,
  Send,
  Shield,
  Terminal,
  User,
  Wifi,
};

const profile = {
  name: "Arjuna Fransesco",
  role: "Data Scientist | SQL | Excel | Python | Software Engineer",
  location: "Kota Kediri, Jawa Timur, Indonesia",
  email: "arjunafransesco1@gmail.com",
  altEmail: "arjunadota2098@gmail.com",
  phone: "+62 877-5346-2865",
  linkedin: "https://www.linkedin.com/in/arjunafransesco",
  summary:
    "Mahasiswa D3 Manajemen Informatika Politeknik Negeri Malang yang fokus pada analisis data, data science, database management, dan pengembangan web. Terbiasa memakai Python, MySQL, Excel, Laravel, HTML, CSS, dan JavaScript untuk membangun solusi berbasis data dan sistem informasi.",
};

const stats = [
  { value: "3.83", label: "IPK", icon: "GraduationCap", tone: "text-primarySoft" },
  { value: "10k-15k", label: "Live viewers", icon: "BarChart3", tone: "text-emerald" },
  { value: "2026", label: "AWS Data Engineering", icon: "BadgeCheck", tone: "text-amber" },
  { value: "6+", label: "Project domains", icon: "Network", tone: "text-primarySoft" },
];

const navItems = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "about", label: "About", icon: "User" },
  { id: "projects", label: "Projects", icon: "LayoutGrid" },
  { id: "experience", label: "Experience", icon: "Clock3" },
  { id: "contact", label: "Contact", icon: "Mail" },
];

const projects = [
  {
    title: "Anita Konveksi Web System",
    type: "Web",
    period: "Feb 2026 - Jun 2026",
    icon: "Package",
    summary:
      "Full stack project-based system using Laravel and MySQL to support business operations and feature implementation.",
    stack: ["Laravel", "MySQL", "Front-end", "Back-end"],
  },
  {
    title: "Data Analytics Dashboard",
    type: "Data",
    period: "2026",
    icon: "LineChart",
    summary:
      "Exploratory analytics workflow with Excel and Python for preprocessing, visualization, and insight presentation.",
    stack: ["Python", "Excel", "Visualization", "Statistics"],
  },
  {
    title: "Machine Learning Prediction Lab",
    type: "ML",
    period: "Project-based",
    icon: "Activity",
    summary:
      "Project workflow covering preprocessing, model training, evaluation, and prediction analysis for data-driven decisions.",
    stack: ["Python", "ML", "Evaluation", "Prediction"],
  },
  {
    title: "Cybersecurity Research Report",
    type: "Security",
    period: "Project-based",
    icon: "Shield",
    summary: "Vulnerability analysis, CVE research, risk classification, and structured technical reporting.",
    stack: ["CVE", "Risk", "Documentation", "Analysis"],
  },
  {
    title: "Interactive Game Prototype",
    type: "Web",
    period: "Project-based",
    icon: "Gamepad2",
    summary: "Simple game project with gameplay logic, interface flow, and technical documentation.",
    stack: ["JavaScript", "Game Logic", "UI Flow", "Docs"],
  },
  {
    title: "Live Commerce Operations",
    type: "Business",
    period: "Aug 2025 - Oct 2025",
    icon: "Radio",
    summary:
      "TikTok LIVE sales sessions for digital products with real-time audience engagement and transaction handling.",
    stack: ["Communication", "Sales", "Engagement", "Operations"],
  },
];

const experiences = [
  {
    role: "IT Engineer",
    org: "Freelance | Self-Employed",
    time: "Jun 2026 - Present",
    body:
      "Handled project-based IT work across web development, game development, machine learning, cybersecurity, and technical documentation.",
  },
  {
    role: "Full Stack Web Developer",
    org: "Anita Konveksi",
    time: "Feb 2026 - Jun 2026",
    body:
      "Developed and supported web features using Laravel and MySQL while collaborating on system improvements and technical problem solving.",
  },
  {
    role: "Advokasi",
    org: "UKM English Club Polinema",
    time: "Jan 2026 - Present",
    body:
      "Managed member aspirations, supported internal issue resolution, and coordinated communication with core committees.",
  },
  {
    role: "Digital Sales & Live Streaming Host",
    org: "TikTok LIVE",
    time: "Aug 2025 - Oct 2025",
    body:
      "Hosted live commerce sessions with 10,000-15,000 total viewers in 2-hour sessions while handling promotion, engagement, and sales.",
  },
  {
    role: "Treasurer",
    org: "Takmir Masjid Al-Anwar",
    time: "Apr 2022 - Apr 2023",
    body:
      "Managed budgeting, infaq records, operational cash, and transparent financial documentation for organization activities.",
  },
];

const skillGroups = {
  data: ["Python", "MySQL", "Excel", "Probability & Statistics", "Data Visualization", "Data Science"],
  web: ["Laravel", "JavaScript", "HTML", "CSS", "React", "Tailwind CSS"],
  engineering: ["Git", "System Requirements", "Technical Documentation", "UML", "ERD", "DFD"],
  soft: ["Analytical Thinking", "Time Management", "Problem Solving", "Communication", "Teamwork"],
};

const certificates = [
  "Data Engineering on AWS - Foundations",
  "Data Analytics & Visualization: Using Excel and Python",
  "Data Science: Probability and Statistics",
  "Introduction to Data Analysis using Microsoft Excel",
  "Introduction to Generative AI Studio",
  "Mini Course - Intro to Data Analytics",
];

function Icon({ name, className = "h-5 w-5", strokeWidth = 2 }) {
  const Component = Icons[name] || Icons.Circle;
  return <Component aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}

function SectionHeader({ kicker, title, body }) {
  return (
    <div className="reveal mb-6 flex flex-col gap-3 md:mb-8">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primarySoft">{kicker}</span>
      <div className="grid gap-4 md:grid-cols-[0.82fr_1fr] md:items-end">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-textMain md:text-4xl">{title}</h2>
        {body ? <p className="text-sm leading-6 text-textMuted md:text-base">{body}</p> : null}
      </div>
    </div>
  );
}

function TopBar({ active, onNavigate }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-10">
        <button
          className="group flex items-center text-left"
          onClick={() => onNavigate("home")}
          type="button"
          aria-label="Kembali ke home"
        >
          <span>
            <span className="block text-sm font-bold text-textMain transition group-hover:text-primarySoft md:text-base">
              Arjuna Fransesco
            </span>
            <span className="block text-xs text-textDim">Data & Software Portfolio</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 rounded border border-stroke bg-surface/70 p-1 md:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`nav-link rounded px-4 py-2 text-sm transition ${
                active === item.id ? "is-active bg-primary text-white" : "text-textMuted hover:bg-panel hover:text-textMain"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-primarySoft">
          <Icon name="Wifi" />
          <Icon name="BatteryFull" />
        </div>
      </div>
    </header>
  );
}

function Hero({ onNavigate }) {
  return (
    <section id="home" className="portfolio-section mx-auto max-w-7xl px-4 pb-14 pt-24 md:px-10 md:pb-16 md:pt-28">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="reveal max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded border border-stroke bg-panel px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-textMuted">
            <span className="h-2 w-2 rounded bg-emerald" />
            Available for data and software projects
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.08] text-textMain sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-primarySoft md:text-xl">{profile.role}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-textMuted">{profile.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex items-center justify-center gap-2 rounded bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c66ff]"
              onClick={() => onNavigate("projects")}
              type="button"
            >
              <Icon name="LayoutGrid" className="h-5 w-5" />
              Lihat Projects
            </button>
            <a
              className="inline-flex items-center justify-center gap-2 rounded border border-strokeHigh px-5 py-3 text-sm font-semibold text-textMain transition hover:border-primary hover:bg-panel"
              href="/assets/CV_Arjuna_Fransesco.pdf"
            >
              <Icon name="Download" className="h-5 w-5" />
              Download CV
            </a>
          </div>
        </div>

        <div className="interactive-card reveal glass rounded-lg p-4 shadow-panel">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded bg-ruby" />
              <span className="h-3 w-3 rounded bg-amber" />
              <span className="h-3 w-3 rounded bg-emerald" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-textDim">profile.kernel</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="surface-card overflow-hidden">
              <img
                alt="Preview halaman pertama CV Arjuna Fransesco"
                className="h-full min-h-[260px] w-full object-cover object-top opacity-90"
                src="/assets/cv-preview.png"
              />
            </div>
            <div className="flex flex-col gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="surface-card p-4 transition">
                  <div className="flex items-center justify-between gap-3">
                    <Icon name={stat.icon} className={`h-7 w-7 ${stat.tone}`} />
                    <span className="text-right text-2xl font-bold text-textMain">{stat.value}</span>
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-textDim">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const [mode, setMode] = useState("data");
  const modes = [
    { id: "data", label: "Data" },
    { id: "web", label: "Web" },
    { id: "engineering", label: "Engineering" },
    { id: "soft", label: "Soft Skill" },
  ];

  return (
    <section id="about" className="portfolio-section mx-auto max-w-7xl px-4 py-12 md:px-10 md:py-14">
      <SectionHeader
        kicker="About"
        title="Profil yang menggabungkan data, web, dan dokumentasi teknis."
        body="Bagian ini dirangkum dari CV dan LinkedIn Profile. Fokusnya adalah kemampuan yang bisa langsung ditampilkan ke recruiter atau calon klien."
      />
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="interactive-card reveal surface-card p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-primary text-lg font-black text-white">
              AF
            </div>
            <div>
              <h3 className="text-2xl font-bold text-textMain">{profile.name}</h3>
              <p className="mt-2 text-sm leading-6 text-textMuted">{profile.location}</p>
            </div>
          </div>
          <dl className="mt-8 grid gap-4 text-sm">
            <div className="flex items-start justify-between gap-4 border-t border-stroke pt-4">
              <dt className="text-textDim">Education</dt>
              <dd className="max-w-[220px] text-right text-textMain">
                D3 Manajemen Informatika, Politeknik Negeri Malang
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-stroke pt-4">
              <dt className="text-textDim">Period</dt>
              <dd className="text-right text-textMain">Aug 2024 - Aug 2027</dd>
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-stroke pt-4">
              <dt className="text-textDim">Languages</dt>
              <dd className="text-right text-textMain">Indonesian, English</dd>
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-stroke pt-4">
              <dt className="text-textDim">Primary email</dt>
              <dd className="max-w-[220px] break-words text-right text-primarySoft">{profile.email}</dd>
            </div>
          </dl>
        </div>

        <div className="interactive-card reveal surface-card p-6">
          <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Skill groups">
            {modes.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={mode === item.id}
                onClick={() => setMode(item.id)}
                className={`rounded border px-4 py-2 text-sm font-semibold transition ${
                  mode === item.id
                    ? "border-primary bg-primary text-white"
                    : "border-stroke bg-background text-textMuted hover:border-strokeHigh hover:text-textMain"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {skillGroups[mode].map((skill) => (
              <div
                key={skill}
                className="flex min-h-[58px] items-center gap-3 rounded border border-stroke bg-panel px-4 py-3 transition hover:border-primary"
              >
                <Icon name="CheckCircle2" className="h-5 w-5 text-emerald" />
                <span className="text-sm font-medium text-textMain">{skill}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-stroke pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-textDim">Certifications</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {certificates.map((cert) => (
                <div key={cert} className="flex items-start gap-3 text-sm leading-6 text-textMuted">
                  <Icon name="Award" className="mt-1 h-5 w-5 shrink-0 text-primarySoft" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Web", "Data", "ML", "Security", "Business"];
  const visibleProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.type === filter)),
    [filter],
  );

  return (
    <section id="projects" className="portfolio-section mx-auto max-w-7xl px-4 py-12 md:px-10 md:py-14">
      <SectionHeader
        kicker="Projects"
        title="Project surface yang menampilkan bidang kerja utama Arjuna."
        body="Filter kartu untuk melihat fokus project. Setiap kartu dibuat dari pengalaman CV/Profile, bukan placeholder kosong."
      />
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 hide-scrollbar" aria-label="Project filters">
        {filters.map((item) => (
          <button
            key={item}
            className={`shrink-0 rounded border px-4 py-2 text-sm font-semibold transition ${
              filter === item
                ? "border-primary bg-primary text-white"
                : "border-stroke bg-panel text-textMuted hover:border-primary hover:text-textMain"
            }`}
            onClick={() => setFilter(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <article
            key={project.title}
            className="interactive-card reveal surface-card flex min-h-[270px] flex-col p-5 transition"
            style={{ transitionDelay: `${Math.min(index * 45, 180)}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-panelHigh text-primarySoft">
                <Icon name={project.icon} className="h-7 w-7" />
              </div>
              <span className="rounded border border-strokeHigh px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-textMuted">
                {project.type}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-bold leading-7 text-textMain">{project.title}</h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-primarySoft">{project.period}</p>
            <p className="mt-4 flex-1 text-sm leading-6 text-textMuted">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded border border-stroke bg-background px-2.5 py-1 text-xs text-textMuted">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="portfolio-section mx-auto max-w-7xl px-4 py-12 md:px-10 md:py-14">
      <SectionHeader
        kicker="Experience"
        title="Timeline ringkas dari kerja, organisasi, dan pencapaian."
        body="Disusun untuk cepat dipindai: role, tempat, periode, dan dampak utama."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
        <div className="interactive-card reveal surface-card p-6">
          <ol className="relative border-l border-stroke pl-6">
            {experiences.map((item, index) => (
              <li key={`${item.role}-${item.time}`} className={`${index === experiences.length - 1 ? "" : "pb-8"} relative`}>
                <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded bg-background ring-2 ring-primary">
                  <span className="h-1.5 w-1.5 rounded bg-primarySoft" />
                </span>
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-bold text-textMain">{item.role}</h3>
                  <span className="text-sm font-semibold text-primarySoft">{item.time}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-textDim">{item.org}</p>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-textMuted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="grid gap-5">
          <div className="interactive-card reveal surface-card overflow-hidden">
            <img
              alt="Preview LinkedIn Profile Arjuna Fransesco"
              className="max-h-[420px] w-full object-cover object-top opacity-90"
              src="/assets/profile-preview.png"
            />
          </div>
          <div className="interactive-card reveal surface-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-textDim">Source documents</p>
            <div className="mt-4 grid gap-3">
              <a
                className="flex items-center justify-between rounded border border-stroke bg-panel px-4 py-3 text-sm text-textMain transition hover:border-primary"
                href="/assets/CV_Arjuna_Fransesco.pdf"
              >
                <span>CV Arjuna Fransesco</span>
                <Icon name="ExternalLink" className="h-5 w-5 text-primarySoft" />
              </a>
              <a
                className="flex items-center justify-between rounded border border-stroke bg-panel px-4 py-3 text-sm text-textMain transition hover:border-primary"
                href="/assets/Profile.pdf"
              >
                <span>LinkedIn Profile PDF</span>
                <Icon name="ExternalLink" className="h-5 w-5 text-primarySoft" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("Ready");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setStatus(`Email utama: ${profile.email}`);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    setStatus("Message drafted. Use email or LinkedIn to continue the conversation.");
  };

  return (
    <section id="contact" className="portfolio-section mx-auto max-w-7xl px-4 py-12 md:px-10 md:py-14">
      <SectionHeader
        kicker="Contact"
        title="Siap untuk kolaborasi, project data, atau web system."
        body="Panel ini dibuat interaktif untuk copy email dan menyusun pesan singkat. Untuk pengiriman final, gunakan email atau LinkedIn."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="interactive-card reveal surface-card p-6">
          <div className="grid gap-4">
            <a className="flex items-center gap-4 rounded border border-stroke bg-panel p-4 transition hover:border-primary" href={`mailto:${profile.email}`}>
              <Icon name="Mail" className="h-6 w-6 text-primarySoft" />
              <span>
                <span className="block text-sm font-semibold text-textMain">{profile.email}</span>
                <span className="block text-xs text-textDim">Primary email</span>
              </span>
            </a>
            <a
              className="flex items-center gap-4 rounded border border-stroke bg-panel p-4 transition hover:border-primary"
              href={`tel:${profile.phone.replaceAll(" ", "")}`}
            >
              <Icon name="Phone" className="h-6 w-6 text-emerald" />
              <span>
                <span className="block text-sm font-semibold text-textMain">{profile.phone}</span>
                <span className="block text-xs text-textDim">Mobile</span>
              </span>
            </a>
            <a className="flex items-center gap-4 rounded border border-stroke bg-panel p-4 transition hover:border-primary" href={profile.linkedin}>
              <Icon name="Briefcase" className="h-6 w-6 text-primarySoft" />
              <span>
                <span className="block text-sm font-semibold text-textMain">linkedin.com/in/arjunafransesco</span>
                <span className="block text-xs text-textDim">LinkedIn</span>
              </span>
            </a>
          </div>
          <button
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded border border-strokeHigh px-4 py-3 text-sm font-semibold text-textMain transition hover:border-primary hover:bg-panel"
            onClick={copyEmail}
            type="button"
          >
            <Icon name={copied ? "Check" : "Copy"} className="h-5 w-5" />
            {copied ? "Email copied" : "Copy email"}
          </button>
        </div>

        <form className="interactive-card reveal surface-card p-6" onSubmit={submitForm}>
          <div className="mb-5 flex items-center justify-between border-b border-stroke pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-textDim">Message console</p>
              <p className="mt-1 text-sm text-emerald">{status}</p>
            </div>
            <Icon name="Terminal" className="h-7 w-7 text-primarySoft" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-textMain">
              Nama
              <input
                className="rounded border border-stroke bg-background px-4 py-3 text-sm font-normal text-textMain outline-none transition focus:border-primary"
                placeholder="Nama kamu"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-textMain">
              Kategori
              <select className="rounded border border-stroke bg-background px-4 py-3 text-sm font-normal text-textMain outline-none transition focus:border-primary">
                <option>Data project</option>
                <option>Web development</option>
                <option>Technical documentation</option>
                <option>Collaboration</option>
              </select>
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-textMain">
            Pesan
            <textarea
              className="min-h-[150px] resize-y rounded border border-stroke bg-background px-4 py-3 text-sm font-normal leading-6 text-textMain outline-none transition focus:border-primary"
              placeholder="Tulis kebutuhan project atau peluang kolaborasi..."
            />
          </label>
          <button
            className="mt-5 inline-flex items-center justify-center gap-2 rounded bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c66ff]"
            type="submit"
          >
            <Icon name="Send" className="h-5 w-5" />
            Prepare Message
          </button>
        </form>
      </div>
    </section>
  );
}

function BottomDock({ active, onNavigate }) {
  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-32px)] max-w-xl -translate-x-1/2 rounded-lg p-2 shadow-panel glass md:hidden"
      aria-label="Mobile dock"
    >
      <div className="grid grid-cols-5 gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`dock-button flex min-h-[48px] flex-col items-center justify-center gap-1 border text-[11px] font-semibold ${
              active === item.id
                ? "border-primary bg-primary text-white"
                : "border-transparent text-textMuted hover:bg-panelHigh hover:text-textMain"
            }`}
            onClick={() => onNavigate(item.id)}
            type="button"
          >
            <Icon name={item.icon} className="h-5 w-5" />
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const syncActiveSection = () => {
      const scrollPosition = window.scrollY + 120;
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          current = item.id;
        }
      });

      setActive(current);
    };

    syncActiveSection();
    window.addEventListener("scroll", syncActiveSection, { passive: true });
    window.addEventListener("resize", syncActiveSection);

    return () => {
      window.removeEventListener("scroll", syncActiveSection);
      window.removeEventListener("resize", syncActiveSection);
    };
  }, []);

  useEffect(() => {
    const observeReveal = (element, observer) => {
      if (element.dataset.revealObserved) return;
      element.dataset.revealObserved = "true";
      observer.observe(element);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => observeReveal(element, revealObserver));

    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll(".reveal").forEach((element) => observeReveal(element, revealObserver));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".interactive-card");

    const handleMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -5;
      const rotateY = ((x / rect.width) - 0.5) * 5;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.style.setProperty("--rotate-x", `${rotateX}deg`);
      card.style.setProperty("--rotate-y", `${rotateY}deg`);
    };

    const handleLeave = (event) => {
      const card = event.currentTarget;
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  const navigate = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (!section) return;

    const top = id === "home" ? 0 : section.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <TopBar active={active} onNavigate={navigate} />
      <main>
        <Hero onNavigate={navigate} />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <BottomDock active={active} onNavigate={navigate} />
      <footer className="mx-auto max-w-7xl px-4 pb-28 pt-6 text-center text-xs text-textDim md:px-10 md:pb-12">
        Built as an interactive React and Tailwind portfolio using CV and LinkedIn profile data.
      </footer>
    </>
  );
}

import { useState, useEffect, useRef } from "react";
const PHOTO = "data:image/jpeg;base64,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";

const data = {
  name: "Christ Antony",
  lastName: "TCHOKOGUEU",
  title: "Data Analyst",
  subtitle: "Recherche stage de fin d'études · Dès Juillet 2026 · 4 à 6 mois",
  contact: {
    phone: "074 585 6301",
    email: "chrisantony018@gmail.com",
    location: "France",
  },
  profile: `Étudiant en MBA Big Data & Intelligence Artificielle, spécialisé en analyse de données et Business Intelligence. Expérimenté dans la structuration et l'analyse de données, la définition d'indicateurs KPI et la création de tableaux de bord Power BI. Recherche un stage de fin d'études dès juillet 2026 pour une durée de 4 à 6 mois.`,
  skills: {
    tech: [
      { name: "Python", level: 70 },
      { name: "SQL", level: 75 },
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 78 },
      { name: "Snowflake", level: 75 },
      { name: "Spark", level: 70 },
      { name: "Azure / AWS", level: 68 },
      { name: "Alteryx", level: 72 },
      { name: "Excel", level: 78 },
    ],
    tools: ["Dataiku", "Jupyter", "Git", "Jira", "MongoDB", "CosmosDB", "MySQL", "SQL Server", "Excel (Power Query)"],
    soft: ["Analyse & synthèse", "Communication claire", "Rigueur", "Curiosité", "Adaptabilité", "Travail en équipe", "Autonomie", "Sens des responsabilités", "Résolution de problèmes"],
  },
  certifications: [
    "Alteryx Foundation Micro-Credential",
    "Alteryx Designer Core Micro-Credential",
    "AWS Academy – Cloud Foundations",
    "AWS Academy – Data Center Technician",
  ],
  experiences: [
    {
      title: "Projets Data Analyst",
      company: "MBA ESG Paris",
      period: "2025",
      type: "academic",
      projects: [
        {
          name: "Analyse des offres d'emploi LinkedIn",
          tags: ["Python", "SQL", "Snowflake"],
          bullets: [
            "Collecte et analyse de grands volumes de données d'offres d'emploi",
            "Création d'une base de données dans Snowflake",
            "Identification des tendances de recrutement et salaires",
          ],
        },
        {
          name: "Dashboard Power BI – Adidas",
          tags: ["Power BI"],
          bullets: [
            "Conception de dashboards pour le suivi de la performance",
            "Analyse des KPI : CA, volumes, marges",
            "Recommandations business orientées données",
          ],
        },
        {
          name: "Analyse de données commerciales",
          tags: ["Power BI", "Excel", "SQL"],
          bullets: [
            "Tableaux de bord KPI commerciaux",
            "Automatisation de reportings Excel",
            "Contrôle qualité et cohérence des données",
          ],
        },
      ],
    },
    {
      title: "Entrepreneur",
      company: "Christ Shop",
      period: "2022 – 2024",
      type: "pro",
      bullets: [
        "Gestion des relations fournisseurs et négociation des coûts",
        "Analyse des ventes et gestion des stocks",
        "Optimisation des publications produits et du catalogue",
      ],
    },
    {
      title: "Marketing Analyst (Stage)",
      company: "Ets Phyto-Pro",
      period: "2020",
      type: "pro",
      bullets: [
        "Collecte et structuration des données de vente",
        "Suivi des KPI commerciaux (CA, marges, conversion)",
        "Création de tableaux de bord Excel",
      ],
    },
  ],
  education: [
    { degree: "MBA Big Data & Intelligence Artificielle", school: "MBA ESG – Paris", period: "2025 – 2027", level: "Bac+5" },
    { degree: "Licence Pro – Marketing, Commerce et Vente", school: "Université de Douala", period: "2020", level: "Bac+3" },
    { degree: "Baccalauréat Anglophone", school: "KDCHS Douala", period: "2016", level: "Bac" },
  ],
  languages: [
    { lang: "Français", level: "Langue maternelle", pct: 100 },
    { lang: "Anglais", level: "Courant (C1)", pct: 85 },
  ],
  interests: ["Sport", "Musique", "Cinéma", "Jeux vidéo", "Animé"],
};

const ACCENT = "#00D4FF";
const ACCENT2 = "#FF6B35";
const ACCENT3 = "#7C3AED";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimSection({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function SkillBar({ name, level, delay }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#e2e8f0" }}>{name}</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: ACCENT }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 99, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: visible ? `${level}%` : "0%",
          background: `linear-gradient(90deg, ${ACCENT3}, ${ACCENT})`,
          borderRadius: 99,
          transition: `width 1.2s cubic-bezier(.4,0,.2,1) ${delay}s`,
          boxShadow: `0 0 10px ${ACCENT}66`,
        }} />
      </div>
    </div>
  );
}

function Tag({ text, color = ACCENT }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 99,
      fontSize: 11,
      fontFamily: "'DM Mono', monospace",
      background: `${color}18`,
      color: color,
      border: `1px solid ${color}44`,
      marginRight: 6,
      marginBottom: 4,
    }}>{text}</span>
  );
}

function SectionTitle({ children, accent = ACCENT }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 22,
        fontWeight: 800,
        color: "#fff",
        letterSpacing: "-0.02em",
        margin: 0,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}>
        <span style={{ width: 30, height: 3, background: `linear-gradient(90deg, ${accent}, transparent)`, borderRadius: 2, display: "inline-block" }} />
        {children}
      </h2>
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("profil");
  const [hoveredNav, setHoveredNav] = useState(null);
  const navItems = [
    { id: "profil", label: "Profil" },
    { id: "competences", label: "Compétences" },
    { id: "experiences", label: "Expériences" },
    { id: "formation", label: "Formation" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(n => document.getElementById(n.id));
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080C14",
      color: "#e2e8f0",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      position: "relative",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { overflow-x: hidden; max-width: 100vw; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #080C14; }
        ::-webkit-scrollbar-thumb { background: ${ACCENT3}88; border-radius: 3px; }
        ::selection { background: ${ACCENT}44; }
        a { color: inherit; text-decoration: none; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .edu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 60px; }
        .nav-links { display: flex; gap: 6px; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
        .badge-text { font-family: 'DM Mono', monospace; font-size: 12px; color: #00D4FF; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 260px; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .skills-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .edu-grid { grid-template-columns: 1fr !important; margin-bottom: 30px !important; }
          .nav-links { display: none !important; }
          .footer-inner { flex-direction: column !important; gap: 12px !important; text-align: center !important; }
          .badge-text { font-size: 11px !important; max-width: 200px !important; }
          h1 { word-break: break-word !important; }
        }
      `}</style>

      {/* Background grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Glow blobs */}
      <div style={{ position: "fixed", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT3}22 0%, transparent 70%)`, zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: 100, left: -150, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT}18 0%, transparent 70%)`, zIndex: 0, pointerEvents: "none" }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(8,12,20,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 clamp(16px, 4vw, 40px)",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}>
          <span style={{ color: ACCENT }}>C.A.</span>
          <span style={{ color: "#fff" }}>T</span>
        </div>
        <div className="nav-links">
          {navItems.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)}
              onMouseEnter={() => setHoveredNav(n.id)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                background: activeSection === n.id ? `${ACCENT}18` : hoveredNav === n.id ? "rgba(255,255,255,0.05)" : "transparent",
                border: activeSection === n.id ? `1px solid ${ACCENT}44` : "1px solid transparent",
                color: activeSection === n.id ? ACCENT : "#94a3b8",
                padding: "6px 16px",
                borderRadius: 8,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}>{n.label}</button>
          ))}
        </div>
        <a href={`mailto:${data.contact.email}`} style={{
          background: `linear-gradient(135deg, ${ACCENT3}, ${ACCENT})`,
          color: "#fff",
          padding: "7px 18px",
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 600,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          boxShadow: `0 0 20px ${ACCENT}44`,
          transition: "all 0.2s",
        }}>Contact</a>
      </nav>

      {/* HERO */}
      <section id="profil" style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", alignItems: "center", padding: "clamp(80px, 12vw, 120px) clamp(20px, 4vw, 40px) 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div className="hero-grid">
            <div>
              {/* Photo */}
              <div style={{ marginBottom: 24 }}>
                <div style={{
                  width: 90, height: 90, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${ACCENT3}, ${ACCENT})`,
                  padding: 3,
                  boxShadow: `0 0 28px ${ACCENT}44`,
                  display: "inline-block",
                }}>
                  <img src={PHOTO} alt="Christ Antony TCHOKOGUEU"
                    onError={e => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    display: "none", width: "100%", height: "100%", borderRadius: "50%",
                    background: `linear-gradient(135deg, ${ACCENT3}, ${ACCENT})`,
                    alignItems: "center", justifyContent: "center",
                    fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff",
                  }}>CA</div>
                </div>
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: `${ACCENT}12`, border: `1px solid ${ACCENT}33`,
                borderRadius: 99, padding: "6px 16px", marginBottom: 28,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: ACCENT, boxShadow: `0 0 8px ${ACCENT}`, animation: "pulse 2s infinite" }} />
                <span className="badge-text">Recherche stage de fin d'études · Dès Juillet 2026 · 4 à 6 mois</span>
              </div>
              <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }`}</style>

              <h1 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}>
                <span style={{ color: "#fff" }}>Christ Antony</span><br />
                <span style={{
                  background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT3})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>TCHOKOGUEU</span>
              </h1>

              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 14,
                color: ACCENT2,
                marginBottom: 24,
                letterSpacing: "0.05em",
              }}>DATA ANALYST</p>

              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#94a3b8", maxWidth: 480, marginBottom: 36 }}>
                {data.profile}
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[
                  { icon: "📍", text: data.contact.location },
                  { icon: "📞", text: data.contact.phone },
                  { icon: "✉️", text: data.contact.email },
                ].map((c, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10, padding: "8px 14px",
                    fontSize: 13, color: "#94a3b8",
                    maxWidth: "100%", overflow: "hidden",
                  }}>
                    <span style={{ flexShrink: 0 }}>{c.icon}</span>
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { num: "3+", label: "Ans d'expérience", color: ACCENT },
                { num: "8+", label: "Outils maîtrisés", color: ACCENT2 },
                { num: "4", label: "Certifications", color: ACCENT3 },
                { num: "C1", label: "Niveau anglais", color: "#10B981" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: "28px 20px",
                  textAlign: "center",
                  transition: "transform 0.2s, border-color 0.2s",
                  cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = s.color + "66"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
                >
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 8, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}

              {/* Languages */}
              <div style={{
                gridColumn: "1 / -1",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16, padding: "20px",
              }}>
                <p style={{ fontSize: 11, color: "#64748b", fontWeight: 600, letterSpacing: "0.1em", marginBottom: 14, textTransform: "uppercase" }}>Langues</p>
                {data.languages.map((l, i) => (
                  <div key={i} style={{ marginBottom: i < data.languages.length - 1 ? 12 : 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 13 }}>{l.lang}</span>
                      <span style={{ fontSize: 12, color: "#64748b", fontFamily: "'DM Mono', monospace" }}>{l.level}</span>
                    </div>
                    <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 99 }}>
                      <div style={{ width: `${l.pct}%`, height: "100%", background: `linear-gradient(90deg, ${ACCENT3}, ${ACCENT})`, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="competences" style={{ position: "relative", zIndex: 1, padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimSection>
            <SectionTitle accent={ACCENT}>Compétences</SectionTitle>
          </AnimSection>
          <div className="skills-grid">
            <AnimSection delay={0.1}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "28px" }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: ACCENT, marginBottom: 24, letterSpacing: "0.05em", textTransform: "uppercase" }}>Compétences techniques</h3>
                {data.skills.tech.map((s, i) => <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.07} />)}
              </div>
            </AnimSection>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <AnimSection delay={0.2}>
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "28px" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: ACCENT2, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>Outils & Environnements</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {data.skills.tools.map(t => <Tag key={t} text={t} color={ACCENT2} />)}
                  </div>
                </div>
              </AnimSection>

              <AnimSection delay={0.3}>
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "28px" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: ACCENT3, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>Soft Skills</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {data.skills.soft.map(s => <Tag key={s} text={s} color={ACCENT3} />)}
                  </div>
                </div>
              </AnimSection>

              <AnimSection delay={0.4}>
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "28px" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: "#10B981", marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>Certifications</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {data.certifications.map((c, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "#94a3b8" }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimSection>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" style={{ position: "relative", zIndex: 1, padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimSection>
            <SectionTitle accent={ACCENT2}>Expériences</SectionTitle>
          </AnimSection>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {data.experiences.map((exp, ei) => (
              <AnimSection key={ei} delay={ei * 0.1}>
                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20,
                  padding: "28px 32px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: 0, left: 0, width: 4, height: "100%",
                    background: exp.type === "academic"
                      ? `linear-gradient(180deg, ${ACCENT}, ${ACCENT3})`
                      : `linear-gradient(180deg, ${ACCENT2}, ${ACCENT3})`,
                    borderRadius: "20px 0 0 20px",
                  }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{exp.title}</h3>
                      <p style={{ color: exp.type === "academic" ? ACCENT : ACCENT2, fontSize: 14, fontWeight: 600 }}>{exp.company}</p>
                    </div>
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 12,
                      color: "#64748b",
                      background: "rgba(255,255,255,0.05)",
                      padding: "4px 12px",
                      borderRadius: 8,
                    }}>{exp.period}</span>
                  </div>

                  {exp.projects ? (
                    <div className="projects-grid">
                      {exp.projects.map((proj, pi) => (
                        <div key={pi} style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          borderRadius: 14, padding: "18px",
                        }}>
                          <p style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", marginBottom: 10 }}>{proj.name}</p>
                          <div style={{ marginBottom: 10 }}>
                            {proj.tags.map(t => <Tag key={t} text={t} color={ACCENT} />)}
                          </div>
                          <ul style={{ paddingLeft: 16 }}>
                            {proj.bullets.map((b, bi) => (
                              <li key={bi} style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, marginBottom: 4 }}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul style={{ paddingLeft: 18 }}>
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.8, marginBottom: 2 }}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATION */}
      <section id="formation" style={{ position: "relative", zIndex: 1, padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px) 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimSection>
            <SectionTitle accent={ACCENT3}>Formation</SectionTitle>
          </AnimSection>
          <div className="edu-grid">
            {data.education.map((e, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, padding: "28px",
                  height: "100%",
                  transition: "transform 0.2s, border-color 0.2s",
                  cursor: "default",
                }}
                  onMouseEnter={ex => { ex.currentTarget.style.transform = "translateY(-4px)"; ex.currentTarget.style.borderColor = ACCENT3 + "44"; }}
                  onMouseLeave={ex => { ex.currentTarget.style.transform = "translateY(0)"; ex.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
                >
                  <div style={{
                    display: "inline-block",
                    background: `${ACCENT3}18`,
                    color: ACCENT3,
                    border: `1px solid ${ACCENT3}33`,
                    borderRadius: 8,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontFamily: "'DM Mono', monospace",
                    marginBottom: 16,
                  }}>{e.level}</div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 8, lineHeight: 1.3 }}>{e.degree}</h3>
                  <p style={{ color: "#64748b", fontSize: 13, marginBottom: 8 }}>{e.school}</p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: ACCENT3 }}>{e.period}</p>
                </div>
              </AnimSection>
            ))}
          </div>

          {/* Interests */}
          <AnimSection delay={0.3}>
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20, padding: "28px",
            }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: "#94a3b8", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.05em" }}>Centres d'intérêt</h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[
                  { label: "Sport", emoji: "🏋️" },
                  { label: "Musique", emoji: "🎵" },
                  { label: "Cinéma", emoji: "🎬" },
                  { label: "Jeux vidéo", emoji: "🎮" },
                  { label: "Animé", emoji: "⛩️" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12, padding: "10px 18px",
                    fontSize: 14, color: "#94a3b8",
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT + "44"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#94a3b8"; }}
                  >
                    <span style={{ fontSize: 18 }}>{item.emoji}</span>{item.label}
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        position: "relative", zIndex: 1,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "28px clamp(20px, 4vw, 40px)",
        background: "rgba(8,12,20,0.9)",
      }}>
        <div className="footer-inner">
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14 }}>
          <span style={{ color: ACCENT }}>C.A.</span><span style={{ color: "#fff" }}>TCHOKOGUEU</span>
        </span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#334155" }}>
          Data Analyst · MBA ESG Paris
        </span>
        <a href={`mailto:${data.contact.email}`} style={{
          fontFamily: "'DM Mono', monospace", fontSize: 12,
          color: ACCENT,
          background: `${ACCENT}12`,
          border: `1px solid ${ACCENT}33`,
          padding: "6px 14px",
          borderRadius: 8,
        }}>{data.contact.email}</a>
        </div>
      </footer>
    </div>
  );
}

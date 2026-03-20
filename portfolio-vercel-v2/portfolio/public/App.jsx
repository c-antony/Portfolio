import { useState, useEffect, useRef } from "react";

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
        .footer-inner { display: flex; justify-content: space-between; align-items: center; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .skills-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .edu-grid { grid-template-columns: 1fr !important; margin-bottom: 30px !important; }
          .nav-links { display: none !important; }
          .footer-inner { flex-direction: column !important; gap: 12px !important; text-align: center !important; }
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
                  <img src="./linkl.jpg" alt="Christ Antony TCHOKOGUEU"
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
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: ACCENT }}>Recherche stage de fin d'études · Dès Juillet 2026 · 4 à 6 mois</span>
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
                  }}>
                    <span>{c.icon}</span>{c.text}
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
